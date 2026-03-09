import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.css";

const storySteps = [
    {
        step: "01",
        label: "Curiosity",
        title: "It Starts With a Question",
        paragraphs: [
            "How does Google search billions of pages in milliseconds?",
            "How does Instagram recommend the perfect post?",
            "Behind every smart system lies an algorithm."
        ]
    },
    {
        step: "02",
        label: "Discovery",
        title: "See Algorithms Come Alive",
        paragraphs: [
            "Watch sorting algorithms organize chaos.",
            "Follow graph algorithms as they find the fastest path.",
            "Explore tree structures powering databases and search engines."
        ]
    },
    {
        step: "03",
        label: "Understanding",
        title: "Learn by Watching",
        paragraphs: [
            "Instead of memorizing code, understand how algorithms think through step-by-step visualizations."
        ]
    },
    {
        step: "04",
        label: "Mastery",
        title: "Become an Algorithm Thinker",
        paragraphs: [
            "Build intuition for problem solving and strengthen your data structures foundation."
        ]
    }
];

const featureCards = [
    {
        badge: "01",
        title: "Algorithm Visualizer",
        description: "Watch sorting, searching, trees, and graphs in motion."
    },
    {
        badge: "02",
        title: "Step-by-Step Execution",
        description: "Understand each step of the algorithm process."
    },
    {
        badge: "03",
        title: "Track Your Learning",
        description: "Measure your progress and become better every day."
    }
];

function SectionHeader({ eyebrow, title, description }) {
    return (
        <div className="journey-section-header">
            <span className="journey-eyebrow">{eyebrow}</span>
            <h2 className="journey-section-title">{title}</h2>
            {description ? <p className="journey-section-copy">{description}</p> : null}
        </div>
    );
}

function StoryCard({ step, label, title, paragraphs }) {
    return (
        <article className="journey-card journey-step-card">
            <div className="journey-card-top">
                <span className="journey-step-badge">{step}</span>
                <span className="journey-card-label">{label}</span>
            </div>
            <h3 className="journey-card-title">{title}</h3>
            <div className="journey-card-copy">
                {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
}

function FeatureCard({ badge, title, description }) {
    return (
        <article className="journey-card journey-feature-card">
            <span className="journey-feature-badge">{badge}</span>
            <h3 className="journey-card-title">{title}</h3>
            <p className="journey-card-copy">{description}</p>
        </article>
    );
}

function Home() {
    const navigate = useNavigate();
    const algorithmsRoute = "/Algorithms";
    // Use the current live route until a dedicated visualizer page is added.
    const visualizerRoute = algorithmsRoute;

    return (
        <div className="page-container">
            <Navbar />

            <main className="journey-main">
                <section className="journey-shell journey-section journey-hero" style={{ animationDelay: "0.05s" }}>
                    <div className="journey-hero-content">
                        <span className="journey-kicker">The Journey of an Algorithm Explorer</span>
                        <h1 className="journey-title">Welcome to the World of Algorithms</h1>
                        <p className="journey-copy">
                            <span>Every problem hides a pattern.</span>
                            <span>Every pattern hides an algorithm.</span>
                            <span>Start exploring how computers actually think.</span>
                        </p>
                        <div className="journey-actions">
                            <button
                                type="button"
                                className="journey-button"
                                onClick={() => navigate(visualizerRoute)}
                            >
                                {"\u{1F680} Start Visualizing"}
                            </button>
                            <button
                                type="button"
                                className="journey-button journey-button--ghost"
                                onClick={() => navigate(algorithmsRoute)}
                            >
                                {"\u{1F4DA} Explore Algorithms"}
                            </button>
                        </div>
                    </div>
                </section>

                <section className="journey-shell journey-section" style={{ animationDelay: "0.15s" }}>
                    <SectionHeader
                        eyebrow="Story Timeline"
                        title="A Learning Journey Built for Beginners"
                        description="AlgoVision turns abstract logic into a guided story so you can move from curiosity to confidence without getting lost in syntax first."
                    />

                    <div className="journey-timeline">
                        {storySteps.map((step) => (
                            <StoryCard key={step.step} {...step} />
                        ))}
                    </div>
                </section>

                <section className="journey-shell journey-section" style={{ animationDelay: "0.25s" }}>
                    <SectionHeader
                        eyebrow="Feature Highlights"
                        title="What You Can Explore"
                        description="Dive into interactive tools that make algorithm behavior feel visual, intuitive, and worth revisiting every day."
                    />

                    <div className="journey-features-grid">
                        {featureCards.map((feature) => (
                            <FeatureCard key={feature.badge} {...feature} />
                        ))}
                    </div>
                </section>

                <section className="journey-shell journey-section journey-quote" style={{ animationDelay: "0.35s" }}>
                    <p className="journey-quote-mark">Motivation</p>
                    <blockquote className="journey-quote-text">
                        Programs must be written for people to read.
                    </blockquote>
                    <p className="journey-quote-attribution">Donald Knuth</p>
                </section>

                <section className="journey-shell journey-section journey-final" style={{ animationDelay: "0.45s" }}>
                    <SectionHeader
                        eyebrow="Final Call"
                        title="Ready to Decode Algorithms?"
                        description="Dive into interactive visualizations and start mastering data structures today."
                    />

                    <button
                        type="button"
                        className="journey-button"
                        onClick={() => navigate(algorithmsRoute)}
                    >
                        {"Explore Now \u2192"}
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
