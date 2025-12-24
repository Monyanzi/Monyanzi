import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Moses Nyanzi | Actuarial Strategist & Capital Risk Advisor</title>
        <meta
          name="description"
          content="Moses Nyanzi provides independent actuarial consulting, capital strategy, and risk advisory services for institutional clients. 8+ years experience managing $100M+ portfolios across Africa."
        />
        <meta name="keywords" content="Moses Nyanzi, Actuarial Consultant, Risk Advisory, Capital Strategy, Portfolio Optimization, Africa, INSEAD MBA" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        
        {/* Placeholder sections for smooth scroll targets */}
        <section id="about" className="min-h-[50vh] py-24 flex items-center justify-center border-b border-border">
          <p className="text-muted-foreground text-sm tracking-wide">About section</p>
        </section>
        <section id="expertise" className="min-h-[50vh] py-24 flex items-center justify-center border-b border-border">
          <p className="text-muted-foreground text-sm tracking-wide">Expertise section</p>
        </section>
        <section id="track-record" className="min-h-[50vh] py-24 flex items-center justify-center border-b border-border">
          <p className="text-muted-foreground text-sm tracking-wide">Track Record section</p>
        </section>
        <section id="credentials" className="min-h-[50vh] py-24 flex items-center justify-center border-b border-border">
          <p className="text-muted-foreground text-sm tracking-wide">Credentials section</p>
        </section>
        <section id="contact" className="min-h-[50vh] py-24 flex items-center justify-center">
          <p className="text-muted-foreground text-sm tracking-wide">Contact section</p>
        </section>
      </div>
    </>
  );
};

export default Index;
