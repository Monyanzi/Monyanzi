import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TechnicalExpertiseSection from "@/components/TechnicalExpertiseSection";
import ProofSection from "@/components/ProofSection";
import EngagementSection from "@/components/EngagementSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Moses Nyanzi | Strategy. Logic. Results.</title>
        <meta
          name="description"
          content="Independent consulting for senior leaders. I help organisations grow faster through AI, automation, and smarter strategy, with the rigour to make it stick."
        />
        <meta name="keywords" content="Moses Nyanzi, Capital Strategy, Actuarial Consultant, Risk Advisory, Portfolio Optimisation, Independent Consultant, M&A Valuation" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <ValuePropositionSection />
        <AboutSection />
        <ExpertiseSection />
        <TechnicalExpertiseSection />
        <ProofSection />
        <EngagementSection />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
