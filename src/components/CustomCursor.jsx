import React, { useEffect, useState } from "react";
import pickaxe from "../assets/pickaxe.png"; // Your pickaxe image

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "40px",      // adjust size
    height: "40px",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    transition: "transform 0.05s ease-out"
  };

  return <img src={pickaxe} alt="cursor" style={cursorStyle} />;
};

export default CustomCursor;
