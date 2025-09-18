// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";

// Import your screenshot
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React, showcasing my projects and skills.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/hamidmbairik/portfolio",
    demo: "/",
    screenshot: portfolioImg,
  },
  {
    title: "MovieMood",
    description:
      "A movie recommendation AI app that suggests movies based on your mood.",
    tech: ["React", "Python", "API", "TailwindCSS"],
    github: "https://github.com/hamidmbairik/moviemood",
    demo: "/",
    screenshot: null,
  },
  {
    title: "ResumeGrr",
    description:
      "A resume builder tool that helps create professional resumes quickly.",
    tech: ["React", "Firebase", "CSS", "HTML"],
    github: "https://github.com/hamidmbairik/resumegrr",
    demo: "/",
    screenshot: null,
  },
];

const Projects = () => {
  return (
    <section style={pageStyle}>
      <h2 style={titleStyle}>My Projects</h2>
      <div style={projectsGridStyle}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Animations and hover effects */}
      <style>
        {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 0 25px rgba(255, 134, 96, 0.5), 0 0 40px rgba(154, 51, 255, 0.3);
          }

          .project-card img {
            transition: transform 0.4s ease;
          }
          .project-card img:hover {
            transform: scale(1.05);
          }

          .project-btn {
            transition: all 0.3s ease;
          }
          .project-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 12px rgba(255,255,255,0.4);
          }
        `}
      </style>
    </section>
  );
};

// Styles
const pageStyle = {
  minHeight: "100vh",
  padding: "2rem",
  backgroundColor: "#080807",
  color: "#E6E6E6",
  fontFamily: "'Poppins', sans-serif",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginTop: "6rem", // space below navbar
  marginBottom: "3rem",
  background: "linear-gradient(90deg, #FF8660, #9A33FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const projectsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2.5rem",
  justifyContent: "center",
  alignItems: "center",
};

export default Projects;
