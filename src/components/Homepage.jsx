import React from "react";
import FadeIn from "./FadeIn";
import staticTorontoBanner from "../assets/staticTorontoBanner.mp4";

const Homepage = () => {
  return (
    <section id="home" style={styles.container}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline style={styles.video}>
        <source src={staticTorontoBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <FadeIn>
        <div style={styles.overlay}>
          <h1>Welcome to My Portfolio</h1>
          <p>I am a software developer and computer science researcher!</p>
        </div>
      </FadeIn>
    </section>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", 
    overflow: "hidden", // Prevents scrolling issues
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1", // Moves it behind other content
  },
  overlay: {
    width: "30vw",
    height: "20vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: "20px",
    borderRadius: "10px",
    backdropFilter: "blur(5px)", 
    color: "white",
    textAlign: "center",
    zIndex: "2",
  },
};

export default Homepage;
