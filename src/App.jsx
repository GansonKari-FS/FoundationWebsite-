import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Memory from "./pages/Memory";
import Assistance from "./pages/Assistance";
import Board from "./pages/Board";
import Resources from "./pages/Resources";
import Donate from "./pages/Donate";
import Events from "./pages/Events";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/board" element={<Board />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />

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
