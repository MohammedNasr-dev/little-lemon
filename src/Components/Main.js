import React from "react";
import HeroSection from './HeroSection';
import SpecialsSection from './SpecialsSection';
import ReviewsSection from './ReviewsSection';
import AboutSection from './AboutSection';

const Main = () => {
    return(
        <main>
            <HeroSection />
            <SpecialsSection />
            <ReviewsSection />
            <AboutSection />
        </main>
    );
}

export default Main;