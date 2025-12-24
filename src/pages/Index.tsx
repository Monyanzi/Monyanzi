import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Moses Nyanzi | Actuarial Strategist & Capital Risk Expert</title>
        <meta
          name="description"
          content="Moses Nyanzi - Actuarial Strategist, Capital & Risk Expert, and INSEAD Executive MBA 2026. 8+ years of experience managing $100M+ portfolios in Johannesburg, South Africa."
        />
        <meta name="keywords" content="Moses Nyanzi, Actuarial, Risk Management, Capital, INSEAD, MBA, Finance, Johannesburg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        
        {/* Placeholder sections for smooth scroll targets */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">About section coming soon...</p>
        </section>
        <section id="career" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Career section coming soon...</p>
        </section>
        <section id="achievements" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Achievements section coming soon...</p>
        </section>
        <section id="education" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Education section coming soon...</p>
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Skills section coming soon...</p>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Contact section coming soon...</p>
        </section>
      </div>
    </>
  );
};

export default Index;
