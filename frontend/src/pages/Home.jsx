import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

function Home(){
    return(
        <div className="page-container">
            <Navbar/>
            <main>
                <HeroSection/>
            </main>
            <Footer/>
        </div>
    );
}

export default Home;