import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import JoinCTA from "../components/JoinCTA";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress"

const Home = () => {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Collection />
            <Roadmap />
            <FAQ />
            <JoinCTA />
            <Footer />
        </>
    );
};

export default Home;