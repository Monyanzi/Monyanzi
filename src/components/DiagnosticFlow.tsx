import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface DiagnosticFlowProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Question {
    id: string;
    question: string;
    type: "options" | "form";
    options?: { value: string; label: string; sublabel?: string }[];
}

const questions: Question[] = [
    {
        id: "stage",
        question: "Where are you in your thinking?",
        type: "options",
        options: [
            { value: "exploring", label: "Just exploring", sublabel: "Curious if there's a better way to do things" },
            { value: "planning", label: "Planning something big", sublabel: "M&A, new strategy, major investment decision" },
            { value: "stuck", label: "Stuck on a decision", sublabel: "Have options but unsure which is right" },
            { value: "firefighting", label: "Something needs fixing now", sublabel: "Process failing, deal deadline, board pressure" },
            { value: "ai_hell", label: "AI project stalled", sublabel: "Stuck in buzzword hell and need actual results" },
            { value: "other", label: "Something else", sublabel: "I'll explain in my message" },
        ],
    },
    {
        id: "support",
        question: "What would be most helpful?",
        type: "options",
        options: [
            { value: "analysis", label: "Crunch the numbers", sublabel: "Data analysis, scenario modelling, stress testing" },
            { value: "model", label: "Build a model", sublabel: "Valuation, pricing framework, or financial model" },
            { value: "advisory", label: "Strategic advice", sublabel: "Clear recommendation I can act on" },
            { value: "full", label: "End-to-end support", sublabel: "From analysis through to board-ready insight" },
            { value: "rescue", label: "Rescue my AI project", sublabel: "Turn hype into something that actually works" },
            { value: "other", label: "Not sure yet", sublabel: "Let's discuss what makes sense" },
        ],
    },
    {
        id: "contact",
        question: "Where should I reach you?",
        type: "form",
    },
];

interface ContactData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
}

const DiagnosticFlow = ({ isOpen, onClose }: DiagnosticFlowProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [contactData, setContactData] = useState<ContactData>({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsVisible(true), 10);
            document.body.style.overflow = "hidden";
            // Reset state when opening
            setCurrentStep(0);
            setAnswers({});
            setContactData({ firstName: "", lastName: "", company: "", email: "" });
            setIsComplete(false);
        } else {
            setIsVisible(false);
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const progress = ((currentStep + 1) / questions.length) * 100;
    const currentQuestion = questions[currentStep];

    const handleSelect = (value: string) => {
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
        }
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsComplete(true);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleSendEmail = () => {
        // Map answers to readable text for the email
        const stageMap: Record<string, string> = {
            exploring: "I'm exploring options and curious about a better way to approach things",
            planning: "I'm planning something significant: an M&A transaction, new strategy, or major investment decision",
            stuck: "I'm stuck on a decision. I have multiple options but need clarity on which path is right",
            firefighting: "I have something urgent: a process is failing, a deadline is looming, or the board needs answers now",
            ai_hell: "My AI/automation project has stalled. I've heard all the buzzwords but need someone who can deliver actual results",
            other: "My situation is a bit different (details below)",
        };

        const supportMap: Record<string, string> = {
            analysis: "Data analysis: crunch the numbers, find patterns, stress-test scenarios",
            model: "A financial model: valuation, pricing framework, or decision support tool",
            advisory: "Strategic advice: clear recommendations I can take to the board",
            full: "End-to-end support: from raw data through to board-ready insight",
            rescue: "Rescue my AI project: turn the hype into something that actually delivers value",
            other: "I'm not sure yet. Let's discuss what would make sense",
        };

        const fullName = `${contactData.firstName} ${contactData.lastName}`.trim();

        // Dynamic subject based on urgency
        let subject = "Let's talk";
        if (answers.stage === "firefighting") {
            subject = "Urgent: Need help now";
        } else if (answers.stage === "ai_hell") {
            subject = "AI project needs rescuing";
        } else if (answers.stage === "planning") {
            subject = "Planning a major decision";
        }

        if (contactData.company) {
            subject = `${subject} - ${contactData.company}`;
        }

        // Build a more professional, structured email
        const emailBody = `Hi Moses,

I found your profile and completed the diagnostic. Here's my situation:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHERE I AM
${stageMap[answers.stage] || "Exploring options"}

WHAT WOULD HELP
${supportMap[answers.support] || "Some guidance on next steps"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADDITIONAL CONTEXT
[Please add 2-3 sentences about your specific situation, timeline, and what success looks like]




━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I'd appreciate a brief call to discuss whether you can help.

Best regards,
${fullName}${contactData.company ? `\n${contactData.company}` : ""}
${contactData.email}`;

        const mailtoUrl = `mailto:moses.k.nyanzi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoUrl;

        setTimeout(() => onClose(), 300);
    };

    const isContactValid = contactData.firstName.trim() && contactData.email.trim();

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isVisible ? "bg-[hsl(160,45%,10%)]/95 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div
                className={`relative w-full max-w-2xl mx-6 transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
            >
                {/* Close / Skip button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                    Skip <ArrowRight className="w-4 h-4" />
                </button>

                {!isComplete ? (
                    <>
                        {/* Progress bar */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-xs text-white/50">
                                    Step {currentStep + 1} of {questions.length}
                                </span>
                                <span className="font-mono text-xs text-[hsl(38,82%,50%)]">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[hsl(38,82%,50%)] transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Question */}
                        <div className="transition-all duration-300">
                            <h2 className="font-display text-3xl md:text-4xl text-white mb-8 leading-tight">
                                {currentQuestion.question}
                            </h2>

                            {currentQuestion.type === "options" && currentQuestion.options && (
                                <div className="space-y-3">
                                    {currentQuestion.options.map((option, index) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleSelect(option.value)}
                                            className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group ${answers[currentQuestion.id] === option.value
                                                ? "bg-[hsl(38,82%,50%)]/20 border-[hsl(38,82%,50%)] text-white"
                                                : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/30"
                                                }`}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <span
                                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${answers[currentQuestion.id] === option.value
                                                        ? "border-[hsl(38,82%,50%)] bg-[hsl(38,82%,50%)]"
                                                        : "border-white/30 group-hover:border-white/50"
                                                        }`}
                                                >
                                                    {answers[currentQuestion.id] === option.value && (
                                                        <span className="w-2 h-2 bg-[hsl(160,45%,10%)] rounded-full" />
                                                    )}
                                                </span>
                                                <div>
                                                    <span className="font-medium block mb-1">
                                                        {option.label}
                                                    </span>
                                                    {option.sublabel && (
                                                        <span className="text-sm text-white/50">
                                                            {option.sublabel}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}

                            {currentQuestion.type === "form" && (
                                <form onSubmit={handleContactSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-white/70 mb-2">
                                                First name *
                                            </label>
                                            <input
                                                type="text"
                                                value={contactData.firstName}
                                                onChange={(e) => setContactData(prev => ({ ...prev, firstName: e.target.value }))}
                                                placeholder="John"
                                                required
                                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(38,82%,50%)] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-white/70 mb-2">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                value={contactData.lastName}
                                                onChange={(e) => setContactData(prev => ({ ...prev, lastName: e.target.value }))}
                                                placeholder="Smith"
                                                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(38,82%,50%)] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            value={contactData.company}
                                            onChange={(e) => setContactData(prev => ({ ...prev, company: e.target.value }))}
                                            placeholder="Acme Corporation"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(38,82%,50%)] transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/70 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={contactData.email}
                                            onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                                            placeholder="john@company.com"
                                            required
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(38,82%,50%)] transition-colors"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!isContactValid}
                                        className={`w-full mt-4 inline-flex items-center justify-center gap-2 font-semibold tracking-wide uppercase text-sm py-4 rounded-full transition-all duration-300 ${isContactValid
                                            ? "bg-[hsl(38,82%,50%)] text-[hsl(160,45%,10%)] hover:bg-[hsl(38,82%,55%)] hover:scale-[1.02]"
                                            : "bg-white/10 text-white/30 cursor-not-allowed"
                                            }`}
                                    >
                                        Continue
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Back button */}
                        {currentStep > 0 && currentQuestion.type === "options" && (
                            <button
                                onClick={handleBack}
                                className="mt-6 text-sm text-white/50 hover:text-white transition-colors"
                            >
                                ← Previous question
                            </button>
                        )}
                    </>
                ) : (
                    /* Completion state */
                    <div className="text-center py-12">
                        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[hsl(38,82%,50%)]/20 flex items-center justify-center">
                            <span className="text-4xl text-[hsl(38,82%,50%)]">✓</span>
                        </div>

                        <h2 className="font-display text-3xl text-white mb-4">
                            Perfect, {contactData.firstName}.
                        </h2>

                        <p className="text-white/60 mb-8 max-w-md mx-auto">
                            Click below to open your email client. I've drafted a structured message based on your answers. Just add a few details about your specific situation.
                        </p>

                        <button
                            onClick={handleSendEmail}
                            className="inline-flex items-center gap-2 bg-[hsl(38,82%,50%)] text-[hsl(160,45%,10%)] font-semibold tracking-wide uppercase text-sm px-10 py-5 rounded-full transition-all duration-300 hover:bg-[hsl(38,82%,55%)] hover:scale-[1.02]"
                        >
                            Draft My Email
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                            onClick={onClose}
                            className="block w-full text-white/50 hover:text-white text-sm mt-6 transition-colors"
                        >
                            Maybe later
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiagnosticFlow;
