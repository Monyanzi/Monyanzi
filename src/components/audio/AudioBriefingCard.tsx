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

const AudioBriefingCard = ({ briefing, compact = false, className = "" }: AudioBriefingCardProps) => {
  const {
    canPlay,
    isPlaying,
    currentTime,
    duration,
    maxTime,
    toggle: handleToggle,
    seek: handleSeek,
    prime: handlePrime,
  } = usePersistentAudioPlayer(briefing);

  const timeLabel = duration > 0
    ? `${formatAudioTime(currentTime)} / ${formatAudioTime(duration)}`
    : briefing.duration;

  const label = compact ? "Audio Overview" : briefing.shortLabel;

  return (
    <div id={briefing.id} className={`w-full ${className}`.trim()}>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 rounded border border-border bg-background px-3.5 py-2.5">
        <button
          type="button"
          onClick={handleToggle}
          onMouseEnter={handlePrime}
          onFocus={handlePrime}
          onTouchStart={handlePrime}
          disabled={!canPlay}
          aria-label={`${isPlaying ? "Pause" : "Play"} ${briefing.shortLabel}`}
          className={`h-8 w-8 rounded inline-flex items-center justify-center transition-colors shrink-0 ${
            canPlay
              ? "bg-foreground text-background hover:bg-accent"
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
          <span className="font-mono text-[10px] font-semibold text-accent">
            Audio
          </span>
          <span className="text-xs font-semibold text-foreground whitespace-nowrap">
            {label}
          </span>
        </div>

        <div className="flex-1 min-w-[8rem] inline-flex items-center">
          <input
            type="range"
            min={0}
            max={maxTime}
            step={0.01}
            value={Math.min(currentTime, maxTime)}
            disabled={!canPlay}
            onChange={(e) => handleSeek(Number(e.target.value))}
            aria-label={`Seek ${briefing.shortLabel}`}
            className={`w-full h-1 appearance-none rounded-none bg-border ${
              canPlay ? "accent-[hsl(var(--accent))] cursor-pointer" : "cursor-not-allowed"
            }`}
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
