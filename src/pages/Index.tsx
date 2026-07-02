import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import CollaborateSection from "@/components/CollaborateSection";
import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/config/site";

const HOME_URL = `${SITE_URL}/`;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-ZA",
  description:
    "A practical resource hub for small business owners who want to use AI and automation to build better businesses.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com/in/moses-nyanzi/"],
  knowsAbout: [
    "AI tools for entrepreneurs",
    "AI coding agents",
    "Small business automation",
    "Digital product development",
    "Marketing workflows",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: HOME_URL },
  ],
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Tools & Builds for Small Businesses | AI Founder Garage</title>
        <meta
          name="description"
          content="Simple tools, builds, and advice for running a better business."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={SITE_NAME} />
        <meta name="keywords" content="AI tools for entrepreneurs, Codex, Claude Code, Lovable, n8n, NotebookLM, AI automation, small business AI, PAWZA" />
        <link rel="canonical" href={HOME_URL} />
        <link rel="alternate" hrefLang="en-za" href={HOME_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={HOME_URL} />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:title" content="AI Tools & Builds for Small Businesses" />
        <meta property="og:description" content="Simple tools, builds, and advice for running a better business." />
        <meta property="og:image" content={SOCIAL_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI Founder Garage resource hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={HOME_URL} />
        <meta name="twitter:title" content="AI Tools & Builds for Small Businesses" />
        <meta name="twitter:description" content="Simple tools, builds, and advice for running a better business." />
        <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />
        <meta name="twitter:image:alt" content="AI Founder Garage resource hub" />

        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main className="min-h-screen">
        <LiquidEffectAnimation text={[]} textColor="#111111" />
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <FeaturedInsightsSection />
          <SelectedWorkSection />
          <CollaborateSection />
        </div>
      </main>
    </>
  );
};

export default Index;
