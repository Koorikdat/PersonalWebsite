import React from "react";

const Projects = () => {
  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <p style={styles.text}>Some of my projects will be displayed here.</p>
    </section>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4", // Light gray background
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#222", // Dark text
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.5rem",
    color: "#555", // Medium gray text
    maxWidth: "600px",
  },
};

export default Projects;
