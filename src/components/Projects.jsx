import React from "react";
import Sorter from "../assets/Sorter.png"; 
import SnowBuddies from "../assets/SnowBuddies.png";
import RevCurse from "../assets/RevCurse.png";
import GA from "../assets/GA.png";
import LightGCN from "../assets/LightGCN.png";
import FadeIn from "./FadeIn"; 

const Projects = () => { 
  const projects = [ // Add card information here for each project
    { name: "Genetic Algorithm Decryption",
      description: "Implementation of a GA using k-tournament selection, crossover breeding, mutations.",
      image: GA },

    { name: "Snowbuddies",
      description: "Completely designed and deployed an app using Flutter+Firebase to connect people with volunteers.",
      image: SnowBuddies },

    { name: "Reversal Curse Study",
      description: "Worked under Brock University to study reversal curse: an inability to retain information when framed in reflexive relation.",
      image: RevCurse },

    { name: "CAGCN",
      description: "Worked under Brock University to research Graph Neural Network Architecture, investigating LightGCN vs CAGCN.",
      image: LightGCN },
  ];

  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>Some of my Projects</h2>
      
      {/* Horizontal Scrolling Carousel */}
      <div style={styles.carouselContainer}>
        <div style={styles.carousel}>
          {projects.map((project, index) => (
            <FadeIn key={index}> 
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
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
    overflow: "hidden",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "30px",
  },
  carouselContainer: {
    width: "100vw",
    overflowX: "auto",
    display: "flex",
    justifyContent: "center",
    padding: "20px 50px", 
  },
  carousel: {
    display: "flex",
    gap: "30px",
    padding: "20px",
    width: "max-content", 
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    scrollbarWidth: "none", 
    overflowX: "auto", 
  },
  projectCard: {
    flex: "0 0 auto",
    width: "60vh", 
    height: "45vh",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    scrollSnapAlign: "center", 
  },
  projectImage: {
    width: "90%",
    height: "60%",
    borderRadius: "8px",
    objectFit: "cover",
  },
  textContainer: {
    padding: "15px",
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
    maxWidth: "85%",
  },
};

export default Projects;
