import React from "react";
import TorontoPinkImage from "../assets/TorontoPinkImage.png"; // Import background image

const Homepage = () => {
  return (
    <section id="home" style={styles.container}>
      <div style={styles.overlay}>
        <h1>Welcome to My Portfolio</h1>
        <p>I am a software developer and computer science researcher!</p>
      </div>
    </section>
  );
};

// Styles (kept as close to original as possible)
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${TorontoPinkImage})`, // Background Image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
    position: "relative", // Needed for overlay
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    padding: "20px",
    borderRadius: "10px",
    backdropFilter: "blur(5px)", // Optional: Adds slight blur effect
  },
};

export default Homepage;
