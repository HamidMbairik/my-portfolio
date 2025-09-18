// src/components/ProjectCard.jsx
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const ProjectCard = ({ title, description, tech, github, demo, screenshot }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="project-card"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          padding: "1.5rem",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Screenshot / Thumbnail */}
        {screenshot ? (
          <img
            src={screenshot}
            alt={title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "1rem",
              cursor: "none",
              transition: "transform 0.4s ease",
            }}
            className="screenshot"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "180px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.9rem",
              color: "#aaa",
            }}
          >
            <span style={{ fontSize: "2rem" }}>😢</span>
            <p>No image available</p>
          </div>
        )}

        {/* Project Title */}
        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{title}</h3>

        {/* Description */}
        <p style={{ fontSize: "1rem", color: "#ccc", marginBottom: "1rem" }}>
          {description}
        </p>

        {/* Tech Stack */}
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {tech.map((item, index) => (
            <span
              key={index}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "0.3rem 0.7rem",
                borderRadius: "8px",
                fontSize: "0.8rem",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
            style={buttonStyle}
          >
            <FaGithub style={{ marginRight: "0.5rem" }} /> GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
            style={buttonStyle}
          >
            <BiLinkExternal style={{ marginRight: "0.5rem" }} /> Demo
          </a>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isOpen && (
        <div style={overlayStyle}>
          <button style={closeBtnStyle} onClick={() => setIsOpen(false)}>
            <IoClose size={32} />
          </button>
          <img
            src={screenshot}
            alt={title}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 30px rgba(0,0,0,0.7)",
            }}
          />
        </div>
      )}

      {/* Hover Effects */}
      <style>
        {`
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 0 25px rgba(255, 134, 96, 0.5), 0 0 40px rgba(154, 51, 255, 0.3);
          }

          .project-card .screenshot:hover {
            transform: scale(1.05);
          }

          .project-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          .project-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 12px rgba(255,255,255,0.4);
          }
        `}
      </style>
    </>
  );
};

// Styles
const buttonStyle = {
  background: "linear-gradient(90deg, #FF8660, #9A33FF)",
  color: "#fff",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: "500",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const closeBtnStyle = {
  position: "absolute",
  top: "20px",
  right: "30px",
  background: "transparent",
  border: "none",
  color: "#fff",
  cursor: "none",
};

export default ProjectCard;
