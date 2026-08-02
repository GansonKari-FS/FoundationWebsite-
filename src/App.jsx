import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Memory from "./pages/Memory";
import Assistance from "./pages/Assistance";
import Board from "./pages/Board";
import Resources from "./pages/Resource";
import Donate from "./pages/Donate";
import Events from "./pages/Events";

// Resource Pages
import Housing from "./pages/resources/Housing";
import Food from "./pages/resources/Food";
import MentalHealth from "./pages/resources/MentalHealth";
import Healthcare from "./pages/resources/Healthcare";
import Education from "./pages/resources/Education";
import Employment from "./pages/resources/Employment";
import FamilySupport from "./pages/resources/FamilySupport";
import CommunityPrograms from "./pages/resources/CommunityPrograms";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/board" element={<Board />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />

        {/* Resource Pages */}
        <Route path="/resources/housing-assistance" element={<Housing />} />
        <Route path="/resources/food-assistance" element={<Food />} />
        <Route path="/resources/mental-health" element={<MentalHealth />} />
        <Route path="/resources/healthcare" element={<Healthcare />} />
        <Route path="/resources/education" element={<Education />} />
        <Route path="/resources/employment" element={<Employment />} />
        <Route path="/resources/family-support" element={<FamilySupport />} />
        <Route
          path="/resources/community-programs"
          element={<CommunityPrograms />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
