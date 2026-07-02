import automationTrapHero from "@/assets/insights/automation-trap-hero.webp";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.webp";
import phoneboothImage from "@/assets/insights/phonebooth.webp";
import aiMistakesChecklistHero from "@/assets/insights/10-ai-agent-implementation-mistakes-checklist.webp";
import aiPowerWorkflowHero from "@/assets/insights/2026-ai-power-workflow.webp";
import blackMirrorLessonsHero from "@/assets/insights/black-mirror-lessons-ai-leaders.webp";
import wrongQuestionHero from "@/assets/insights/wrong-question-ai-leader.webp";
import fashionTechDesk from "@/assets/insights/fashion-tech-desk.webp";

// Tech Stack logos
import chatgptLogo from "@/assets/insights/tech-stack/chatgpt-logo.png";
import claudeLogo from "@/assets/insights/tech-stack/claude-logo.webp";
import geminiLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import grokLogo from "@/assets/insights/tech-stack/grok-logo.png";
import kimiLogo from "@/assets/insights/tech-stack/kimi-logo.png";
import antigravityLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import claudeCodeLogo from "@/assets/insights/tech-stack/claude-logo.webp";
import codexLogo from "@/assets/insights/tech-stack/codex-logo.png";
import githubLogo from "@/assets/insights/tech-stack/github-logo.png";
import lovableLogo from "@/assets/insights/tech-stack/lovable-logo.png";
import replitLogo from "@/assets/insights/tech-stack/replit-logo.png";
import notebookLmLogo from "@/assets/insights/tech-stack/notebooklm-logo.svg";
import techStackHero from "@/assets/insights/tech-stack/tech-stack-hero.jpg";

export interface ArticleContent {
    title: string;
    category: string;
    description: string;
    image: string;
    content: React.ReactNode;
}

const implementationChecklistItems = [
    {
        order: "10",
        title: "Starting with tools, not business outcomes",
        problem: "Teams buy platforms first and define value later.",
        check: "Document two measurable outcomes with owners and target dates before any procurement decision.",
    },
    {
        order: "09",
        title: "Running pilots with no path to daily use",
        problem: "Pilots look good in demos and disappear in operations.",
        check: "Define launch conditions, who owns delivery, and how the team will run it after the pilot.",
    },
    {
        order: "08",
        title: "Ignoring data readiness",
        problem: "Incomplete, inaccessible, or inconsistent data breaks trust quickly.",
        check: "Confirm data quality thresholds, access controls, and where the data came from before sharing output with business users.",
    },
    {
        order: "07",
        title: "No human oversight design",
        problem: "Automation is deployed without clear review and escalation boundaries.",
        check: "Define exactly when humans review, approve, override, and escalate agent outputs.",
    },
    {
        order: "06",
        title: "Treating security and compliance as a late step",
        problem: "Controls are bolted on after workflows are already built.",
        check: "Complete privacy, policy, and audit-trail requirements before production design is signed off.",
    },
    {
        order: "05",
        title: "Measuring activity instead of impact",
        problem: "Teams track prompts and usage but not business improvement.",
        check: "Track cycle time, quality, risk reduction, and financial impact against a pre-launch baseline.",
    },
    {
        order: "04",
        title: "Poor fit with existing workflows",
        problem: "Agent output sits in a side tool and never reaches operational systems.",
        check: "Map how data moves from source systems to the people making decisions, end to end.",
    },
    {
        order: "03",
        title: "Weak change management and training",
        problem: "People are asked to adopt new behaviour with no practical support.",
        check: "Create role-specific training, practical guides, and adoption targets with line manager accountability.",
    },
    {
        order: "02",
        title: "No operating rhythm for improvement",
        problem: "After launch, teams stop reviewing failures and performance drift.",
        check: "Run a weekly improvement loop covering errors, exceptions, user feedback, and model changes.",
    },
    {
        order: "01",
        title: "Diffused ownership across departments",
        problem: "Everyone is involved but no one is accountable for outcomes.",
        check: "Assign one accountable leader for delivery outcomes, risk posture, and value delivery.",
    },
] as const;

const wrongQuestionReframes = [
    {
        order: "09",
        wrongQuestion: "Which AI tool should we buy first?",
        betterQuestion: "Where are we losing margin, speed, or trust first?",
        note: "Start with business pain, not product demos.",
    },
    {
        order: "08",
        wrongQuestion: "Can this model fix our department?",
        betterQuestion: "Which workflow are we redesigning end to end?",
        note: "A better model cannot rescue a broken operating model.",
    },
    {
        order: "07",
        wrongQuestion: "How fast can we deploy AI?",
        betterQuestion: "What must improve besides speed?",
        note: "Faster bad work is still bad work.",
    },
    {
        order: "06",
        wrongQuestion: "Can we run a quick pilot?",
        betterQuestion: "What goes live in operations after this pilot?",
        note: "If nothing changes on Monday morning, it was theatre.",
    },
    {
        order: "05",
        wrongQuestion: "Can IT, Data, and Ops co-own this?",
        betterQuestion: "Who is directly accountable for outcomes?",
        note: "Shared ownership often turns into no ownership.",
    },
    {
        order: "04",
        wrongQuestion: "Can we sort data quality later?",
        betterQuestion: "What minimum data standard is non-negotiable now?",
        note: "Polished dashboards cannot rescue weak inputs.",
    },
    {
        order: "03",
        wrongQuestion: "Will teams just adapt?",
        betterQuestion: "What friction disappears for frontline staff in week one?",
        note: "If people keep side spreadsheets, adoption has failed.",
    },
    {
        order: "02",
        wrongQuestion: "Can we track general improvement?",
        betterQuestion: "Which two KPIs move, by how much, by when?",
        note: "If success is vague, failure hides in plain sight.",
    },
    {
        order: "01",
        wrongQuestion: "Can we add AI on top of current work?",
        betterQuestion: "What are we stopping this quarter to create capacity?",
        note: "Transformation needs subtraction, not just addition.",
    },
] as const;

const blackMirrorLessons = [
    {
        order: "01",
        title: "Nosedive (Season 3, Episode 1)",
        premise: "Every interaction becomes a score.",
        lesson: "Any score or rating your AI uses can be biased; don’t let a single number quietly decide people’s future.",
    },
    {
        order: "02",
        title: "Common People (Season 7, Episode 1)",
        premise: "Life-changing tech is packaged like a subscription tier.",
        lesson: "How you price and package matters; if it feels exploitative, people will turn against you.",
    },
    {
        order: "03",
        title: "Joan Is Awful (Season 6, Episode 1)",
        premise: "Consent buried in terms and conditions becomes a weapon at scale.",
        lesson: "If people don’t truly understand what they’re agreeing to with their data or likeness, you’re burning long‑term trust.",
    },
    {
        order: "04",
        title: "The Entire History of You (Season 1, Episode 3)",
        premise: "Perfect recall sounds useful, then quickly becomes unbearable.",
        lesson: "Don’t record everything just because you can; choose what really needs to be stored and what should fade.",
    },
    {
        order: "05",
        title: "Hang the DJ (Season 4, Episode 4)",
        premise: "People outsource decisions because the system feels safer than their own judgement.",
        lesson: "Treat algorithms as advice, not orders; if you stop thinking for yourself, the system is really in charge.",
    },
    {
        order: "06",
        title: "USS Callister (Season 4, Episode 1)",
        premise: "One talented person with unchecked control creates a dangerous private system.",
        lesson: "No one person should have unchecked control over powerful tech or data; even your smartest talent needs boundaries.",
    },
    {
        order: "07",
        title: "Fifteen Million Merits (Season 1, Episode 2)",
        premise: "Attention becomes currency and people become inputs.",
        lesson: "If you pay your systems to chase attention, they’ll ignore what actually matters, like safety, trust, and wellbeing.",
    },
    {
        order: "08",
        title: "Be Right Back (Season 2, Episode 1)",
        premise: "A synthetic version of someone feels impressive, then deeply wrong.",
        lesson: "Don't rush to replace human interaction with AI (e.g. customer support). Automation can copy a script, but it can't replace the relationship.",
    },
    {
        order: "09",
        title: "Hated in the Nation (Season 3, Episode 6)",
        premise: "Digital outrage and autonomous systems combine into real-world harm.",
        lesson: "Once you connect automated systems to the real world, small online problems can turn into big real‑life damage very fast.",
    },
    {
        order: "10",
        title: "Smithereens (Season 5, Episode 2)",
        premise: "Product choices feel abstract in HQ and brutal in real life.",
        lesson: "The way you design notifications, feeds, and workflows changes how people behave; “just a feature” can become a safety issue.",
    },
] as const;

const largeNumberStyle = {
    background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--jacarta) / 0.3) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
} as const;

export const articles: Record<string, ArticleContent> = {
    "the-small-business-ai-toolkit": {
        title: "The Small Business AI & Automation Toolkit",
        category: "AI STRATEGY",
        description: "A job-first guide to AI and automation tools. Six categories of practical software a lean business can use to build, automate, and market right now.",
        image: fashionTechDesk,
        content: (
            <>
                <section className="mb-12 lg:mb-16">
                    <p className="text-foreground/85 text-lg lg:text-xl text-justify leading-relaxed mb-4">
                        Most small businesses do not need complex, custom AI models. They need practical, accessible software that solves real bottlenecks.
                    </p>
                    <p className="text-foreground/85 text-lg text-justify leading-relaxed">
                        Rather than chasing every new AI product on social media, the most effective approach is job-first: <strong>define the work that needs to be done, then select the right tool for the job.</strong>
                    </p>
                    <p className="text-foreground/70 text-sm lg:text-base text-justify leading-relaxed mt-4">
                        This guide outlines six key operational areas where lean teams can deploy AI and automation tools to save time, build custom tools, and automate repeatable processes without the tech jargon.
                    </p>
                </section>

                <div className="space-y-16">
                    {/* Category 1 */}
                    <section className="border-t border-border pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs font-semibold text-accent border border-accent/25 px-2 py-0.5 rounded-sm bg-accent/5">01</span>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] m-0">Build websites & apps</h2>
                        </div>
                        <p className="text-foreground/85 mb-6">
                            Create landing pages, dashboards, client portals, quote tools, and internal apps without hiring a full development team.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Lovable</h3>
                                <p className="text-sm text-foreground/70">An AI-powered full-stack app builder. You describe the application in plain English, and it writes, tests, and deploys it.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Claude Code</h3>
                                <p className="text-sm text-foreground/70">Anthropic's terminal-based coding assistant. Extremely powerful for making edits, refactoring, and fixing bugs across codebases.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Replit</h3>
                                <p className="text-sm text-foreground/70">A cloud-based IDE with an integrated AI agent. Great for building and hosting complete applications directly in the browser.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Codex</h3>
                                <p className="text-sm text-foreground/70">OpenAI's software engineering agent that can write, explain, and refactor code across multiple programming languages.</p>
                            </div>
                        </div>
                    </section>

                    {/* Category 2 */}
                    <section className="border-t border-border pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs font-semibold text-jacarta border border-jacarta/25 px-2 py-0.5 rounded-sm bg-jacarta/5">02</span>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] m-0">Automate repeatable work</h2>
                        </div>
                        <p className="text-foreground/85 mb-6">
                            Move leads, send follow-ups, compile reports, update spreadsheets, and route support tasks automatically.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">n8n</h3>
                                <p className="text-sm text-foreground/70">A fair-code workflow automation tool that lets you self-host your processes, keeping your data secure and reducing monthly costs.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Zapier</h3>
                                <p className="text-sm text-foreground/70">The easiest tool to connect thousands of apps together quickly. Excellent for simple, multi-step integrations.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Make</h3>
                                <p className="text-sm text-foreground/70">A visual builder for complex workflows. Offers high flexibility for routing, looping, and filtering data.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">GitHub Actions</h3>
                                <p className="text-sm text-foreground/70">Best for scheduling server-side scripts, backups, data syncing, and automating project deployments.</p>
                            </div>
                        </div>
                    </section>

                    {/* Category 3 */}
                    <section className="border-t border-border pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs font-semibold text-accent border border-accent/25 px-2 py-0.5 rounded-sm bg-accent/5">03</span>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] m-0">Create marketing assets</h2>
                        </div>
                        <p className="text-foreground/85 mb-6">
                            Draft offers, email campaigns, ad copy, lead magnets, sales scripts, and social posts at scale.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Custom GPTs</h3>
                                <p className="text-sm text-foreground/70">Tailor ChatGPT with your brand guidelines, customer personas, and copy templates for consistent output.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Canva</h3>
                                <p className="text-sm text-foreground/70">Uses smart layout and text-to-image tools to speed up asset creation for ads and social media.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Gamma</h3>
                                <p className="text-sm text-foreground/70">Generates presentation decks, brief documents, and landing pages from simple outlines in seconds.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">ChatGPT</h3>
                                <p className="text-sm text-foreground/70">The all-around conversational standard for brainstorming campaign ideas, drafts, and taglines.</p>
                            </div>
                        </div>
                    </section>

                    {/* Category 4 */}
                    <section className="border-t border-border pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs font-semibold text-jacarta border border-jacarta/25 px-2 py-0.5 rounded-sm bg-jacarta/5">04</span>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] m-0">Research & learn faster</h2>
                        </div>
                        <p className="text-foreground/85 mb-6">
                            Summarize transcriptions, audit competitor websites, study market trends, and turn documents into clean briefing notes.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">NotebookLM</h3>
                                <p className="text-sm text-foreground/70">Google's research tool that uses your source files (PDFs, docs, links) to draft answers and create Audio Overviews.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Perplexity</h3>
                                <p className="text-sm text-foreground/70">A conversational search engine that answers questions with clean, sourced citations directly from the live web.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Gemini</h3>
                                <p className="text-sm text-foreground/70">Google's multi-modal assistant. Excels at long context, parsing massive videos, and Workspace integration.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Deep Research</h3>
                                <p className="text-sm text-foreground/70">OpenAI and Gemini's search capabilities that execute multi-step queries to write in-depth market reports.</p>
                            </div>
                        </div>
                    </section>

                    {/* Category 5 */}
                    <section className="border-t border-border pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs font-semibold text-accent border border-accent/25 px-2 py-0.5 rounded-sm bg-accent/5">05</span>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] m-0">Improve customer touchpoints</h2>
                        </div>
                        <p className="text-foreground/85 mb-6">
                            Answer FAQs, triage incoming support tickets, and streamline customer onboarding without losing the human touch.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Chatwoot</h3>
                                <p className="text-sm text-foreground/70">An open-source customer communication platform. Great for managing multiple channels from a single dashboard.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Tidio</h3>
                                <p className="text-sm text-foreground/70">Combines live chat with simple AI bots to handle support queries and lead capture 24/7.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Intercom AI</h3>
                                <p className="text-sm text-foreground/70">Fin AI agent resolves customer support inquiries instantly based on your existing help articles.</p>
                            </div>
                        </div>
                    </section>

                    {/* Category 6 */}
                    <section className="border-t border-border pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-xs font-semibold text-jacarta border border-jacarta/25 px-2 py-0.5 rounded-sm bg-jacarta/5">06</span>
                            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#111111] m-0">Take control of your software</h2>
                        </div>
                        <p className="text-foreground/85 mb-6">
                            Run your own sales pipeline, customer analytics, and bookings without paying for multiple expensive SaaS subscriptions.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Twenty CRM</h3>
                                <p className="text-sm text-foreground/70">A modern, open-source CRM alternative to Salesforce. High flexibility and complete control over your customer data.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">PostHog</h3>
                                <p className="text-sm text-foreground/70">All-in-one product analytics platform that lets you track user paths, session replays, and conversion funnels.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <h3 className="text-base font-bold text-foreground mb-1">Cal.com</h3>
                                <p className="text-sm text-foreground/70">The open-source scheduling infrastructure. Clean calendar booking links that you can customise and self-host.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-border card-premium glass tint-accent">
                                <h3 className="text-base font-bold text-foreground mb-1">Flowise</h3>
                                <p className="text-sm text-foreground/70">A visual drag-and-drop tool for building custom LLM flows and agents, making it easy to create internal automation.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* PAWZA Callout Section */}
                <section className="mt-20 p-8 lg:p-12 rounded-3xl border border-border card-premium glass tint-jacarta shadow-card relative overflow-hidden">
                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                        See it in action: PAWZA
                    </h2>
                    <p className="text-foreground/85 mb-6 max-w-2xl">
                        Looking for a real-world example? Check out <strong>PAWZA</strong>, a live client product built using low-code tools. It provides a premium, highly interactive pet care guide for owners in South Africa.
                    </p>
                    <a
                        href="https://pawza.lovable.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] font-semibold text-background transition-all duration-300 hover:bg-foreground/80 hover:scale-[0.97]"
                    >
                        Visit PAWZA Live
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </section>

                {/* CTA Section */}
                
            </>
        ),
    },
    "10-ai-agent-implementation-mistakes-checklist": {
        title: "10 AI Agent Implementation Mistakes Leaders Make: A Practical Checklist",
        category: "AI STRATEGY",
        description: "A field-tested checklist to avoid the most expensive AI agent rollout mistakes across scope, data, risk, governance, and adoption.",
        image: aiMistakesChecklistHero,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        Most AI agent rollouts do not fail because the model is weak. They fail because implementation discipline is weak.
                    </p>
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        This checklist gives leaders a practical way to spot failure patterns early and correct them before cost, trust, and momentum are lost.
                    </p>
                    <p className="text-foreground/85 text-justify">
                        If your team is moving from pilot activity to scaled operations, use this as a working review guide in weekly delivery meetings.
                    </p>
                    <p className="text-foreground/70 text-sm lg:text-base text-justify leading-relaxed mt-4">
                        Pair this with{" "}
                        <a href="/insights/2026-ai-power-workflow" className="text-[hsl(var(--accent))] hover:underline">
                            3-Step 2026 AI Power Workflow
                        </a>{" "}
                        for workflow design and{" "}
                        <a href="/insights/the-automation-trap" className="text-[hsl(var(--jacarta))] hover:underline">
                            12 Signs You're About to Automate the Wrong Thing
                        </a>{" "}
                        for pre-investment risk checks.
                    </p>
                </section>

                <section className="mb-16 lg:mb-24">
                    <h2 className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>
                        Top 10 Implementation Mistakes and Checks
                    </h2>

                    <div className="space-y-20 lg:space-y-32">
                        {implementationChecklistItems.map((item, index) => (
                            <section key={item.order} className="group">
                                <div className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center gap-6 lg:gap-12`}>
                                    <div className={`flex-shrink-0 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                                        <span
                                            className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                            style={largeNumberStyle}
                                        >
                                            {item.order}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#111111]/80 text-xl leading-relaxed mb-4 font-medium">
                                            {item.problem}
                                        </p>
                                        <p className="text-foreground/85 leading-relaxed">
                                            <span className="font-semibold text-[hsl(var(--accent))]">Check: </span>
                                            {item.check}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </section>

                
            </>
        ),
    },
    "2026-ai-power-workflow": {
        title: "3-Step 2026 AI Power Workflow: From Rough Idea to Studio-Ready Content",
        category: "AI & TECHNOLOGY",
        description: "One workflow to rule them all. How to combine OpenAI's Prompt Optimiser, Deep Research (Perplexity/Gemini/ChatGPT), and NotebookLM into a single insight engine.",
        image: aiPowerWorkflowHero,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 text-lg lg:text-xl leading-relaxed mb-4 text-justify">
                        Most people use one AI tool for everything. They ask ChatGPT to write a report, get a generic average, and then spend hours editing it.
                    </p>
                    <p className="text-foreground text-xl lg:text-2xl font-display leading-tight mb-4 text-justify">
                        <strong>The real power of AI in 2026 is not in one model, but in the handoffs between tools.</strong>
                    </p>
                    <p className="text-foreground/85 text-lg leading-relaxed text-justify">
                        This is the workflow I use to go from a rough idea to high-quality content in under 30 minutes. It combines specialist tools, OpenAI, Perplexity, and NotebookLM, into one clear process.
                    </p>
                </section>

                <section className="mb-16 lg:mb-24">
                    <div className="group p-8 lg:p-10 rounded-3xl border border-border card-premium glass tint-accent relative overflow-hidden shadow-[0_20px_40px_-30px_rgba(0,0,0,0.5)] ring-1 ring-white/10 hover:-translate-y-0.5 hover:border-[hsl(var(--jacarta)/0.35)] hover:shadow-[0_28px_58px_-20px_rgba(212,175,55,0.28)] transition-all duration-500">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: "linear-gradient(135deg, hsl(var(--accent)), transparent)" }} />
                        <div className="absolute -inset-x-20 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(var(--jacarta)) 0%, transparent 70%)" }} />

                        <h3 className="font-display text-xl lg:text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))] text-[hsl(var(--navy))] flex items-center justify-center font-bold text-sm">⚡</span>
                            The Logic Chain
                        </h3>

                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm font-medium">
                            <div className="group/logic-card relative overflow-hidden flex-1 p-4 rounded-xl bg-background border border-border text-center w-full transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--jacarta)/0.45)] hover:shadow-[0_12px_30px_-20px_rgba(212,175,55,0.55)]">
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/logic-card:opacity-100 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--accent)/0.08), transparent 55%)" }} />
                                <div className="relative z-10 text-[hsl(var(--jacarta))] mb-1 text-xs uppercase tracking-wider">Step 1</div>
                                <div className="relative z-10 font-semibold text-base">Optimise</div>
                                <div className="relative z-10 text-muted-foreground text-xs mt-1">OpenAI Prompt Optimiser</div>
                            </div>

                            <div className="hidden md:block text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5">→</div>

                            <div className="group/logic-card relative overflow-hidden flex-1 p-4 rounded-xl bg-background border border-border text-center w-full transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.45)] hover:shadow-[0_12px_30px_-20px_rgba(45,106,79,0.45)]">
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/logic-card:opacity-100 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--jacarta)/0.08), transparent 55%)" }} />
                                <div className="relative z-10 text-[hsl(var(--accent))] mb-1 text-xs uppercase tracking-wider">Step 2</div>
                                <div className="relative z-10 font-semibold text-base">Research</div>
                                <div className="relative z-10 text-muted-foreground text-xs mt-1">Perplexity / Deep Research</div>
                            </div>

                            <div className="hidden md:block text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5">→</div>

                            <div className="group/logic-card relative overflow-hidden flex-1 p-4 rounded-xl bg-background border border-border text-center w-full transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--jacarta)/0.45)] hover:shadow-[0_12px_30px_-20px_rgba(196,106,79,0.45)]">
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/logic-card:opacity-100 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--accent)/0.09), transparent 55%)" }} />
                                <div className="relative z-10 text-[hsl(var(--jacarta))] mb-1 text-xs uppercase tracking-wider">Step 3</div>
                                <div className="relative z-10 font-semibold text-base">Synthesize</div>
                                <div className="relative z-10 text-muted-foreground text-xs mt-1">NotebookLM</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-12 lg:space-y-16">
                    {/* Step 1 */}
                    <div className="group">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white bg-[hsl(var(--accent))]">1</span>
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold mt-0.5">The Setup: OpenAI Prompt Optimiser</h2>
                        </div>
                        <div className="pl-12">
                            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-4">
                                Most prompts fail because they are vague. "Write me a strategy for X" gets you a Wikipedia summary.
                            </p>
                            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-6">
                                Instead of guessing, use <strong><a href="https://platform.openai.com/chat/edit?models=gpt-5&optimize=true" className="text-[hsl(var(--jacarta))] hover:underline" target="_blank" rel="noopener noreferrer">OpenAI's Prompt Optimiser</a></strong>. It uses goal-based prompt customisation and A/B testing to rewrite your instruction before you start.
                            </p>
                            <div className="p-5 lg:p-6 rounded-2xl border border-border card-premium glass tint-jacarta">
                                <p className="font-mono text-sm text-foreground/70 mb-2">// Input</p>
                                <p className="text-foreground italic mb-4">"I need to know about AI agents in finance."</p>
                                <div className="h-px bg-border/50 mb-4" />
                                <p className="font-mono text-sm text-[hsl(var(--accent))] mb-2">// Optimised Output</p>
                                <p className="text-foreground/90 font-medium leading-relaxed">"Act as a Senior Fintech Analyst. Create a comparative analysis of autonomous AI agent adoption in Tier 1 investment banks versus fintech challengers. Focus on three specific workflows: fraud detection, trade reconciliation, and personalised wealth management. Citations required."</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white bg-[hsl(var(--jacarta))]">2</span>
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold mt-0.5">The Hunt: Deep Research</h2>
                        </div>
                        <div className="pl-12">
                            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-4">
                                Do not ask a standard chatbot for facts. It can invent details. Use a tool built for <strong>deep research</strong>.
                            </p>
                            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-6">
                                Take your optimised prompt from Step 1 and run it through one of the leading deep research tools. This step is about depth, citations, and evidence, not creative writing.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { name: "Perplexity Pro", url: "https://www.perplexity.ai/", color: "bg-blue-400", desc: "Best for verified, academic-grade citations and quick fact-checking." },
                                    { name: "Gemini Deep Research", url: "https://gemini.google.com/", color: "bg-jacarta", desc: "Best for complex reasoning and integration with your Google Drive docs." },
                                    { name: "ChatGPT Deep Research", url: "https://chatgpt.com/", color: "bg-purple-400", desc: "Best for creative synthesis and broad-trend identification." },
                                    { name: "Kimi (Moonshot AI)", url: "https://www.kimi.com/", color: "bg-gray-400", desc: "Best for massive context windows (reading 100+ PDFs at once)." }
                                ].map((tool) => (
                                    <div key={tool.name} className="group/card relative overflow-hidden p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:-translate-y-1.5 hover:border-[hsl(var(--accent)/0.35)] hover:shadow-[0_16px_36px_-20px_rgba(212,175,55,0.45)] transition-all duration-300">
                                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none" style={{ background: "linear-gradient(170deg, hsl(var(--jacarta)/0.08), transparent 60%)" }} />
                                        <h4 className="relative z-10 font-semibold mb-2 flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full ${tool.color} group-hover/card:scale-125 transition-transform`}></span>
                                            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--accent))] transition-colors">
                                                {tool.name}
                                            </a>
                                        </h4>
                                        <p className="text-sm text-foreground/70 leading-relaxed relative z-10">{tool.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white bg-[hsl(var(--jacarta))]">3</span>
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold mt-0.5">The Synthesis: NotebookLM</h2>
                        </div>
                        <div className="pl-12">
                            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-4">
                                You now have a dense, factual report. But reading 50 pages of research is friction. <strong><a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent))] hover:underline">NotebookLM</a> turns research into conversation.</strong>
                            </p>
                            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-6">
                                Upload your Deep Research report (PDF/Doc) directly into NotebookLM.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-[hsl(var(--jacarta))] mt-1">●</span>
                                    <span><strong>Audio Overview:</strong> Generate a "Deep Dive" podcast. Two AI hosts discuss your exact research. Listen to it on your commute to absorb the strategy.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[hsl(var(--accent))] mt-1">●</span>
                                    <span><strong>Study Guide:</strong> Ask it to create a briefing note or FAQ based <em>only</em> on the sources you uploaded, without making things up.</span>
                                </li>
                            </ul>

                            <div className="mt-12 p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-[hsl(var(--jacarta)/0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative overflow-hidden group/tip">
                                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.05)] to-transparent pointer-events-none" />
                                <div className="relative z-10">
                                    <strong className="text-[hsl(var(--jacarta))] font-display uppercase tracking-wider text-xs block mb-2">Pro Tip</strong>
                                    <p className="text-foreground/90 leading-relaxed italic">
                                        As of Feb 2026, NotebookLM includes built-in deep research tools. If you prefer staying in one place, you can skip Step 2 and let NotebookLM find sources for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
            </>
        ),
    },
    "wrong-question-ai-leader": {
        title: "9 Reasons \"What Can AI Do for Me?\" Is the Wrong Question for Leaders",
        category: "AI STRATEGY",
        description: "A practical guide with 9 better questions that turn AI talk into clear ownership and measurable outcomes.",
        image: wrongQuestionHero,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        Most leadership teams start AI planning with the wrong brief: <strong>&quot;What can this tool do for us?&quot;</strong>
                    </p>
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        Better results come when you start with business constraints, accountability, and measurable outcomes, then pick tools second.
                    </p>
                    <p className="text-foreground/85 text-justify">
                        If your roof is leaking, a ladder, hammer, and sealant are tools. The real problem is still the leak. AI is exactly the same.
                    </p>
                </section>

                <section className="mb-16 lg:mb-24">
                    <div className="space-y-20 lg:space-y-32">
                        {wrongQuestionReframes.map((item, index) => (
                            <section key={item.order} className="group">
                                <div className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center gap-6 lg:gap-12`}>
                                    <div className={`flex-shrink-0 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                                        <span
                                            className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                            style={largeNumberStyle}
                                        >
                                            {item.order}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                            Wrong question: &quot;{item.wrongQuestion}&quot;
                                        </h3>
                                        <p className="text-foreground/85 text-lg leading-relaxed mb-4">
                                            <span className="font-semibold text-[hsl(var(--accent))]">Better question: </span>
                                            {item.betterQuestion}
                                        </p>
                                        <p className="text-foreground/70 text-lg leading-relaxed">
                                            {item.note}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </section>

                
            </>
        ),
    },
    "black-mirror-lessons-ai-leaders": {
        title: "10 Black Mirror AI Lessons Every Business Leader Should Know",
        category: "AI & SOCIETY",
        description: "A practical watchlist linking 10 Black Mirror episodes to real AI governance, risk, and strategy decisions.",
        image: blackMirrorLessonsHero,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        <strong>Black Mirror</strong> is useful for leaders because it shows how technical choices become commercial, legal, and trust failures.
                    </p>
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        Treat each episode as a practical check on incentives, governance, and accountability before your own AI rollout scales.
                    </p>
                    <p className="text-foreground/85 text-justify">
                        This is a practical watchlist for business leaders who want clearer AI strategy decisions, not just interesting dystopian stories.
                    </p>
                    <p className="text-foreground/70 text-sm lg:text-base text-justify leading-relaxed mt-4">
                        Pair this with{" "}
                        <a href="/insights/wrong-question-ai-leader" className="text-[hsl(var(--jacarta))] hover:underline">
                            9 Reasons &quot;What Can AI Do for Me?&quot; Is the Wrong Question for Leaders
                        </a>{" "}
                        and{" "}
                        <a href="/insights/why-ai-projects-fail" className="text-[hsl(var(--accent))] hover:underline">
                            Why Your AI Project Is Failing
                        </a>{" "}
                        to move from warning signs to action.
                    </p>
                </section>

                <section className="mb-16 lg:mb-24">
                    <h2 className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>
                        10 Black Mirror AI Lessons for Business Leaders
                    </h2>

                    <div className="space-y-20 lg:space-y-32">
                        {blackMirrorLessons.map((item, index) => (
                            <section key={item.order} className="group">
                                <div className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center gap-6 lg:gap-12`}>
                                    <div className={`flex-shrink-0 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                                        <span
                                            className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                            style={largeNumberStyle}
                                        >
                                            {item.order}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#111111]/80 text-xl leading-relaxed mb-4 font-medium">
                                            {item.premise}
                                        </p>
                                        <p className="text-foreground/85 leading-relaxed">
                                            <span className="font-semibold text-[hsl(var(--jacarta))]">Lesson: </span>
                                            {item.lesson}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </section>

                <section className="mt-24 mb-16 lg:mb-24">
                    <div className="relative p-8 lg:p-12 rounded-3xl border border-[hsl(var(--accent)/0.3)] card-premium glass tint-accent backdrop-blur-md overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--jacarta)/0.05)] to-transparent pointer-events-none" />

                        <div className="relative z-10 text-center mb-8">
                            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-tight">
                                Governance is a key part of the strategy
                            </h2>
                            <p className="text-foreground/85 max-w-2xl mx-auto text-lg leading-relaxed">
                                In almost every Black Mirror episode, the technology worked perfectly. The failure was not code; it was a lack of clear governance. True AI leadership means defining the boundaries <em>before</em> you scale.
                                <br /><br />
                                <strong className="text-[hsl(var(--accent))]">If your governance cannot stop a feature that generates short-term profit but destroys long-term trust, you do not have a strategy. You have a roadmap to a crisis.</strong>
                            </p>
                        </div>


                    </div>
                </section>

                
            </>
        ),
    },
    "the-automation-trap": {
        title: "12 Signs You're About to Automate the Wrong Thing: The Automation Trap",
        category: "AUTOMATION & PROCESS",
        description: "Automation promises speed, but speed in the wrong direction is expensive failure.",
        image: automationTrapHero,
        content: (
            <>
                <section className="mb-10 lg:mb-14">
                    <p className="text-foreground/85 mb-4 text-lg text-justify">
                        Every automation project promises <strong>faster, cheaper, better</strong>. Every failed one ends the same way: the old spreadsheet stays open, workarounds multiply, and someone asks why this cost so much.
                    </p>
                    <p className="text-foreground/85 text-justify">
                        The technology rarely fails. You automated the wrong thing.
                    </p>
                </section>

                <section className="mb-10 lg:mb-14">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>
                        Part A: Before You Start
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>1</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">A Third of Your Work Needs "Special Handling"</h3>
                                    <p className="text-sm text-foreground/70">That is not an exception. That is a second process you are ignoring.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--accent)/0.3)] hover:card-premium glass tint-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>2</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Staff Say "It Depends" When Asked How It Works</h3>
                                    <p className="text-sm text-foreground/70">If nobody can explain the process, nobody knows the process.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>3</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Everyone Has Their Own Spreadsheet</h3>
                                    <p className="text-sm text-foreground/70">The real work happens in Excel, not the system.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--accent)/0.3)] hover:card-premium glass tint-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>4</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Every Team Does It Differently</h3>
                                    <p className="text-sm text-foreground/70">Three departments, three methods. Automate one and you break the other two.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>5</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Nobody Knows Why That Step Exists</h3>
                                    <p className="text-sm text-foreground/70">"Why?" "Always been that way." You are automating guesswork.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-10 lg:mb-14">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>
                        Part B: During Implementation
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--accent)/0.3)] hover:card-premium glass tint-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>6</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">You Launched but People Still Use the Old Way</h3>
                                    <p className="text-sm text-foreground/70">Now you are paying for both systems. Neither works properly.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>7</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Tricky Cases Take Longer Now</h3>
                                    <p className="text-sm text-foreground/70">Simple stuff is faster. Everything else? Two systems to check instead of one.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--accent)/0.3)] hover:card-premium glass tint-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>8</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">The Numbers Do Not Add Up</h3>
                                    <p className="text-sm text-foreground/70">Dashboard says 247. Team did 312. Where is the rest?</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>9</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">The Savings Keep Shrinking</h3>
                                    <p className="text-sm text-foreground/70">First 40%. Then 25%. Now "long-term value." That is called failure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-10 lg:mb-14">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>
                        Part C: The Value Trap
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--accent)/0.3)] hover:card-premium glass tint-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>10</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">"Compliance" Is the Only Reason</h3>
                                    <p className="text-sm text-foreground/70">If the point is evidence, speed is not the goal. Accuracy is.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--accent) / 0.15)", color: "hsl(var(--jacarta))" }}>11</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Changes Now Take Months</h3>
                                    <p className="text-sm text-foreground/70">Before: "Just update it." Now: "Submit a change request." Flexibility gone.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--accent)/0.3)] hover:card-premium glass tint-accent transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>12</span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground mb-2">Nobody Asked If You Should Stop Doing It</h3>
                                    <p className="text-sm text-foreground/70">"How do we speed this up?" But nobody asked: "Should we still be doing this?"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
            </>
        ),
    },
    "why-ai-projects-fail": {
        title: "8 Warning Signs Your AI Project Is Failing",
        category: "AI STRATEGY",
        description: "AI projects do not crash. They fade quietly while everyone stays busy.",
        image: aiWarningSignsHero,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 text-lg lg:text-xl text-justify leading-relaxed">
                        AI projects do not crash. They fade quietly. Updates keep flowing, meetings continue, dashboards impress. <strong>Yet the business feels no different.</strong>
                    </p>
                </section>

                <div className="space-y-20 lg:space-y-32">
                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    01
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    Remove "AI" From the Pitch. Does It Still Make Sense?
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    If it doesn't have clear outcomes, like lowering costs or improving a process, you're buying hype.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    02
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    Getting Anything Changed Takes Forever
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    If every change needs five approvals, the AI is just decoration.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    03
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    Nobody Knows Who Is Responsible
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    IT, Ops, and Data are all "involved". Nobody owns it. That is where projects die.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    04
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    The People Using It Do Not Trust It
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    They nod in meetings, then ignore it. No trust, no adoption, no value.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    05
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    Lots of Reports, Nothing Changes
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Has anyone made a different decision because of it? If not, it is noise.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    06
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    It Created More Work, Not Less
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Good AI removes steps. Bad AI adds things to check.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    07
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    Nobody Can Define Success
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    "More insights" is not a target. If you cannot name success, you are hoping.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group">
                        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                            <div className="flex-shrink-0 lg:text-right">
                                <span
                                    className="block font-display text-8xl lg:text-[10rem] font-bold leading-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.3) 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text"
                                    }}
                                >
                                    08
                                </span>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] mb-4">
                                    "Fixing the Data" Is the Permanent Excuse
                                </h2>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Six months on data quality? That is not a data problem. It is avoidance.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                
            </>
        ),
    },
    "5-signs-always-done-this-way": {
        title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
        category: "ORGANISATIONAL CHANGE",
        description: "Processes outlive their purpose. 5 signals that history is running your operations.",
        image: phoneboothImage,
        content: (
            <>
                <section className="mb-16 lg:mb-24">
                    <p className="text-foreground/85 text-lg lg:text-xl text-justify leading-relaxed">
                        Every organisation has processes that outlive their purpose. The problem is not having legacy. <strong>The problem is when "we have always done it this way" becomes the only justification.</strong>
                    </p>
                </section>

                <div className="relative">
                    <div
                        className="absolute left-6 lg:left-8 top-0 bottom-0 w-px hidden lg:block"
                        style={{ background: "linear-gradient(180deg, hsl(var(--jacarta) / 0.5) 0%, hsl(var(--accent) / 0.1) 100%)" }}
                    />

                    <div className="space-y-8 lg:space-y-12">
                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        1
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        "Ask Sarah" (Sarah Left Two Years Ago)
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        The person who created the process is gone. The process lives on.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        2
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        New Starters Learn "How We Really Do It"
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        Training shows the official process. In week two, someone shows them the real way.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        3
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        Questioning It Makes People Defensive
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        If asking "why" feels like an attack, the process has become untouchable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        4
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        "Too Risky" (But Nobody Can Explain the Risk)
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        What risk? How likely? If nobody can answer, you are avoiding change, not risk.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <div className="flex items-start gap-6 lg:gap-10">
                                <div className="relative z-10 flex-shrink-0">
                                    <div
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-display font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{
                                            background: "linear-gradient(135deg, hsl(var(--jacarta)) 0%, hsl(var(--accent) / 0.7) 100%)",
                                            color: "hsl(var(--navy))"
                                        }}
                                    >
                                        5
                                    </div>
                                </div>

                                <div
                                    className="flex-1 p-6 lg:p-8 rounded-2xl border transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
                                    style={{
                                        background: "hsl(var(--card) / 0.5)",
                                        borderColor: "hsl(var(--border) / 0.5)",
                                        backdropFilter: "blur(8px)"
                                    }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                                        "Improvement" Always Means More Steps
                                    </h2>
                                    <p className="text-foreground/70 text-lg leading-relaxed">
                                        When did anyone last remove a step? If never, it is not improving. It is growing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </>
        ),
    },
    "12-ai-tools-in-my-tech-stack": {
        title: "12 AI Tools for Productivity in My 2026 Tech Stack",
        category: "AI & TECHNOLOGY",
        description: "My practical list of 12 AI tools for productivity in 2026, covering chatbots, coding agents, and developer platforms I use in real workflows.",
        image: techStackHero,
        content: (
            <>
                <section className="mb-12 lg:mb-16">
                    <p className="text-foreground/85 text-lg lg:text-xl text-justify leading-relaxed mb-4">
                        The AI landscape moves fast. Every week brings a new launch, a new model, and a new claim. <strong>But which AI tools actually improve day-to-day productivity?</strong>
                    </p>
                    <p className="text-foreground/85 text-lg text-justify leading-relaxed">
                        After months of testing, keeping what works, and replacing what does not, these are the 12 AI tools in my current stack for research, coding, and shipping.
                    </p>
                    <p className="text-foreground/70 text-sm lg:text-base text-justify leading-relaxed mt-4">
                        If you are planning adoption across teams, pair this list with{" "}
                        <a href="/insights/why-ai-projects-fail" className="text-[hsl(var(--jacarta))] hover:underline">
                            Why Your AI Project Is Failing
                        </a>{" "}
                        and{" "}
                        <a href="/insights/the-automation-trap" className="text-[hsl(var(--accent))] hover:underline">
                            The Automation Trap
                        </a>{" "}
                        for implementation risks and rollout decisions.
                    </p>
                </section>

                {/* AI Chatbots Section */}
                <section className="mb-12 lg:mb-16">
                    <h2 className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>
                        Best AI Chatbots for Productivity
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {/* ChatGPT */}
                        <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={chatgptLogo} alt="ChatGPT" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">ChatGPT</h3>
                                </div>
                                <p className="text-sm text-foreground/70">OpenAI's conversational AI assistant for answering questions, generating content, and writing code. Works with text, images, and voice.</p>
                            </div>
                        </a>

                        {/* Claude */}
                        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-accent transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={claudeLogo} alt="Claude" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--jacarta))] transition-colors">Claude</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Anthropic's AI assistant known for safety-first design, large document handling, and the ability to create interactive outputs.</p>
                            </div>
                        </a>

                        {/* Gemini */}
                        <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={geminiLogo} alt="Gemini" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">Gemini</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Google's AI that works across text, images, audio, and video. Connects directly to Google Workspace apps.</p>
                            </div>
                        </a>

                        {/* Grok */}
                        <a href="https://grok.com" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-accent transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={grokLogo} alt="Grok" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--jacarta))] transition-colors">Grok</h3>
                                </div>
                                <p className="text-sm text-foreground/70">xAI's chatbot with live access to 𝕏 (formerly Twitter). Creates images, generates video, and handles text conversations.</p>
                            </div>
                        </a>

                        {/* Kimi */}
                        <a href="https://kimi.moonshot.cn" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={kimiLogo} alt="Kimi" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">Kimi</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Moonshot AI's assistant that can process documents over 200,000 words. Excels at complex analysis and multi-step reasoning.</p>
                            </div>
                        </a>
                    </div>
                </section>

                {/* AI Coding + Research Tools Section */}
                <section className="mb-12 lg:mb-16">
                    <h2 className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>
                        AI Coding & Research Tools for Builders
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        {/* Antigravity */}
                        <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-accent transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={antigravityLogo} alt="Antigravity" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--jacarta))] transition-colors">Antigravity</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Google's code editor built on VS Code. Hands off complex tasks to AI agents that show their working step by step.</p>
                            </div>
                        </a>

                        {/* Claude Code */}
                        <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={claudeCodeLogo} alt="Claude Code" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">Claude Code</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Anthropic's command-line tool for delegating coding tasks. Analyses your codebase and fixes bugs automatically.</p>
                            </div>
                        </a>

                        {/* Codex */}
                        <a href="https://openai.com/codex" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-accent transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={codexLogo} alt="Codex" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--jacarta))] transition-colors">Codex</h3>
                                </div>
                                <p className="text-sm text-foreground/70">OpenAI's AI software engineering agent that writes, explains, debugs, and refactors code across multiple languages.</p>
                            </div>
                        </a>

                        {/* NotebookLM */}
                        <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1.5">
                                        <img src={notebookLmLogo} alt="NotebookLM" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">NotebookLM</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Google's research workspace that grounds responses in your sources, can ingest web pages, YouTube videos, and PDFs, and uses Audio Overviews to turn them into a podcast-style briefing.</p>
                            </div>
                        </a>
                    </div>
                </section>

                {/* Developer Platforms Section */}
                <section className="mb-12 lg:mb-16">
                    <h2 className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: "hsl(var(--jacarta) / 0.15)", color: "hsl(var(--accent))" }}>
                        AI Developer Platforms for Shipping Faster
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                        {/* GitHub */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-accent transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={githubLogo} alt="GitHub" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--jacarta))] transition-colors">GitHub</h3>
                                </div>
                                <p className="text-sm text-foreground/70">The world's leading platform for code storage, team collaboration, and automated testing. Includes Copilot AI coding assistant.</p>
                            </div>
                        </a>

                        {/* Lovable */}
                        <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-jacarta transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={lovableLogo} alt="Lovable" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">Lovable</h3>
                                </div>
                                <p className="text-sm text-foreground/70">AI-powered platform for generating full-stack web apps from natural language. Features one-click deployment.</p>
                            </div>
                        </a>

                        {/* Replit */}
                        <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-5 lg:p-6 rounded-xl border border-border bg-card/30 hover:border-[hsl(var(--jacarta)/0.3)] hover:card-premium glass tint-accent transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                        <img src={replitLogo} alt="Replit" className="w-full h-full object-contain" />
                                    </div>
                                    <h3 className="font-display font-semibold text-foreground group-hover:text-[hsl(var(--jacarta))] transition-colors">Replit</h3>
                                </div>
                                <p className="text-sm text-foreground/70">Browser-based code editor with built-in AI assistant. Replit Agent builds complete apps from a simple description.</p>
                            </div>
                        </a>
                    </div>
                </section>

                {/* CTA Section */}
                
            </>
        ),
    },

};

