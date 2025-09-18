import React, { useEffect, useRef } from "react";

const Services = () => {
  // Expanded services data
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive, fast, and clean websites using React, HTML, CSS, and modern technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces for websites and apps.",
    },
    {
      title: "API Integration",
      description:
        "Connecting websites to APIs and databases to create dynamic and functional web applications.",
    },
    {
      title: "Performance Optimization",
      description: "Improving website speed, SEO, and overall performance for better user experience.",
    },
    {
      title: "Consulting",
      description: "Providing guidance on web technologies and project planning.",
    },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const points = [];
    const pointCount = 60;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize points
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
      });
    }

    const draw = (mouse) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((p) => {
        // Move points
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        // Draw line to mouse
        if (mouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });
    };

    const mouse = { x: null, y: null };

    const animate = () => {
      draw(mouse);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section style={pageStyle}>
      {/* Canvas for points */}
      <canvas ref={canvasRef} style={canvasStyle}></canvas>

      <h2 style={titleStyle}>My Services</h2>
      <div style={servicesGridStyle}>
        {services.map((service, index) => (
          <div key={index} className="service-card" style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>{service.title}</h3>
            <p style={serviceDescStyle}>{service.description}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 0 20px rgba(255, 134, 96, 0.6),
                        0 0 40px rgba(154, 51, 255, 0.4),
                        0 0 60px rgba(255, 134, 96, 0.2);
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
  position: "relative",
  overflow: "hidden",
};

const canvasStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  pointerEvents: "none",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginTop: "6rem",
  marginBottom: "3rem",
  background: "linear-gradient(90deg, #FF8660, #9A33FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  position: "relative",
  zIndex: 1,
};

const servicesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
};

const serviceCardStyle = {
  backgroundColor: "#1a1a1a",
  padding: "1.5rem",
  borderRadius: "15px",
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  cursor: "none"
};

const serviceTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
};

const serviceDescStyle = {
  fontSize: "1rem",
  color: "#B0B0B0",
  lineHeight: "1.5",
};

export default Services;
