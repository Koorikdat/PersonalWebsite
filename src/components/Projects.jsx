import React from "react";
import { FaGithub } from "react-icons/fa";
import Sorter from "../assets/Sorter.png";
import SnowBuddies from "../assets/SnowBuddies.png";
import RevCurse from "../assets/RevCurse.png";
import GA from "../assets/GA.png";
import LightGCN from "../assets/LightGCN.png";
import Platformer from "../assets/Platformer.png";
import Robowars from "../assets/RoboWars.png";

import FadeIn from "./FadeIn";

const projects = [
  {
    name: "CAGCN",
    description: "Ran a study under Brock University Professor Renata to research Graph Neural Network Architecture, investigating LightGCN vs CAGCN.",
    image: LightGCN,
    repo: "https://github.com/Koorikdat/FairGNN"
  },
  {
    name: "Snowbuddies",
    description: "Completely designed and deployed an app using Flutter+Firebase to connect people with volunteers.",
    image: SnowBuddies,
    repo: "https://github.com/Koorikdat/VolunteeringApp"
  },
  {
    name: "Reversal Curse Study",
    description: "Ran a study under Brock University Professor Renata to study reversal curse: an inability to retain information when framed in reflexive relation.",
    image: RevCurse,
    repo: "https://github.com/Koorikdat/reversal_curse"
  },
  {
    name: "Unity Platformer",
    description: "Created a 3D singleplayer turn-based platformer game with procedural map generation.",
    image: Platformer,
    repo: "https://github.com/Koorikdat/Brock-CS-Coursework/tree/main/COSC3P91%20-%20OOPs/Assignment4"
  },
  {
    name: "RoboWars",
    description: "Multiplayer game with networking in NIO + Java.net, integrated GUI, multi-thread operation, custom audio interface.",
    image: Robowars,
    repo: "https://github.com/Koorikdat/RoboWars"
  },
  {
    name: "Genetic Algorithm Decryption",
    description: "Implementation of a GA using k-tournament selection, crossover breeding, mutations, inheritance, reproduction.",
    image: GA,
    repo: "https://github.com/Koorikdat/Genetic-Algorithm-Decryption"
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.container}>
      <h1 style={styles.heading}>Here are some of the Projects I have done!</h1>
      <h1 style={styles.heading2}>Scroll Through and Have a Look!</h1>
      
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

const ProjectCard = ({ image, name, description, repo }) => {
  return (
    <div style={styles.projectCard}>
      <img src={image} alt={name} style={styles.projectImage} />
      <div style={styles.textContainer}>
        <h3 style={styles.projectTitle}>{name}</h3>
        <p style={styles.projectDescription}>{description}</p>
        <a href={repo} target="_blank" rel="noopener noreferrer" style={styles.githubLink}>
          <FaGithub style={styles.githubIcon} />
        </a>
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
  heading2: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#535bf2",
    marginBottom: "30px",
  },
  carouselContainer: {
    width: "100vw",
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
    width: "55vw",
    height: "55vh",
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
  '@media (max-width: 768px)': {
    projectCard: {
      width: "80vw",
      height: "35vh",
    }
  },
  projectImage: {
    width: "90%",
    height: "60%",
    borderRadius: "8px",
    objectFit: "cover",
  },
  textContainer: {
    padding: "15px",
    textAlign: "left",
    color: "#222",
  },
  githubLink: {
    marginTop: "10px",
    textDecoration: "none",
  },
  githubIcon: {
    fontSize: "1.8rem",
    color: "#333",
    transition: "color 0.3s ease",
  },
};

export default Projects;
