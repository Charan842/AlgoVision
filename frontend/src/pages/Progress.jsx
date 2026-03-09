import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import "../styles/progress.css";

function Progress() {
    return (
        <div className="page-container progress-page">
            <Navbar />

            <main className="progress-main">
                <section className="progress-placeholder">
                    <span className="progress-badge">Coming Soon</span>
                    <h1 className="progress-title">Progress</h1>
                    <p className="progress-copy">
                        Your completed algorithms, learning streaks, and progress insights will be shown here later.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Progress;
