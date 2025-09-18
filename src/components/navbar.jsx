import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ logo }) => {
  const location = useLocation();
  const [fade, setFade] = useState(false);
  const [topOffset, setTopOffset] = useState(16); // 1rem in px

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 200);
    return () => clearTimeout(timer);
  }, [logo]);

  // Scroll effect to keep navbar at top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTopOffset(Math.max(16, scrollY + 16)); // stays at top
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    position: "fixed",
    marginTop: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "85%",
    minWidth: "300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 2rem",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    zIndex: 10,
    fontFamily: "'Poppins', sans-serif",
    transition: "top 0.3s ease, width 0.3s ease"
  };

  const logoStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top",
    transition: "opacity 0.3s ease"
  };

  const linksContainerStyle = {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    flex: 1
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#FF8660" : "#FFFFFF",
    textDecoration: "none",
    fontWeight: "500",
    paddingBottom: "2px",
    alignSelf: "center",
    transition: "all 0.3s ease",
  });

  const contactButtonStyle = {
    backgroundColor: "#FFFFFF",
    color: "#080807",
    padding: "0.5rem 1.25rem",
    borderRadius: "50px",
    border: "none",
    fontWeight: "500",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden"
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo/Profile on the left with fade */}
      <img
        src={logo}
        alt="Logo"
        style={{ ...logoStyle, opacity: fade ? 0 : 1 }}
      />

      {/* Centered Links */}
      <div style={linksContainerStyle}>
        <Link
          to="/"
          style={linkStyle("/")}
          onMouseEnter={(e) => (e.target.style.textShadow = "0 0 12px #FFFFFF")}
          onMouseLeave={(e) => (e.target.style.textShadow = "none")}
        >
          Home
        </Link>
        <Link
          to="/projects"
          style={linkStyle("/projects")}
          onMouseEnter={(e) => (e.target.style.textShadow = "0 0 12px #FFFFFF")}
          onMouseLeave={(e) => (e.target.style.textShadow = "none")}
        >
          Projects
        </Link>
        <Link
          to="/services"
          style={linkStyle("/services")}
          onMouseEnter={(e) => (e.target.style.textShadow = "0 0 12px #FFFFFF")}
          onMouseLeave={(e) => (e.target.style.textShadow = "none")}
        >
          services
        </Link>
      </div>

      {/* Contact button */}
      <Link
        to="/contact"
        style={contactButtonStyle}
        onMouseEnter={(e) =>
          (e.target.style.boxShadow =
            "0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(255,255,255,0.4), 0 0 36px rgba(255,255,255,0.2)")
        }
        onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
