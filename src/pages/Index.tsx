import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CareerSection from "@/components/CareerSection";
import EngagementSection from "@/components/EngagementSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Moses Nyanzi | Actuarial Strategist & Capital Risk Advisor</title>
        <meta
          name="description"
          content="Moses Nyanzi provides independent actuarial consulting, capital strategy, and risk advisory services for institutional clients. 8+ years experience managing $100M+ portfolios globally."
        />
        <meta name="keywords" content="Moses Nyanzi, Actuarial Consultant, Risk Advisory, Capital Strategy, Portfolio Optimization, INSEAD MBA" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ValuePropositionSection />
        <ExpertiseSection />
        <CareerSection />
        <EngagementSection />
      </div>
    </>
  );
};

export default Index;
