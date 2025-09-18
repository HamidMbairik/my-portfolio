// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sldselh",     // your service ID
        "template_zmqx2tn",    // your template ID
        form.current,
        "GgYBCptNssFeUV9yS"    // your public key
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section style={pageStyle}>
      {/* Background dots */}
      <div style={dotsStyle}></div>

      <h2 style={titleStyle}>Contact Me</h2>

      <div style={contentStyle}>
        {/* Social Icons */}
        <div style={socialStyle}>
          <a
            href="https://github.com/hamidmbairik"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/l3zwadev/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/hamidmbairik/"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} style={formStyle}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            style={textareaStyle}
          />
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
          {messageSent && <p style={sentStyle}>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

// Styles
const pageStyle = {
  minHeight: "100vh",
  padding: "4rem 2rem",
  backgroundColor: "#080807",
  color: "#E6E6E6",
  fontFamily: "'Poppins', sans-serif",
  position: "relative",
  overflow: "hidden",
  cursor: "none"
};

// Background dots (like Services page)
const dotsStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)",
  backgroundSize: "35px 35px",
  pointerEvents: "none"
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "3rem",
  marginTop: "2rem",
  background: "linear-gradient(90deg, #FF8660, #9A33FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "3rem",
  flexWrap: "wrap",
  position: "relative",
  zIndex: 1,
  marginTop: "1" // moves form lower
};

const socialStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  fontSize: "1.8rem",
  color: "#B0B0B0"
};

const iconStyle = {
  transition: "all 0.3s ease",
  cursor: "none",
  color: "#B0B0B0"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "300px",
  maxWidth: "90%"
};

const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "50px",
  border: "none",
  outline: "none",
  backgroundColor: "#1a1a1a",
  color: "#E6E6E6"
};

const textareaStyle = {
  ...inputStyle,
  resize: "none"
};

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  borderRadius: "50px",
  border: "none",
  backgroundColor: "#FFFFFF",
  color: "#080807",
  fontWeight: "500",
  cursor: "none",
  transition: "all 0.3s ease",
  textAlign: "center"
};

const sentStyle = {
  marginTop: "0.5rem",
  color: "#61DAFB",
  fontWeight: "500",
  textAlign: "center"
};

export default Contact;
