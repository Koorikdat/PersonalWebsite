import React from "react";
import Sorter from "../assets/Sorter.png"; // Import image correctly
import FadeIn from "./FadeIn"; // Import FadeIn effect

const Projects = () => {
  const projects = [
    { name: "Genetic Algorithm", description: "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry.", image: Sorter },
    { name: "Algorithm Visualizer", description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.", image: Sorter },
    { name: "Personal Website", description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.", image: Sorter },
    { name: "Tiktok Bot", description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.", image: Sorter },
    { name: "Volunteering App", description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.", image: Sorter },
    { name: "Visualizing Algorithms", description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.", image: Sorter },
  ];

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <FadeIn key={index}> {/* Wrap each card in FadeIn */}
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ image, name, description }) => {
  return (
    <div style={styles.projectCard}>
      <img src={image} alt={name} style={styles.projectImage} />
      <div style={styles.textContainer}>
        <h3 style={styles.projectTitle}>{name}</h3>
        <p style={styles.projectDescription}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "40px 20px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "40px",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 🔥 3 columns layout
    gridTemplateRows: "repeat(2, auto)", // 🔥 2 rows layout
    gap: "100px",
    maxWidth: "1000px",
    
  },
  projectCard: {
    width: "100%",
    height: "200%",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  projectImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  textContainer: {
    padding: "20px",
    textAlign: "center",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "10px",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#555",
    maxWidth: "90%",
  },
};

export default Projects;
