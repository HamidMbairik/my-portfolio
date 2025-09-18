import React from "react";
import logo from "../assets/logo.png";
import pfp from "../assets/pfp.png";
import { FaGithub, FaInstagram, FaReddit, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiExpress, SiMongodb } from "react-icons/si";

const Home = ({ setNavbarLogo }) => {
  const heroStyle = {
    position: "relative",
    textAlign: "center",
    height: "100vh",
    color: "#E6E6E6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#080807",
    fontFamily: "'Poppins', sans-serif",
    flexDirection: "column"
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
  };

  const h1Style = { fontSize: "3.2rem", marginBottom: "0", fontWeight: "700", cursor: "none" };
  const h2Style = {
    fontSize: "3rem",
    fontWeight: "700",
    background: "linear-gradient(90deg, #FF8660, #9A33FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "0",
    cursor: "none"
  };

  const captionStyle = {
    fontSize: "1.1rem",
    color: "#B0B0B0",
    lineHeight: "1.5",
    textAlign: "center",
    marginTop: "0.5rem",
    marginBottom: "1rem"
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "0.5rem"
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    textDecoration: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    border: "none",
    cursor: "none",
    textAlign: "center",
    fontWeight: "500",
    transition: "all 0.5s ease"
  };

  const contactButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#FFFFFF",
    color: "#080807"
  };

  const downloadButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "2px solid #FFFFFF"
  };

  const gridOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px), " +
      "linear-gradient(0deg, rgba(255,255,255,0.05) 2px, transparent 2px)",
    backgroundSize: "50px 50px",
    animation: "moveGrid 20s linear infinite",
    zIndex: 1,
    maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 60%)",
    WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 60%)"
  };


  const fadeOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at center, rgba(8,8,7,0) 75%, rgba(8,8,7,0.6) 100%), " +
      "linear-gradient(to bottom, rgba(8,8,7,0) 50%, rgba(8,8,7,1) 100%)",
    zIndex: 2,
    pointerEvents: "none"
  };

  // Tech Stack Section Styles
  const techSectionStyle = {
    padding: "4rem 2rem",
    backgroundColor: "#080807", // same as main bg
    color: "#E6E6E6",
    textAlign: "center"
  };

  const techTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    background: "linear-gradient(90deg, #FF8660, #9A33FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "2rem"
  };

  const techListStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem"
  };

  const techItemStyle = {
    fontSize: "3rem",
    transition: "all 0.3s ease",
    cursor: "none"
  };

  // About Me section styles
  const aboutSectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "3rem",
    padding: "6rem 2rem",
    backgroundColor: "#080807",
    color: "#E6E6E6",
    flexWrap: "wrap"
  };

  const aboutImageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem"
  };

  const aboutImageStyle = {
    width: "250px",
    borderRadius: "15px",
    objectFit: "cover",
    objectPosition: "center",
    flexShrink: 0
  };

  const aboutTextStyle = {
    maxWidth: "600px",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#B0B0B0",
    textAlign: "left"
  };

  const aboutTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    background: "linear-gradient(90deg, #FF8660, #9A33FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1rem"
  };

  const aboutSubtitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    background: "linear-gradient(90deg, #FF8660, #9A33FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "0.5rem"
  };

  const socialIconStyle = {
    fontSize: "1.8rem",
    color: "#B0B0B0",
    transition: "all 0.3s ease"
  };

  // Real Tech Stack array with colors
  const techStack = [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <FaGit color="#F05032" />, name: "Git" },
    { icon: <SiTailwindcss color="#38B2AC" />, name: "TailwindCSS" },
    { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
    { icon: <SiExpress color="#000000" />, name: "Express" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { icon: <FaSass color="#CC6699" />, name: "Sass" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={gridOverlayStyle}></div>
        <div style={fadeOverlayStyle}></div>

        <div style={heroContentStyle}>
          <h1
            style={h1Style}
            onMouseEnter={() => setNavbarLogo(pfp)}
            onMouseLeave={() => setNavbarLogo(logo)}
          >
            Hi, I'm Hamid Mbairik
          </h1>

          <h2
            style={h2Style}
            onMouseEnter={() => setNavbarLogo(logo)}
            onMouseLeave={() => setNavbarLogo(logo)}
          >
            aka - L3zwaDev -
          </h2>

          <p style={captionStyle}>
            I build websites that work smoothly and look clean, using <br /> React, JavaScript, HTML, and CSS.
          </p>

          <div style={buttonContainerStyle}>
            <a href="#contact" style={contactButtonStyle} className="contact-btn">Get in Touch</a>
            <a href="/Hamid_Mbairik_CV.pdf" download style={downloadButtonStyle} className="download-btn">Download CV</a>
          </div>
        </div>

        <style>
          {`
            @keyframes moveGrid {
              0% { transform: translate(0,0); }
              100% { transform: translate(-50px, -50px); }
            }

            .contact-btn:hover {
              box-shadow: 0 0 20px rgba(255,255,255,0.6),
                          0 0 40px rgba(255,255,255,0.4),
                          0 0 60px rgba(255,255,255,0.2);
            }

            .download-btn:hover {
              box-shadow: 0 0 20px rgba(255,255,255,0.6),
                          0 0 40px rgba(255,255,255,0.4),
                          0 0 60px rgba(255,255,255,0.2);
            }

            .social-icon:hover {
              color: #FF8660;
              text-shadow: 0 0 8px #FF8660, 0 0 16px #9A33FF;
            }

            .tech-item:hover {
              text-shadow: 0 0 10px #FF8660, 0 0 20px #9A33FF;
            }
          `}
        </style>
      </section>

      {/* Tech Stack Section */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#080807", textAlign: "center" }} id="techstack">
        <h2 style={techTitleStyle}>My Tech Stack</h2>
        <div style={techListStyle}>
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item" style={techItemStyle} title={tech.name}>
              {tech.icon}
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section style={aboutSectionStyle} id="about">
        <div style={aboutImageContainerStyle}>
          <img src={pfp} alt="Hamid Mbairik" style={aboutImageStyle} />

          {/* Social Media Icons below the image */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="https://www.github.com/hamidmbairik" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/l3zwadev/" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
              <FaInstagram />
            </a>
            <a href="https://www.reddit.com/u/L3zwaDev/s/AnGzcQZJ7u" target="_blank" rel="noopener noreferrer" className="social-icon" style={socialIconStyle}>
              <FaReddit />
            </a>
          </div>
        </div>

        <div style={aboutTextStyle}>
          <h2 style={aboutTitleStyle}>About Me</h2>

          <h3 style={aboutSubtitleStyle}>Who I Am</h3>
          <p>
            I'm Hamid Mbairik, also known as L3zwaDev, a front-end developer from Morocco.
            I enjoy creating clean and functional websites that are both visually appealing and practical.
          </p>

          <h3 style={aboutSubtitleStyle}>My Skills</h3>
          <p>
            I work mainly with React, JavaScript, HTML, and CSS, focusing on smooth, maintainable, and responsive code.
            I enjoy solving problems creatively and keeping my work simple yet effective.
          </p>

          <h3 style={aboutSubtitleStyle}>My Passion</h3>
          <p>
            Outside of coding, I like exploring new technologies, learning new techniques, and improving my skills every day.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
