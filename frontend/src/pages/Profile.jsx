import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import "../styles/profile.css";

function Profile() {
    return (
        <div className="page-container profile-page">
            <Navbar />

            <main className="profile-main">
                <section className="profile-placeholder">
                    <span className="profile-badge">Coming Soon</span>
                    <h1 className="profile-title">Profile</h1>
                    <p className="profile-copy">
                        Your profile details, saved preferences, and personal settings will appear here soon.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Profile;
