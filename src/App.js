import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project1 from "./projects/project1";

function App() {
  return (
    <Router>
      <div className="bg-black text-white font-sans min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;