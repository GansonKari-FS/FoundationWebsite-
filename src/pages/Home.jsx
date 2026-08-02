import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramsSection";
import ImpactSection from "../components/ImpactSection";
import LegacySection from "../components/LegacySection";

import portrait from "../assets/images/antonie-portrait.jpg";
import smile from "../assets/images/antonie-smile.jpg";
import family from "../assets/images/antonie-allKids.jpg";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
    </>
  );
}

export default Home;
