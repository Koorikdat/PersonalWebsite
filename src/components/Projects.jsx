import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <p style={styles.text}>Some of my projects will be displayed here.</p>
    </section>
  );
};

const ProjectCard = ({ image, name , description}) => {
  return (
    <div style={styles.ProjectCard}>
       <span style={styles.ProjectName}>{name}</span>
      <div style={styles.ProjectImage}>{icon}</div>
      <p> {styles.ProjectDescription} </p>
     
    </div>
  );
};

const styles = {
  container: {
    width: "110vw",
    height: "100vh", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4", 
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#222", 
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.5rem",
    color: "#555",
    maxWidth: "600px",
  },
};

export default Projects;
