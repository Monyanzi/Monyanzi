import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { AudioBriefing } from "@/data/audioBriefings";
import { usePersistentAudioPlayer } from "@/components/audio/usePersistentAudioPlayer";

interface AudioBriefingCardProps {
  briefing: AudioBriefing;
  compact?: boolean;
  className?: string;
}

const formatAudioTime = (value: number) => {
  if (!Number.isFinite(value) || value < 0) return "00:00";
  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const parseDurationStringToSeconds = (durationStr: string) => {
  const parts = durationStr.split(":").map(Number);
  if (parts.length === 2 && Number.isFinite(parts[0]) && Number.isFinite(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return 286;
};

const AcousticWaveIndicator = ({ isPlaying }: { isPlaying: boolean }) => (
  <span
    aria-hidden="true"
    className="inline-flex items-end gap-[2px] h-3 px-0.5"
  >
    <span
      className={`w-[2px] rounded-full bg-accent transition-all duration-300 ${
        isPlaying ? "h-3 animate-pulse" : "h-1.5 opacity-60"
      }`}
    />
    <span
      className={`w-[2px] rounded-full bg-accent transition-all duration-300 ${
        isPlaying ? "h-2 animate-pulse [animation-delay:150ms]" : "h-2.5 opacity-80"
      }`}
    />
    <span
      className={`w-[2px] rounded-full bg-accent transition-all duration-300 ${
        isPlaying ? "h-3 animate-pulse [animation-delay:300ms]" : "h-1 opacity-60"
      }`}
    />
  </span>
);

const AudioBriefingCard = ({ briefing, compact = false, className = "" }: AudioBriefingCardProps) => {
  const {
    canPlay,
    isPlaying,
    currentTime,
    duration,
    toggle: handleToggle,
    seek: handleSeek,
    prime: handlePrime,
  } = usePersistentAudioPlayer(briefing);

  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const fallbackSeconds = parseDurationStringToSeconds(briefing.duration);
  const effectiveMaxTime = duration > 0 ? duration : fallbackSeconds;
  const clampedValue = Math.min(Math.max(0, currentTime), effectiveMaxTime);
  const progressPercent = effectiveMaxTime > 0 ? (clampedValue / effectiveMaxTime) * 100 : 0;

  const timeLabel = duration > 0 || currentTime > 0
    ? `${formatAudioTime(currentTime)} / ${duration > 0 ? formatAudioTime(duration) : briefing.duration}`
    : briefing.duration;

  const label = compact ? "Audio Overview" : briefing.shortLabel;

  const seekFromClientX = (clientX: number) => {
    if (!canPlay || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    handleSeek(ratio * effectiveMaxTime);
  };

  return (
    <div id={briefing.id} className={`w-full ${className}`.trim()}>
      <div
        onMouseEnter={handlePrime}
        className="glass-card flex flex-wrap items-center gap-3.5 sm:gap-4 rounded-2xl px-4 py-3 transition-shadow duration-200 hover:shadow-craft-hover"
      >
        <button
          type="button"
          onClick={handleToggle}
          onFocus={handlePrime}
          onTouchStart={handlePrime}
          disabled={!canPlay}
          aria-label={`${isPlaying ? "Pause" : "Play"} ${briefing.shortLabel}`}
          className={`h-9 w-9 rounded-xl inline-flex items-center justify-center transition-all duration-150 shrink-0 cursor-pointer ${
            canPlay
              ? "bg-foreground text-background shadow-keycap hover:bg-accent active:scale-[0.96]"
              : "bg-surface-2 text-foreground-subtle cursor-not-allowed"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 ml-0.5" />
          )}
        </button>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
            <AcousticWaveIndicator isPlaying={isPlaying} />
            <span>Audio</span>
          </span>
          <span className="text-xs font-semibold text-foreground whitespace-nowrap">
            {label}
          </span>
        </div>

        {/* Tactile Precision Scrubber */}
        <div
          ref={trackRef}
          onPointerDown={(e) => {
            if (!canPlay) return;
            setIsDragging(true);
            seekFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!isDragging || !canPlay) return;
            seekFromClientX(e.clientX);
          }}
          onPointerUp={() => setIsDragging(false)}
          onPointerCancel={() => setIsDragging(false)}
          className="group relative flex-1 min-w-[8rem] h-6 flex items-center cursor-pointer select-none"
        >
          {/* Visual Track */}
          <div className="relative h-1.5 w-full rounded-full bg-surface-2 border border-border/60 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent transition-[width] duration-75"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>

          {/* Visual Thumb */}
          <div
            aria-hidden="true"
            style={{ left: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            className={`pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full border border-white/80 bg-foreground shadow-xs transition-transform duration-150 group-hover:scale-125 ${
              isDragging ? "scale-125 bg-accent" : ""
            }`}
          />

          {/* Accessible Keyboard Range Input */}
          <input
            type="range"
            min={0}
            max={effectiveMaxTime}
            step={1}
            value={clampedValue}
            disabled={!canPlay}
            onChange={(e) => handleSeek(Number(e.target.value))}
            aria-label={`Seek ${briefing.shortLabel}`}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
        </div>

        <span className="font-mono text-[11px] text-foreground-subtle whitespace-nowrap tabular-nums">
          {canPlay ? timeLabel : `${briefing.duration}`}
        </span>
      </div>
    </div>
  );
};

export default AudioBriefingCard;
