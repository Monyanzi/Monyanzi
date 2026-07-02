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
  const rootWidthClass = compact ? "max-w-[20rem]" : "max-w-[30rem]";
  const cardClass = compact
    ? "rounded-[16px] px-3 py-2"
    : "rounded-[20px] px-4 py-3";
  const controlGapClass = compact ? "gap-3" : "gap-4";
  const buttonClass = compact ? "w-8 h-8" : "w-10 h-10";
  const sliderShellClass = compact
    ? "h-8 min-w-[7rem] rounded-xl px-2"
    : "h-10 min-w-[9rem] rounded-xl px-3";
  const labelClass = compact
    ? "text-[11px] tracking-[0.08em]"
    : "text-[12px] tracking-[0.1em]";
  const timeClass = compact ? "text-[11px]" : "text-[12px]";
  const label = compact ? "Briefing" : briefing.shortLabel;

  return (
    <div id={briefing.id} className={`w-full ${rootWidthClass} ${className}`.trim()}>
      <div className={`group relative border border-[hsl(var(--foreground)/0.06)] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${cardClass}`}>
        <div className={`relative flex items-center ${controlGapClass}`}>
          <button
            type="button"
            onClick={handleToggle}
            onMouseEnter={handlePrime}
            onFocus={handlePrime}
            onTouchStart={handlePrime}
            disabled={!canPlay}
            aria-label={`${isPlaying ? "Pause" : "Play"} ${briefing.shortLabel}`}
            className={`${buttonClass} rounded-full inline-flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shrink-0 ${
              canPlay
                ? "text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }`}
            style={canPlay ? { background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.8))" } : undefined}
          >
            {isPlaying ? (
              <Pause className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} />
            ) : (
              <Play className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} ml-0.5`} />
            )}
          </button>

          <span className={`${labelClass} font-bold uppercase text-slate-700 whitespace-nowrap`}>
            {label}
          </span>

          <div className={`${sliderShellClass} flex-1 bg-slate-50 border border-slate-100 inline-flex items-center`}>
            <input
              type="range"
              min={0}
              max={maxTime}
              step={0.01}
              value={Math.min(currentTime, maxTime)}
              disabled={!canPlay}
              onChange={(e) => handleSeek(Number(e.target.value))}
              aria-label={`Seek ${briefing.shortLabel}`}
              className={`w-full h-1.5 appearance-none rounded-full bg-slate-200 ${
                canPlay ? "accent-[hsl(var(--accent))] cursor-pointer" : "accent-slate-300 cursor-not-allowed"
              }`}
            />
          </div>

          <span className={`${timeClass} font-mono font-medium text-slate-500 whitespace-nowrap tabular-nums`}>
            {canPlay ? timeLabel : `${briefing.duration} soon`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioBriefingCard;
