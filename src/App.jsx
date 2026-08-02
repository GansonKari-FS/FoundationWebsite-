import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Memory from "./pages/Memory";
import Mission from "./pages/Mission";
import Assistance from "./pages/Assistance";
import Board from "./pages/Board";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/board" element={<Board />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
