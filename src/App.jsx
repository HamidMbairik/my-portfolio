import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import logo from "./assets/logo.png"; // default logo
import pfp from "./assets/pfp.png";   // profile picture

function App() {
  // State for the navbar logo
  const [navbarLogo, setNavbarLogo] = useState(logo);

  return (
    <>
      {/* Custom mouse cursor */}
      <CustomCursor />

      <Router>
        {/* Pass the current logo to the Navbar */}
        <Navbar logo={navbarLogo} />

        {/* Define routes and pass the setNavbarLogo function to Home */}
        <Routes>
          <Route
            path="/"
            element={<Home setNavbarLogo={setNavbarLogo} defaultLogo={logo} pfp={pfp} />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer appears on all pages */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
