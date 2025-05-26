import React, { useState, useEffect } from "react";
import ThreeScene from "./Model"; // 3D Model component
import Maisam_Resume from "../assets/Maisam_Resume.pdf"; // PDF file
import ResumePreview from "../assets/Maisam_Resume.png"; // Resume preview image
import { IoClose, IoDownload } from "react-icons/io5"; // Minimalist icons

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Track user scroll position for overlay placement
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR - Floating, Centered, 3D Model with Backing Circle */}
      <nav style={styles.navbar}>
        {/* Left Side: Navigation Items in a Row */}
        <div style={styles.leftContainer}>
          {["Home","Skills", "Projects"].map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.navItem,
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
              }}
              onClick={() => scrollToSection(item.toLowerCase())} // Scrolls to section with matching ID
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Centered 3D Model with Backing Circle */}
        <div style={styles.modelWrapper}>
          <div style={styles.modelContainer}>
            <ThreeScene />
          </div>
        </div>

        {/* Right Side: Resume Button */}
        <div style={styles.rightContainer}>
          <button
            onClick={() => setShowResume(true)}
            style={styles.resumeButton}
          >
            Check Out My Resume
          </button>
        </div>
      </nav>

      {/* RESUME OVERLAY - Slides in & Fades in (UNCHANGED) */}
      {showResume && (
        <div
          style={{
            ...styles.resumeOverlay,
            transform: showResume ? "translateX(0)" : "translateX(-100%)",
            top: scrollY, // Keeps overlay at current scroll position
          }}
        >
          <div style={styles.resumeContent}>
            {/* Buttons (Top-Left) */}
            <div style={styles.buttonContainer}>
              <button onClick={() => setShowResume(false)} style={styles.iconButton}>
                <IoClose size={28} />
              </button>
              <a href={Maisam_Resume} download="Maisam_Resume.pdf" style={styles.iconButton}>
                <IoDownload size={28} />
              </a>
            </div>

            {/* Resume Image (Smaller and Fits 85% of the Container) */}
            <div
              style={{
                ...styles.resumeContainerLeft,
                opacity: showResume ? "1" : "0",
                transition: "opacity 0.2s ease-in-out",
              }}
            >
              <img src={ResumePreview} alt="Resume Preview" style={styles.resumeImage} />
            </div>

            {/* Description on Right */}
            <div style={styles.resumeText}>
              <h2>Maisam Anjum – Resume</h2>
              <p>
              Hey, I’m Maisam Anjum! I’m a software developer and AI researcher with a passion for building cool tech and solving complex problems!
              </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: "8%", // Floating in the center, 8% from the top
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60vw",
    maxWidth: "800px",
    height: "80px",
    background: "rgba(67, 34, 69, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "50px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
    zIndex: 3000, // Ensures it's always visible
    padding: "0 30px",
  },
  leftContainer: {
    display: "flex",
    gap: "30px", // Proper spacing between elements
    flex: "1",
    justifyContent: "flex-end",
    paddingRight: "50px",
  },
  modelWrapper: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    background: "rgba(67, 34, 69, 1)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "50px",
  },
  resumeButton: {
    backgroundColor: "#fff",
    color: "#432245",
    padding: "12px 20px",
    borderRadius: "25px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.3s ease",
    border: "none",
    outline: "none",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
  },
  navItem: {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
  },
  resumeOverlay: {
    position: "absolute", // Ensures it appears over current scroll position
    left: "0",
    width: "80vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.85)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4000, // Ensures it's on top
  },
  buttonContainer: {
    position: "absolute",
    top: "9%",
    left: "5%",
    display: "flex",
    gap: "25px",
  },
  iconButton: {
    background: "#6A0DAD",
    color: "white",
    border: "none",
    borderRadius: "50%",
    padding: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
  resumeContainerLeft: {
    flex: "1.2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resumeImage: {
    width: "auto", // Ensures the width adjusts proportionally
    height: "86%", // Fits 85% of its container
    borderRadius: "10px",
    maxHeight: "85vh", // Prevents overflow on smaller screens
  },
  resumeText: {
    flex: "1",
    color: "white",
    paddingLeft: "40px",
  },
};

export default Navbar;