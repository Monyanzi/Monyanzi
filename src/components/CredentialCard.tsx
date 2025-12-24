import { cn } from "@/lib/utils";

interface CredentialCardProps {
  metric: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

const CredentialCard = ({ metric, label, sublabel, delay = 0 }: CredentialCardProps) => {
  return (
    <div
      className={cn(
        "executive-card p-8 lg:p-10 text-center animate-fade-in-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-display text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
        {metric}
      </div>
      <div className="mt-3 text-sm font-medium text-foreground tracking-wide uppercase">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-xs text-muted-foreground">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export default CredentialCard;
