import { useState } from "react";
import { ArrowRight, Linkedin } from "lucide-react";
import DiagnosticFlow from "./DiagnosticFlow";

const EngagementSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 bg-[hsl(160,45%,12%)] relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160,45%,16%)] via-transparent to-[hsl(160,45%,10%)] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <p className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase mb-4 inline-block">
                Let's Talk
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
                Ready to Start?
              </h2>
              <div className="w-16 h-px bg-[hsl(38,82%,50%)] mx-auto mb-6" />
              <p className="text-lg text-white/70 text-center mx-auto">
                Clear analysis. Actionable recommendations. Decisions you can defend.
              </p>
            </div>

            {/* Contact CTA card */}
            <div className="p-10 lg:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <p className="text-xl text-white font-display font-semibold mb-2 text-center">
                Tell me about your situation
              </p>
              <p className="text-sm text-white/60 mb-8 text-center">
                Share your situation. I'll be in touch.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 bg-[hsl(38,82%,50%)] text-[hsl(160,45%,10%)] font-semibold tracking-wide uppercase text-sm px-10 py-5 rounded-full transition-all duration-300 hover:bg-[hsl(38,82%,55%)] hover:scale-[1.02] hover:shadow-xl"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-white/40 mt-6 text-center">
                Or email directly: <a href="mailto:moses.k.nyanzi@gmail.com" className="text-white/70 hover:text-[hsl(38,82%,50%)] transition-colors">moses.k.nyanzi@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-white/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand column */}
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  Moses Nyanzi
                </p>
                <p className="text-sm text-[hsl(38,82%,50%)] mt-1">
                  Strategy. Logic. Results.
                </p>
                <p className="text-xs text-white/50 mt-4 max-w-xs">
                  Independent consulting for senior leaders who need clarity, speed, and results.
                </p>
                <a
                  href="https://www.linkedin.com/in/moses-nyanzi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[hsl(38,82%,50%)] transition-colors mt-4"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>

              {/* Credentials column */}
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 mb-4">
                  Credentials
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Actuary</li>
                  <li>Executive MBA</li>
                  <li>$100M+ Portfolios Managed</li>
                </ul>
              </div>

              {/* Quick links column */}
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 mb-4">
                  Quick Links
                </p>
                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <a href="#about" className="hover:text-[hsl(38,82%,50%)] transition-colors">Who You Work With</a>
                  <a href="#expertise" className="hover:text-[hsl(38,82%,50%)] transition-colors">Expertise</a>
                  <a href="#proof" className="hover:text-[hsl(38,82%,50%)] transition-colors">Track Record</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()} Moses Nyanzi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>

      {/* Diagnostic Flow */}
      <DiagnosticFlow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default EngagementSection;
