import automationTrapHero from "@/assets/insights/automation-trap-hero.jpg";
import aiWarningSignsHero from "@/assets/insights/ai-warning-signs-hero.jpg";
import phoneboothImage from "@/assets/insights/phonebooth.jpg";
import aiMistakesChecklistHero from "@/assets/insights/10-ai-agent-implementation-mistakes-checklist.jpg";
import aiPowerWorkflowHero from "@/assets/insights/2026-ai-power-workflow.jpg";
import blackMirrorLessonsHero from "@/assets/insights/black-mirror-lessons-ai-leaders.jpg";
import wrongQuestionHero from "@/assets/insights/wrong-question-ai-leader.jpg";
import smallBusinessToolkitHero from "@/assets/insights/small-business-ai-toolkit.jpg";

// Tech Stack logos
import chatgptLogo from "@/assets/insights/tech-stack/chatgpt-logo.png";
import claudeLogo from "@/assets/insights/tech-stack/claude-spark.svg";
import geminiLogo from "@/assets/insights/tech-stack/gemini-logo.webp";
import grokLogo from "@/assets/insights/tech-stack/grok-logo.svg";
import kimiLogo from "@/assets/insights/tech-stack/kimi-logo.png";
import antigravityLogo from "@/assets/insights/tech-stack/antigravity-logo.png";
import claudeCodeLogo from "@/assets/insights/tech-stack/claude-code-logo.svg";
import codexLogo from "@/assets/insights/tech-stack/codex-icon.svg";
import githubLogo from "@/assets/insights/tech-stack/github-logo.png";
import lovableLogo from "@/assets/insights/tech-stack/lovable-icon.svg";
import replitLogo from "@/assets/insights/tech-stack/replit-logo.png";
import geminiNotebookLogo from "@/assets/insights/tech-stack/gemini-notebook-logo.svg";
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
    lesson: "Any score or rating your AI uses can be biased; do not let a single number quietly decide people's future.",
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
    lesson: "If people do not truly understand what they are agreeing to with their data or likeness, you are burning long-term trust.",
  },
  {
    order: "04",
    title: "The Entire History of You (Season 1, Episode 3)",
    premise: "Perfect recall sounds useful, then quickly becomes unbearable.",
    lesson: "Do not record everything just because you can; choose what really needs to be stored and what should fade.",
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
    lesson: "If you pay your systems to chase attention, they will ignore what actually matters, like safety, trust, and wellbeing.",
  },
  {
    order: "08",
    title: "Be Right Back (Season 2, Episode 1)",
    premise: "A synthetic version of someone feels impressive, then deeply wrong.",
    lesson: "Do not rush to replace human interaction with AI (e.g. customer support). Automation can copy a script, but it cannot replace the relationship.",
  },
  {
    order: "09",
    title: "Hated in the Nation (Season 3, Episode 6)",
    premise: "Digital outrage and autonomous systems combine into real-world harm.",
    lesson: "Once you connect automated systems to the real world, small online problems can turn into big real-life damage very fast.",
  },
  {
    order: "10",
    title: "Smithereens (Season 5, Episode 2)",
    premise: "Product choices feel abstract in HQ and brutal in real life.",
    lesson: "The way you design notifications, feeds, and workflows changes how people behave; 'just a feature' can become a safety issue.",
  },
] as const;

const warningSignsItems = [
  {
    order: "01",
    title: "Remove 'AI' From the Pitch. Does It Still Make Sense?",
    detail: "If it does not have clear outcomes, like lowering unit costs or shortening cycle time, you are buying hype.",
  },
  {
    order: "02",
    title: "Getting Anything Changed Takes Forever",
    detail: "If every prompt or workflow adjustment needs five governance approvals, the AI is decoration.",
  },
  {
    order: "03",
    title: "Nobody Knows Who Is Responsible",
    detail: "IT, Ops, and Data are all 'involved'. Nobody owns the P&L outcome. That is where projects die.",
  },
  {
    order: "04",
    title: "The People Using It Do Not Trust It",
    detail: "They nod in steering meetings, then revert to side spreadsheets. No trust, no adoption, no value.",
  },
  {
    order: "05",
    title: "Lots of Reports, Nothing Changes",
    detail: "Has anyone made a different operational decision because of the model output? If not, it is noise.",
  },
  {
    order: "06",
    title: "It Created More Work, Not Less",
    detail: "Good automation removes steps. Bad AI adds a verification tax to every task.",
  },
  {
    order: "07",
    title: "Nobody Can Define Success",
    detail: "'More insights' is not a metric. If you cannot name the baseline and target, you are hoping.",
  },
  {
    order: "08",
    title: "The Pilot Never Ends",
    detail: "Twelve months of 'testing and learning' with zero production cutover means the project has stalled.",
  },
] as const;

const legacyOrgSigns = [
  {
    order: "01",
    title: "'Ask Sarah' (Sarah Left Two Years Ago)",
    detail: "The person who designed the process is gone, along with the context. The ritual lives on.",
  },
  {
    order: "02",
    title: "New Starters Learn 'How We Really Do It'",
    detail: "Onboarding covers the official SOP. In week two, a colleague shows them the actual workaround.",
  },
  {
    order: "03",
    title: "Questioning a Step Makes People Defensive",
    detail: "When asking 'why do we do this?' feels like a personal attack, the process has become an institution.",
  },
  {
    order: "04",
    title: "'Too Risky' (With Zero Quantified Risk)",
    detail: "What specific risk? How probable? If nobody can name the failure mode, you are avoiding change, not risk.",
  },
  {
    order: "05",
    title: "'Improvement' Always Means Adding Steps",
    detail: "When did the team last delete a step or report? If never, the system is calcifying.",
  },
] as const;

const toolkitCategories = [
  {
    order: "01",
    title: "Build websites & apps",
    summary: "Create landing pages, internal dashboards, client portals, and quote calculators without hiring a full development squad.",
    tools: [
      { name: "Lovable", desc: "Full-stack AI application builder. Describe the data model and UI in plain English to generate, test, and deploy." },
      { name: "Claude Code", desc: "Anthropic's terminal-based engineering agent for multi-file refactoring, architecture edits, and debugging." },
      { name: "Replit", desc: "Cloud IDE with an integrated deployment agent for building and hosting complete web applications in the browser." },
      { name: "Codex", desc: "OpenAI's autonomous software engineering agent for writing, testing, and reviewing production pull requests." },
    ],
  },
  {
    order: "02",
    title: "Automate repeatable work",
    summary: "Route leads, trigger follow-ups, compile operational reports, and synchronize databases without manual copy-paste.",
    tools: [
      { name: "n8n", desc: "Fair-code workflow automation that you can self-host—keeping sensitive customer data in-house at predictable cost." },
      { name: "Zapier", desc: "Fastest connector across thousands of SaaS tools for straightforward, event-driven automations." },
      { name: "Make", desc: "Visual scenario builder offering granular control over data routing, webhooks, array iteration, and error handling." },
      { name: "GitHub Actions", desc: "Scheduled cron jobs, automated data pipelines, repository checks, and zero-downtime deployment scripts." },
    ],
  },
  {
    order: "03",
    title: "Create marketing assets",
    summary: "Draft offers, campaign sequences, product briefs, and visual assets with consistent brand guardrails.",
    tools: [
      { name: "Custom GPTs / Projects", desc: "Conditioned workspaces pre-loaded with your brand voice, customer objections, and structural templates." },
      { name: "Canva", desc: "Rapid layout and format adaptation for social assets, pitch decks, and ad variations." },
      { name: "Gamma", desc: "Turns structured markdown outlines into clean presentation decks and client-ready brief documents." },
      { name: "ChatGPT", desc: "General-purpose drafting, offer positioning, and rapid headline stress-testing." },
    ],
  },
  {
    order: "04",
    title: "Research & learn faster",
    summary: "Synthesize primary documents, audit competitor positioning, and turn dense transcripts into decision briefs.",
    tools: [
      { name: "NotebookLM", desc: "Google's source-grounded research workspace that synthesizes uploaded PDFs, docs, and links with zero outside hallucination." },
      { name: "Perplexity", desc: "Real-time answer engine that grounds every claim in live, clickable web citations." },
      { name: "Gemini", desc: "High-context multimodal model ideal for parsing long video recordings, large codebases, and Google Workspace files." },
      { name: "Deep Research", desc: "Autonomous multi-step web research agents (OpenAI & Gemini) that compile cited market and technical dossiers." },
    ],
  },
  {
    order: "05",
    title: "Improve customer touchpoints",
    summary: "Triage incoming support requests, answer documentation FAQs, and speed up client onboarding.",
    tools: [
      { name: "Chatwoot", desc: "Open-source omnichannel customer inbox that consolidates email, WhatsApp, and live chat into one queue." },
      { name: "Tidio", desc: "Lightweight live chat paired with rule-based and AI support flows for small e-commerce and service teams." },
      { name: "Intercom Fin", desc: "Production support agent that resolves frontline tickets strictly from your verified help-center documentation." },
    ],
  },
  {
    order: "06",
    title: "Take control of your software",
    summary: "Run your own CRM, product analytics, and scheduling infrastructure without per-seat SaaS bloat.",
    tools: [
      { name: "Twenty CRM", desc: "Modern open-source CRM alternative to Salesforce with full schema ownership and clean API extensibility." },
      { name: "PostHog", desc: "Unified product analytics, session replay, feature flags, and conversion funnels built for engineers." },
      { name: "Cal.com", desc: "Open-source scheduling infrastructure for custom booking flows, team routing, and automated reminders." },
      { name: "Flowise", desc: "Visual orchestration tool for prototyping internal RAG pipelines and structured LLM agents." },
    ],
  },
] as const;

export const articles: Record<string, ArticleContent> = {
  "the-small-business-ai-toolkit": {
    title: "The Small Business AI & Automation Toolkit",
    category: "Build",
    description: "A job-first guide to AI and automation tools. Six categories of practical software a lean business can use to build, automate, and market right now.",
    image: smallBusinessToolkitHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Most small businesses do not need complex, custom AI models. They need practical, accessible software that removes real operational bottlenecks.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-4">
            Rather than chasing every model release on social media, the most reliable approach is job-first: <strong className="text-foreground font-semibold">define the exact work that needs to be done, then select the narrowest tool that solves it.</strong>
          </p>
          <p className="text-foreground-muted leading-relaxed">
            Below are six operational areas where lean teams can deploy AI and automation today to build software, cut manual admin, and control their stack.
          </p>
        </section>

        <div className="space-y-14">
          {toolkitCategories.map((cat) => (
            <section key={cat.order} className="border-t border-border pt-8">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs font-semibold text-accent tabular-nums">
                  {cat.order}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground m-0">
                  {cat.title}
                </h2>
              </div>
              <p className="text-foreground-muted text-sm sm:text-base mb-6 max-w-2xl">
                {cat.summary}
              </p>

              <div className="grid sm:grid-cols-2 border-t border-l border-border">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="border-r border-b border-border bg-surface p-5">
                    <h3 className="font-sans text-sm font-semibold text-foreground mb-1.5">
                      {tool.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-foreground-muted m-0">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* PAWZA Case Study Callout */}
        <section className="mt-16 rounded-lg border border-border bg-surface p-6 sm:p-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
            Production Example
          </p>
          <h2 className="font-display text-2xl font-medium text-foreground mt-0 mb-3">
            See it in action: PAWZA
          </h2>
          <p className="text-sm text-foreground-muted mb-5 max-w-2xl">
            Want to see what a lean stack ships? Take a look at <strong className="text-foreground font-semibold">PAWZA</strong>, a live South African pet care and emergency veterinary directory built with AI coding tools and modern web architecture.
          </p>
          <a
            href="https://pawza.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent"
          >
            <span>Visit PAWZA</span>
            <span>&rarr;</span>
          </a>
        </section>
      </>
    ),
  },
  "10-ai-agent-implementation-mistakes-checklist": {
    title: "10 AI Agent Implementation Mistakes Leaders Make: A Practical Checklist",
    category: "Code",
    description: "A field-tested checklist to avoid the most expensive AI agent rollout mistakes across scope, data, risk, governance, and adoption.",
    image: aiMistakesChecklistHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Most AI agent rollouts do not fail because the underlying model is weak. They fail because implementation discipline is weak.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-4">
            This diagnostic checklist gives delivery leads a structured way to spot failure patterns early—before engineering budget, operational trust, and executive momentum are spent.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Pair this checklist with{" "}
            <a href="/insights/2026-ai-power-workflow" className="text-accent underline underline-offset-4">
              3-Step 2026 AI Power Workflow
            </a>{" "}
            and{" "}
            <a href="/insights/the-automation-trap" className="text-accent underline underline-offset-4">
              12 Signs You&apos;re About to Automate the Wrong Thing
            </a>{" "}
            during pre-investment reviews.
          </p>
        </section>

        <section>
          <div className="mb-6 border-b border-border pb-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground-subtle m-0">
              Diagnostic Ledger &mdash; 10 Rollout Failure Modes (Countdown 10 to 01)
            </h2>
          </div>

          <div className="divide-y divide-border border-b border-border">
            {implementationChecklistItems.map((item) => (
              <div key={item.order} className="py-7 grid gap-4 sm:grid-cols-[56px_1fr]">
                <div className="font-mono text-sm font-semibold text-accent tabular-nums pt-1">
                  #{item.order}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground mt-0 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted mb-3">
                    {item.problem}
                  </p>
                  <div className="border-l-2 border-accent/60 bg-surface-2/50 pl-3.5 py-2 pr-3 text-xs sm:text-sm text-foreground">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent block mb-0.5">
                      Verification Gate
                    </span>
                    {item.check}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    ),
  },
  "2026-ai-power-workflow": {
    title: "3-Step 2026 AI Power Workflow: From Rough Idea to Studio-Ready Content",
    category: "Research",
    description: "One workflow to rule them all. How to combine OpenAI's Prompt Optimiser, Deep Research (Perplexity/Gemini/ChatGPT), and NotebookLM into a single insight engine.",
    image: aiPowerWorkflowHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Most people use a single chatbot for everything. They ask a generic prompt, receive a statistical average, and spend two hours rewriting it.
          </p>
          <p className="font-display text-2xl text-foreground leading-snug mb-4">
            The real leverage in 2026 is not inside a single model—it is in the handoffs between specialist tools.
          </p>
          <p className="text-foreground-muted leading-relaxed">
            This is the three-stage pipeline I use to go from a rough thesis to a cited, executive-ready briefing in under 30 minutes.
          </p>
        </section>

        {/* Architectural Pipeline Diagram */}
        <section className="mb-14 rounded-lg border border-border bg-surface p-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-subtle mb-4">
            System Architecture &mdash; 3-Stage Synthesis Pipeline
          </p>
          <div className="grid gap-4 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="pt-3 md:pt-0 md:pr-4">
              <span className="font-mono text-[11px] font-semibold text-accent">STAGE 01</span>
              <h3 className="font-display text-lg font-medium text-foreground mt-1">Specify &amp; Optimise</h3>
              <p className="text-xs text-foreground-muted mt-1">OpenAI Prompt Optimiser sharpens role, constraints, and output schema.</p>
            </div>
            <div className="pt-3 md:pt-0 md:px-4">
              <span className="font-mono text-[11px] font-semibold text-accent">STAGE 02</span>
              <h3 className="font-display text-lg font-medium text-foreground mt-1">Deep Web Retrieval</h3>
              <p className="text-xs text-foreground-muted mt-1">Perplexity / Gemini Deep Research gathers primary sources and verified citations.</p>
            </div>
            <div className="pt-3 md:pt-0 md:pl-4">
              <span className="font-mono text-[11px] font-semibold text-accent">STAGE 03</span>
              <h3 className="font-display text-lg font-medium text-foreground mt-1">Grounded Synthesis</h3>
              <p className="text-xs text-foreground-muted mt-1">NotebookLM converts cited dossiers into structured briefs and audio overviews.</p>
            </div>
          </div>
        </section>

        <div className="space-y-12">
          {/* Step 1 */}
          <section className="border-t border-border pt-8">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-accent">STEP 01</span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground m-0">
                The Setup: OpenAI Prompt Optimiser
              </h2>
            </div>
            <p className="text-foreground-muted mb-4">
              Most research runs fail before they start because the prompt is underspecified. Asking &ldquo;Write a strategy for X&rdquo; guarantees a shallow summary.
            </p>
            <p className="text-foreground-muted mb-6">
              Instead of guessing, run your rough intent through{" "}
              <a
                href="https://platform.openai.com/chat/edit?models=gpt-5&optimize=true"
                className="text-accent underline underline-offset-4 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI&apos;s Prompt Optimiser
              </a>
              {" "}to inject role constraints, evaluation criteria, and citation rules.
            </p>

            <div className="rounded-lg border border-border bg-surface divide-y divide-border font-mono text-xs">
              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider text-foreground-subtle block mb-1">
                  Raw Input
                </span>
                <p className="font-sans text-sm text-foreground-muted italic m-0">
                  &ldquo;I need to know about AI agents in finance.&rdquo;
                </p>
              </div>
              <div className="p-4 bg-surface-2/40">
                <span className="text-[10px] uppercase tracking-wider text-accent font-semibold block mb-1">
                  Optimised Specification
                </span>
                <p className="font-sans text-sm text-foreground m-0 leading-relaxed">
                  &ldquo;Act as a Senior Fintech Analyst. Create a comparative analysis of autonomous AI agent adoption in Tier 1 investment banks versus fintech challengers. Focus on three specific workflows: fraud detection, trade reconciliation, and personalised wealth management. Primary citations required.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="border-t border-border pt-8">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-accent">STEP 02</span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground m-0">
                The Hunt: Deep Research Agents
              </h2>
            </div>
            <p className="text-foreground-muted mb-6">
              Never use a standard conversational chat window for factual discovery. Take your optimised specification from Step 01 and execute it inside a dedicated deep-research agent designed for multi-hop retrieval and citation verification:
            </p>

            <div className="grid sm:grid-cols-2 border-t border-l border-border">
              {[
                { name: "Perplexity Pro", url: "https://www.perplexity.ai/", desc: "Best for rapid, academic-grade web citations and live source verification." },
                { name: "Gemini Deep Research", url: "https://gemini.google.com/", desc: "Best for multi-hop synthesis and cross-referencing Google Workspace documents." },
                { name: "ChatGPT Deep Research", url: "https://chatgpt.com/", desc: "Best for long-horizon competitive teardowns and structured comparative tables." },
                { name: "Kimi (Moonshot AI)", url: "https://www.kimi.com/", desc: "Best for ingesting massive document batches (50+ PDFs or filings) in a single pass." },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-r border-b border-border bg-surface p-5 transition-colors hover:bg-surface-2/50"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-accent transition-colors m-0">
                      {tool.name}
                    </h3>
                    <span className="font-mono text-xs text-foreground-subtle group-hover:text-accent">&nearr;</span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground-muted m-0">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Step 3 */}
          <section className="border-t border-border pt-8">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-accent">STEP 03</span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground m-0">
                The Synthesis: NotebookLM
              </h2>
            </div>
            <p className="text-foreground-muted mb-4">
              You now have a dense, 30-page research report. Upload that dossier directly into{" "}
              <a
                href="https://notebook.google/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 font-medium"
              >
                NotebookLM
              </a>
              {" "}to interrogate the findings with zero outside hallucination:
            </p>

            <ul className="space-y-3 mb-6 text-sm text-foreground-muted border-l-2 border-border pl-4">
              <li>
                <strong className="text-foreground font-semibold">Audio Overview:</strong> Generate a two-host executive audio briefing to absorb the core trade-offs on your commute.
              </li>
              <li>
                <strong className="text-foreground font-semibold">Decision Memo:</strong> Extract a one-page briefing note or FAQ grounded strictly in the uploaded citations.
              </li>
            </ul>

            <div className="border-l-2 border-accent bg-surface p-4 text-xs sm:text-sm text-foreground-muted">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent block mb-1">
                2026 Field Note
              </span>
              NotebookLM now includes native deep web source discovery—allowing you to pull cited sources and synthesize them inside a single workspace when speed matters most.
            </div>
          </section>
        </div>
      </>
    ),
  },
  "wrong-question-ai-leader": {
    title: "9 Reasons \"What Can AI Do for Me?\" Is the Wrong Question for Leaders",
    category: "Strategy",
    description: "A practical guide with 9 better questions that turn AI talk into clear ownership and measurable outcomes.",
    image: wrongQuestionHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Most leadership teams open AI planning with the wrong question: <strong className="font-semibold">&ldquo;What can this tool do for us?&rdquo;</strong>
          </p>
          <p className="text-foreground-muted leading-relaxed mb-4">
            High-return deployments start in the opposite direction: define the unit-economics constraint, assign single-threaded accountability, and choose software last.
          </p>
          <p className="text-foreground-muted leading-relaxed">
            If your warehouse roof is leaking, a ladder and sealant are tools—the problem is still the leak. Use the nine reframes below in your next steering review.
          </p>
        </section>

        <section>
          <div className="mb-6 border-b border-border pb-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground-subtle m-0">
              Leadership Diagnostic &mdash; 9 Strategic Reframes
            </h2>
          </div>

          <div className="divide-y divide-border border-b border-border">
            {wrongQuestionReframes.map((item) => (
              <div key={item.order} className="py-7 grid gap-4 sm:grid-cols-[56px_1fr]">
                <div className="font-mono text-sm font-semibold text-accent tabular-nums pt-1">
                  #{item.order}
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground-subtle line-through mb-1">
                    Default: &ldquo;{item.wrongQuestion}&rdquo;
                  </p>
                  <h3 className="font-display text-2xl font-medium text-foreground mt-0 mb-2">
                    &ldquo;{item.betterQuestion}&rdquo;
                  </h3>
                  <p className="text-sm text-foreground-muted m-0">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    ),
  },
  "black-mirror-lessons-ai-leaders": {
    title: "10 Black Mirror AI Lessons Every Business Leader Should Know",
    category: "Learn",
    description: "A practical watchlist linking 10 Black Mirror episodes to real AI governance, risk, and strategy decisions.",
    image: blackMirrorLessonsHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            <strong className="font-semibold">Black Mirror</strong> is a remarkably useful curriculum for executives because it demonstrates how seemingly rational product metrics turn into commercial, legal, and reputational failures.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-4">
            Treat each episode below as a stress-test on incentives, consent, and human override before scaling your own automated systems.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Pair this governance review with{" "}
            <a href="/insights/wrong-question-ai-leader" className="text-accent underline underline-offset-4">
              9 Reasons &ldquo;What Can AI Do for Me?&rdquo; Is the Wrong Question
            </a>{" "}
            and{" "}
            <a href="/insights/why-ai-projects-fail" className="text-accent underline underline-offset-4">
              8 Warning Signs Your AI Project Is Failing
            </a>.
          </p>
        </section>

        <section>
          <div className="mb-6 border-b border-border pb-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground-subtle m-0">
              Governance Watchlist &mdash; 10 Failure Modes in Incentives &amp; Control
            </h2>
          </div>

          <div className="divide-y divide-border border-b border-border">
            {blackMirrorLessons.map((item) => (
              <div key={item.order} className="py-7 grid gap-4 sm:grid-cols-[56px_1fr]">
                <div className="font-mono text-sm font-semibold text-accent tabular-nums pt-1">
                  #{item.order}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground mt-0 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-2.5">
                    Premise: {item.premise}
                  </p>
                  <p className="text-sm text-foreground-muted m-0">
                    <strong className="text-foreground font-semibold">Executive Lesson: </strong>
                    {item.lesson}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-lg border border-border bg-surface p-6 sm:p-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
            Core Principle
          </p>
          <h2 className="font-display text-2xl font-medium text-foreground mt-0 mb-3">
            Governance is the strategy, not the brake
          </h2>
          <p className="text-sm text-foreground-muted leading-relaxed m-0">
            In almost every episode above, the technology functioned exactly as specified. The catastrophe came from unchecked incentives. If your governance framework cannot halt a feature that boosts short-term conversion while eroding customer trust, you do not have a strategy—you have a liability.
          </p>
        </section>
      </>
    ),
  },
  "the-automation-trap": {
    title: "12 Signs You're About to Automate the Wrong Thing: The Automation Trap",
    category: "Automate",
    description: "Automation promises speed, but speed in the wrong direction is expensive failure.",
    image: automationTrapHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Every automation pitch promises <strong className="font-semibold">faster, cheaper, better</strong>. Every failed rollout ends the same way: the shadow Excel sheet stays open, manual workarounds multiply, and leadership wonders where the budget went.
          </p>
          <p className="text-foreground-muted leading-relaxed">
            The software rarely fails. Teams simply automate a broken process. Run this 12-point diagnostic before writing code or buying workflow licenses.
          </p>
        </section>

        <div className="space-y-12">
          {/* Part A */}
          <section className="border-t border-border pt-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
              Phase 01 / Pre-Build Discovery
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mt-0 mb-6">
              Before You Automate
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {[
                { num: "01", title: "A Third of Your Volume Needs 'Special Handling'", desc: "That is not an edge case. That is a second, undocumented workflow you are ignoring." },
                { num: "02", title: "Staff Say 'It Depends' When Asked How It Works", desc: "If frontline operators cannot draw the decision tree on a single page, the process is not ready for code." },
                { num: "03", title: "Everyone Keeps Their Own Side Spreadsheet", desc: "The official system of record is a facade; the real operational logic lives in private Excel tabs." },
                { num: "04", title: "Every Team Runs a Different Variant", desc: "Three regions, three handoff rules. Automate one standard and you immediately break the other two." },
                { num: "05", title: "Nobody Knows Why That Approval Step Exists", desc: "When the only rationale is 'we have always required it,' you are about to hard-code organizational guesswork." },
              ].map((item) => (
                <div key={item.num} className="py-4 grid gap-3 sm:grid-cols-[48px_1fr]">
                  <span className="font-mono text-xs font-semibold text-accent tabular-nums pt-0.5">{item.num}</span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground m-0 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground-muted m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part B */}
          <section className="border-t border-border pt-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
              Phase 02 / Rollout &amp; Cutover
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mt-0 mb-6">
              During Implementation
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {[
                { num: "06", title: "You Launched, But the Old System Stays Open", desc: "Now you are paying licensing and maintenance for two parallel workflows, and data is drifting between both." },
                { num: "07", title: "Exceptions Take Twice as Long to Resolve", desc: "Routine tickets clear faster, but complex customer issues now require checking two dashboards instead of one." },
                { num: "08", title: "The Dashboard Metrics Do Not Reconcile", desc: "The automation log reports 247 completed runs; the finance ledger shows 312. Trust evaporates immediately." },
                { num: "09", title: "Projected ROI Keeps Shifting to 'Intangible Value'", desc: "First the pitch promised 40% cost reduction, then 20%, and now 'strategic learning.' That is a write-off." },
              ].map((item) => (
                <div key={item.num} className="py-4 grid gap-3 sm:grid-cols-[48px_1fr]">
                  <span className="font-mono text-xs font-semibold text-accent tabular-nums pt-0.5">{item.num}</span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground m-0 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground-muted m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Part C */}
          <section className="border-t border-border pt-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
              Phase 03 / Strategic Lock-In
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mt-0 mb-6">
              The Value Trap
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {[
                { num: "10", title: "'Compliance' Is Cited as the Sole Justification", desc: "If the goal is an audit trail, optimize for verifiability and immutability—not raw execution speed." },
                { num: "11", title: "Simple Policy Changes Now Take Six Weeks", desc: "Before automation, a manager updated a rule in five minutes. Now it requires an engineering sprint ticket." },
                { num: "12", title: "Nobody Asked Whether the Task Should Be Deleted", desc: "The highest-leverage automation is eliminating a redundant process entirely before writing a single webhook." },
              ].map((item) => (
                <div key={item.num} className="py-4 grid gap-3 sm:grid-cols-[48px_1fr]">
                  <span className="font-mono text-xs font-semibold text-accent tabular-nums pt-0.5">{item.num}</span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground m-0 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-foreground-muted m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    ),
  },
  "why-ai-projects-fail": {
    title: "8 Warning Signs Your AI Project Is Failing",
    category: "Strategy",
    description: "AI projects do not crash. They fade quietly while everyone stays busy.",
    image: aiWarningSignsHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed">
            Enterprise AI initiatives rarely fail with a dramatic outage. They fade quietly. Steering updates stay green, demos impress, and token usage climbs—<strong className="font-semibold">yet unit economics and customer cycle times remain untouched.</strong>
          </p>
        </section>

        <section>
          <div className="mb-6 border-b border-border pb-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground-subtle m-0">
              Early Detection Signals &mdash; 08 Project Drift Indicators
            </h2>
          </div>

          <div className="divide-y divide-border border-b border-border">
            {warningSignsItems.map((item) => (
              <div key={item.order} className="py-7 grid gap-4 sm:grid-cols-[56px_1fr]">
                <div className="font-mono text-sm font-semibold text-accent tabular-nums pt-1">
                  #{item.order}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground mt-0 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted m-0">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    ),
  },
  "5-signs-always-done-this-way": {
    title: "5 Signs Your Organisation Is Trapped in \"We Have Always Done It This Way\"",
    category: "Strategy",
    description: "Processes outlive their purpose. 5 signals that history is running your operations.",
    image: phoneboothImage,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed">
            Every mature business accumulates workflows that outlive the constraint that created them. Having legacy processes is normal—<strong className="font-semibold">the danger is when &ldquo;we have always done it this way&rdquo; becomes an unchallenged operating doctrine.</strong>
          </p>
        </section>

        <section>
          <div className="mb-6 border-b border-border pb-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground-subtle m-0">
              Operating Model Audit &mdash; 05 Signals of Process Calcification
            </h2>
          </div>

          <div className="divide-y divide-border border-b border-border">
            {legacyOrgSigns.map((item) => (
              <div key={item.order} className="py-7 grid gap-4 sm:grid-cols-[56px_1fr]">
                <div className="font-mono text-sm font-semibold text-accent tabular-nums pt-1">
                  #{item.order}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground mt-0 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted m-0">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    ),
  },
  "12-ai-tools-in-my-tech-stack": {
    title: "12 AI Tools for Productivity in My 2026 Tech Stack",
    category: "Build",
    description: "My practical list of 12 AI tools for productivity in 2026, covering chatbots, coding agents, and developer platforms I use in real workflows.",
    image: techStackHero,
    content: (
      <>
        <section className="mb-12">
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Every week brings another model release and benchmark claim. <strong className="font-semibold">Which tools actually survive daily production work?</strong>
          </p>
          <p className="text-foreground-muted leading-relaxed mb-4">
            After testing dozens of releases and cutting anything redundant, these are the 12 tools that remain in my daily stack across reasoning, software engineering, and research.
          </p>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Planning a broader team rollout? Pair this inventory with{" "}
            <a href="/insights/why-ai-projects-fail" className="text-accent underline underline-offset-4">
              8 Warning Signs Your AI Project Is Failing
            </a>{" "}
            and{" "}
            <a href="/insights/the-automation-trap" className="text-accent underline underline-offset-4">
              The Automation Trap
            </a>.
          </p>
        </section>

        <div className="space-y-14">
          {/* Category 01: Core Reasoning & Chatbots */}
          <section className="border-t border-border pt-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
              Layer 01 / Foundation Models
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mt-0 mb-6">
              Core Reasoning &amp; Conversational Assistants
            </h2>

            <div className="grid sm:grid-cols-2 border-t border-l border-border">
              {[
                { name: "ChatGPT", href: "https://chatgpt.com", logo: chatgptLogo, desc: "OpenAI's flagship multimodal workspace for rapid problem framing, structured drafting, voice ideation, and deep web research." },
                { name: "Claude", href: "https://claude.ai", logo: claudeLogo, desc: "Anthropic's primary reasoning partner—unmatched for nuanced prose, architecture critique, and interactive artifact prototyping." },
                { name: "Gemini", href: "https://gemini.google.com", logo: geminiLogo, desc: "Google's long-context multimodal workhorse for analyzing massive documents, video recordings, and Workspace repositories." },
                { name: "Grok", href: "https://grok.com", logo: grokLogo, desc: "xAI's real-time assistant with direct access to live discourse, breaking technical threads, and rapid sentiment checks." },
                { name: "Kimi", href: "https://kimi.moonshot.cn", logo: kimiLogo, desc: "Moonshot AI's long-context specialist capable of parsing 200,000+ words of technical filings and legal documentation in one prompt." },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-r border-b border-border bg-surface p-5 transition-colors hover:bg-surface-2/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded border border-border bg-white p-1.5 flex items-center justify-center shrink-0">
                      <img src={tool.logo} alt={tool.name} className="h-full w-full object-contain" />
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-accent transition-colors m-0">
                      {tool.name}
                    </h3>
                    <span className="ml-auto font-mono text-xs text-foreground-subtle group-hover:text-accent">&nearr;</span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground-muted m-0">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Category 02: Coding & Research Agents */}
          <section className="border-t border-border pt-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
              Layer 02 / Autonomous Agents
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mt-0 mb-6">
              AI Coding &amp; Grounded Research Tools
            </h2>

            <div className="grid sm:grid-cols-2 border-t border-l border-border">
              {[
                { name: "Antigravity", href: "https://antigravity.google", logo: antigravityLogo, desc: "Google's agent-first development environment built to plan, execute, and verify complex full-stack engineering tasks." },
                { name: "Claude Code", href: "https://docs.anthropic.com/en/docs/claude-code", logo: claudeCodeLogo, desc: "Anthropic's terminal agent that navigates entire repositories, runs test suites, and executes multi-file refactors." },
                { name: "Codex", href: "https://openai.com/codex", logo: codexLogo, desc: "OpenAI's cloud software engineering agent for parallel bug resolution, test generation, and pull-request reviews." },
                { name: "NotebookLM", href: "https://notebook.google/", logo: geminiNotebookLogo, desc: "Google's source-grounded notebook that synthesizes your PDFs, URLs, and transcripts into cited briefings and Audio Overviews." },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-r border-b border-border bg-surface p-5 transition-colors hover:bg-surface-2/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded border border-border bg-white p-1.5 flex items-center justify-center shrink-0">
                      <img src={tool.logo} alt={tool.name} className="h-full w-full object-contain" />
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-accent transition-colors m-0">
                      {tool.name}
                    </h3>
                    <span className="ml-auto font-mono text-xs text-foreground-subtle group-hover:text-accent">&nearr;</span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground-muted m-0">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Category 03: Developer Platforms */}
          <section className="border-t border-border pt-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
              Layer 03 / Deployment &amp; Infrastructure
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground mt-0 mb-6">
              Developer Platforms for Shipping Faster
            </h2>

            <div className="grid sm:grid-cols-3 border-t border-l border-border">
              {[
                { name: "GitHub", href: "https://github.com", logo: githubLogo, desc: "Version control, CI/CD actions, and automated code review workflows that anchor every production deployment." },
                { name: "Lovable", href: "https://lovable.dev", logo: lovableLogo, desc: "Rapid full-stack web application generator with two-way GitHub sync and instant preview deployments." },
                { name: "Replit", href: "https://replit.com", logo: replitLogo, desc: "Zero-setup cloud development and hosting environment for spinning up microservices and internal tools in minutes." },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-r border-b border-border bg-surface p-5 transition-colors hover:bg-surface-2/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded border border-border bg-white p-1.5 flex items-center justify-center shrink-0">
                      <img src={tool.logo} alt={tool.name} className="h-full w-full object-contain" />
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-foreground group-hover:text-accent transition-colors m-0">
                      {tool.name}
                    </h3>
                    <span className="ml-auto font-mono text-xs text-foreground-subtle group-hover:text-accent">&nearr;</span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground-muted m-0">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </>
    ),
  },
};
