import React from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import BlackStatic from "../assets/BlackStatic.mp4";

// Online sources for logos
const skills = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", name: "Python" },
  { src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", name: "Java" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg", name: "C#" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", name: "React.js" },
  { src: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg", name: "SQL" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", name: "GitHub" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", name: "NumPy" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", name: "Docker" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", name: "AWS" },
];

// Floating animation for skills
const floatingVariants = {
  animate: (i) => ({
    y: [0, -10, 0], // Moves up and down
    transition: {
      duration: 2 + Math.random(), // Slightly different timing for each logo
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const Skills = ({ color = "none" }) => {
  // Define filter effect based on selected color
  let filterStyle;
  if (color === "black") filterStyle = "brightness(0)";
  else if (color === "white") filterStyle = "brightness(0) invert(1)";
  else if (color === "purple") filterStyle = "brightness(0) saturate(100%) hue-rotate(270deg)";
  else filterStyle = "none"; // Default (original colors)

  return (
    <section id="skills" style={styles.container}>
      {/* Video Background */}
      <div style={styles.videoContainer}>
        <video autoPlay loop muted playsInline style={styles.video}>
          <source src={BlackStatic} type="video/mp4" />
        </video>
      </div>

      <h4 style={styles.title}>These are some of my skills!</h4>

      <FadeIn>
        <div style={styles.overlay}>
          <div style={styles.row}>
            {skills.slice(0, 5).map((skill, index) => (
              <motion.div
                key={index}
                style={styles.skillIcon}
                variants={floatingVariants}
                animate="animate"
                custom={index}
              >
                <img src={skill.src} alt={skill.name} style={{ ...styles.image, filter: filterStyle }} />
              </motion.div>
            ))}
          </div>

          <div style={styles.row}>
            {skills.slice(5, 9).map((skill, index) => (
              <motion.div
                key={index}
                style={styles.skillIcon}
                variants={floatingVariants}
                animate="animate"
                custom={index + 5}
              >
                <img src={skill.src} alt={skill.name} style={{ ...styles.image, filter: filterStyle }} />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "55vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  videoContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#fff",
    position: "relative",
    zIndex: "2",
  },
  overlay: {
    width: "100%",
    height: "50vh",
    backgroundColor: "rgba(106, 62, 130, 0.7)", 
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "2",
    borderRadius: "15px",
    padding: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginBottom: "20px",
  },
  skillIcon: {
    transition: "transform 0.3s ease",
  },
  image: {
    width: "13vh", // Adjusted size
    height: "13vh",
    objectFit: "contain",
  },
};

export default Skills;
