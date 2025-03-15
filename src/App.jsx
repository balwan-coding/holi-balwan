import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import CelebrateHoli from "./components/CelebrateHoli";
import HoliQuizGame from "./components/HoliQuizGame";
import BalloonGame from "./components/BaloonGame";
import HoliGame from "./components/HoliGame";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/celebrateHoli" element={<CelebrateHoli />} />
        <Route path="/holiGame" element={<HoliGame />} />
        <Route path="/holiQuizGame" element={<HoliQuizGame />} />
        <Route path="/balloonGame" element={<BalloonGame />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
