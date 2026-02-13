import FeaturedShowcase from "@/components/FeaturedShowcase";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import TrustBanner from "@/components/TrustBanner";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "DG Jewellers | Premium Gold & Diamond Jewellery in Bhadaura";
    }, []);

    return (
        <div className="min-h-screen">
            <HeroSection />
            <PhilosophySection />
            <FeaturedShowcase />
            <TrustBanner />
        </div>
    );
};

export default Home;
