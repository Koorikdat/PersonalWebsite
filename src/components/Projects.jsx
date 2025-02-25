import React from "react";
import Sorter from "../assets/Sorter.png"; 
import SnowBuddies from "../assets/SnowBuddies.png";
import RevCurse from "../assets/RevCurse.png";

import FadeIn from "./FadeIn"; 

const Projects = () => {
  const projects = [
    { name: "Genetic Algorithm Decryption",
      description: "Implementation of a GA using k-tournament selection, crossover breeding, mutations ", 
      image: Sorter },

    { name: "Snowbuddies",
      description: "Completely designed and deployed an app using Flutter+Firebase to connect people with volunteers",
      image: SnowBuddies },

    { name: "Reversal Curse Study",
      description: "Worked under Brock University to study reversal curse: an inability to retain information when framed in reflexive relation",
      image: RevCurse },

    { name: "CAGCN",
      description: "Worked under Brock University to research Graph Neural Network Architecture, investigating LightGCN vs CAGCN",
      image: RevCurse },

    { name: "Volunteering App",
      description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
      image: Sorter },

    { name: "Research Works",
      description: "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
      image: Sorter },

  ];

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>Some of my Projects</h2>
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
    padding: "50px 20px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "50px",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gridTemplateRows: "repeat(2, auto)",
    gap: "40px",
    maxWidth: "1200px", 
    justifyContent: "center",
    alignItems: "center",
  },
  projectCard: {
    width: "500px", 
    maxHeight: "500px",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  projectImage: {
    width: "100%",
    height: "20%",
    borderRadius: "6px",
  },
  textContainer: {
    padding: "20px",
    textAlign: "center",
  },
  projectTitle: {
    fontSize: "1.75rem", 
    fontWeight: "bold",
    color: "#222",
    marginBottom: "10px",
  },
  projectDescription: {
    fontSize: "1.1rem", 
    color: "#555",
    maxWidth: "85%",
  },
};

export default Projects;
