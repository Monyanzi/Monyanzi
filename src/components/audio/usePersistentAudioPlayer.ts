import { useCallback, useEffect, useState } from "react";
import type { AudioBriefing } from "@/data/audioBriefings";

interface PlaybackSnapshot {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

interface AudioEntry {
  audio: HTMLAudioElement;
  src: string;
}

const audioRegistry = new Map<string, AudioEntry>();

const defaultSnapshot: PlaybackSnapshot = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

const getRegisteredAudio = (id: string, src: string) => {
  if (typeof window === "undefined") return null;

  const existing = audioRegistry.get(id);
  if (!existing) {
    return null;
  }

  if (existing.src !== src) {
    existing.audio.src = src;
    existing.src = src;
  }

  return existing.audio;
};

const createAudio = (id: string, src: string) => {
  const audio = new Audio(src);
  audio.preload = "none";
  audioRegistry.set(id, { audio, src });
  return audio;
};

export const usePersistentAudioPlayer = (briefing: AudioBriefing) => {
  const [snapshot, setSnapshot] = useState<PlaybackSnapshot>(defaultSnapshot);
  const canPlay = briefing.isReady && briefing.audioSrc.trim().length > 0;
  const [audio, setAudio] = useState<HTMLAudioElement | null>(() => getRegisteredAudio(briefing.id, briefing.audioSrc));

  useEffect(() => {
    setAudio(getRegisteredAudio(briefing.id, briefing.audioSrc));
  }, [briefing.id, briefing.audioSrc]);

  useEffect(() => {
    if (!audio) return;

    let frameId: number | null = null;

    const commitSnapshot = () => {
      setSnapshot({
        isPlaying: !audio.paused && !audio.ended,
        currentTime: audio.currentTime || 0,
        duration: Number.isFinite(audio.duration) ? audio.duration : 0,
      });
    };

    const scheduleSnapshot = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        commitSnapshot();
      });
    };

    const onPlay = () => {
      audioRegistry.forEach((entry) => {
        if (entry.audio !== audio && !entry.audio.paused) {
          entry.audio.pause();
        }
      });
      commitSnapshot();
    };

    const onPause = commitSnapshot;
    const onEnded = commitSnapshot;
    const onLoadedMetadata = commitSnapshot;
    const onTimeUpdate = scheduleSnapshot;

    commitSnapshot();
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [audio]);

  const ensureAudio = useCallback(() => {
    if (!canPlay) return null;

    const existing = getRegisteredAudio(briefing.id, briefing.audioSrc);
    if (existing) {
      if (existing !== audio) {
        setAudio(existing);
      }
      return existing;
    }

    const created = createAudio(briefing.id, briefing.audioSrc);
    setAudio(created);
    return created;
  }, [audio, briefing.id, briefing.audioSrc, canPlay]);

  const toggle = () => {
    const targetAudio = ensureAudio();
    if (!targetAudio) return;

    if (targetAudio.paused) {
      void targetAudio.play();
    } else {
      targetAudio.pause();
    }
  };

  const seek = (value: number) => {
    const targetAudio = ensureAudio();
    if (!targetAudio) return;

    targetAudio.currentTime = value;
    setSnapshot((current) => ({ ...current, currentTime: value }));
  };

  const prime = () => {
    const targetAudio = ensureAudio();
    if (!targetAudio) return;

    // Prepare metadata (and first bytes) ahead of play on hover/focus.
    if (!targetAudio.paused || targetAudio.currentTime > 0 || targetAudio.readyState > 0) {
      return;
    }
    if (targetAudio.preload === "none") {
      targetAudio.preload = "metadata";
    }
    targetAudio.load();
  };

  return {
    canPlay,
    isPlaying: snapshot.isPlaying,
    currentTime: snapshot.currentTime,
    duration: snapshot.duration,
    maxTime: snapshot.duration > 0 ? snapshot.duration : 1,
    toggle,
    seek,
    prime,
  };
};
