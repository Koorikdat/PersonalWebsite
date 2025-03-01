import React from "react";
import Sorter from "../assets/Sorter.png"; 
import SnowBuddies from "../assets/SnowBuddies.png";
import RevCurse from "../assets/RevCurse.png";
import GA from "../assets/GA.png";
import LightGCN from "../assets/LightGCN.png";
import Platformer from "../assets/Platformer.png";
import Robowars from "../assets/RoboWars.png"; 

import FadeIn from "./FadeIn"; 


const Projects = () => { 
  const projects = [ // Add card information here for each project


    { name: "CAGCN",
      description: "Ran a study under Brock University Professor Renata to research Graph Neural Network Architecture, investigating LightGCN vs CAGCN. The goal is to determine areas where a lightweight model may be more effective than more bloated models in the area of Recommender Systems",
      image: LightGCN },

    { name: "Snowbuddies",
      description: "Completely designed and deployed an app using Flutter+Firebase to connect people with volunteers. The app allowed users to connect with volunteers using a map interface similar to Uber, users can schedule and manage requests from volunteers",
      image: SnowBuddies },

    { name: "Reversal Curse Study",
      description: "Ran a study under Brock University Professor Renata to study reversal curse: an inability to retain information when framed in reflexive relation. Results confirmed the phenomenon through testing LLama, OpenAI and other GPT models",
      image: RevCurse },



    { name: "Unity Platformer",
        description: "Created a 3D singleplayer turn-based platformer game, map is procedurally generated, C# scripts for enemy AI, and environmental interaction. Included custom made 3D and Audio assets",
        image: Platformer },


    { name: "RoboWars",
        description: " Multiplayer game with networking in NIO + Java.net, integrated GUI, Multi-thread operation, custom audio interface, active rendering animation, design patterns.",
        image: Robowars },

    { name: "Genetic Algorithm Decryption",
        description: "Implementation of a GA using k-tournament selection, crossover breeding, mutations, inheritance, reproduction. Produced and utilized a selection algorithm based on character-frequency",
        image: GA },
  ];

  return (
    <section id="projects" style={styles.container}>
      <h1 style={styles.heading}>Here are some of the Projects I have done!</h1>
      <h1 style={styles.heading2}>Scroll Through and Have a Look!</h1>
      
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
  heading2: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "30px",
    color: "#535bf2",

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
