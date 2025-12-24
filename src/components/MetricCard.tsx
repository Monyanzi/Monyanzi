import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

const MetricCard = ({ value, label, icon, delay = 0 }: MetricCardProps) => {
  return (
    <div
      className={cn(
        "group relative gradient-card rounded-xl p-6 border border-border/50",
        "hover:border-accent/50 hover:shadow-glow transition-all duration-500",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <div className="font-display text-2xl lg:text-3xl font-bold text-foreground tracking-wide">
            {value}
          </div>
          <div className="text-sm text-muted-foreground mt-1 font-medium">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
