import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Courses from "./pages/Courses";
// import Faculty from "./pages/Faculty";
import Result from "./components/CheckResult";
import Contact from "./pages/Contacts";
import Results from "./pages/Results";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/faculty" element={<Faculty />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/checkresult" element={<Result />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Popup />
      <Footer />
    </>
  );
}

export default App;
