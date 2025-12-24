const ProfilePhoto = () => {
  return (
    <div className="relative animate-slide-in-right">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-110" />
      
      {/* Decorative rings */}
      <div className="absolute -inset-4 rounded-full border border-accent/20 animate-pulse-glow" />
      <div className="absolute -inset-8 rounded-full border border-accent/10" />
      
      {/* Main photo container */}
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border bg-secondary">
        {/* Placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
        
        {/* Silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-3/4 h-3/4 text-slate-400/30"
            fill="currentColor"
          >
            <circle cx="50" cy="35" r="20" />
            <ellipse cx="50" cy="85" rx="30" ry="25" />
          </svg>
        </div>

        {/* Initials overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl lg:text-7xl font-bold text-foreground/20">
            MN
          </span>
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex items-center gap-2 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-medium text-foreground">Open to Opportunities</span>
      </div>
    </div>
  );
};

export default ProfilePhoto;
