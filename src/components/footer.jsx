import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub, FaInstagram, FaReddit } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    borderTop: "2px solid #FFFFFF",
    backgroundColor: "#080807",
    color: "#B0B0B0",
    fontFamily: "'Poppins', sans-serif",
    padding: "3rem 3rem 1rem 3rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    position: "relative",
    // boxShadow: "0 -2px 20px rgba(255, 134, 96, 0.3), 0 -4px 40px rgba(154, 51, 255, 0.2)"
  };

  const leftStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  };

  const logoStyle = {
    width: "100px", // bigger logo
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px"
  };

  const navLinksStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  };

  const linkStyle = {
    color: "#B0B0B0",
    textDecoration: "none",
    transition: "all 0.3s ease"
  };

  const rightStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1rem"
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "1rem",
    fontSize: "1.5rem"
  };

  const iconStyle = {
    color: "#B0B0B0",
    transition: "all 0.3s ease"
  };

  const bottomTextStyle = {
    fontSize: "0.9rem",
    color: "#777",
    position: "absolute",
    bottom: "0.5rem",
    right: "3rem"
  };

  return (
    <footer style={footerStyle}>
      {/* Left side: Logo + nav links */}
      <div style={leftStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />

        <div style={navLinksStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>
      </div>

      {/* Right side: Social links */}
      <div style={rightStyle}>
        <div style={socialIconsStyle}>
          <a href="https://www.github.com/hamidmbairik" target="_blank" rel="noopener noreferrer" style={iconStyle} className="footer-icon"><FaGithub /></a>
          <a href="https://www.instagram.com/l3zwadev/" target="_blank" rel="noopener noreferrer" style={iconStyle} className="footer-icon"><FaInstagram /></a>
          <a href="https://www.reddit.com/u/L3zwaDev/s/AnGzcQZJ7u" target="_blank" rel="noopener noreferrer" style={iconStyle} className="footer-icon"><FaReddit /></a>
        </div>
      </div>

      {/* Bottom right copyright text */}
      <div style={bottomTextStyle}>
        &copy; {new Date().getFullYear()} Hamid Mbairik. All rights reserved.
      </div>

      <style>
        {`
          .footer-icon:hover {
            color: #FF8660;
            text-shadow: 0 0 8px #FF8660, 0 0 16px #9A33FF;
          }

          a:hover {
            color: #FF8660;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
