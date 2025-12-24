const ProfilePhoto = () => {
  return (
    <div className="relative animate-slide-in-right">
      {/* Main photo container - clean, minimal frame */}
      <div className="relative w-72 h-72 lg:w-96 lg:h-96 bg-slate-100 border border-border overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200" />
        
        {/* Professional silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-2/3 h-2/3 text-slate-300"
            fill="currentColor"
          >
            <circle cx="50" cy="32" r="18" />
            <ellipse cx="50" cy="80" rx="28" ry="22" />
          </svg>
        </div>

        {/* Initials overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl lg:text-8xl font-semibold text-foreground/10">
            MN
          </span>
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-border bg-background" />
    </div>
  );
};

export default ProfilePhoto;
