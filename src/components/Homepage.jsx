import React from "react";
import TorontoPinkImage from "../assets/TorontoPinkImage.png"; 
import FadeIn from "./FadeIn";



const Homepage = () => {
  return (
    <section id="home" style={styles.container}>
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
    backgroundImage: `url(${TorontoPinkImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
    position: "relative", 
  },
  overlay: {
    width: "30vw",
    height: "20vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: "20px",
    borderRadius: "10px",
    backdropFilter: "blur(5px)", 
  },
};

export default Homepage;
