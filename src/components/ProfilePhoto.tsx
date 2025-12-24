import heroProfile from "../assets/hero-profile.jpg";

const ProfilePhoto = () => {
  return (
    <div className="relative h-full w-full animate-fade-in" style={{ animationDelay: '300ms' }}>
      <img
        src={heroProfile}
        alt="Moses Nyanzi"
        className="w-full h-full object-cover rounded-2xl transition-all duration-700"
      />
      {/* Subtle border to match theme */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  );
};

export default ProfilePhoto;
