import React from "react";
import ReactPlayer from "react-player";
import FadeIn from "./FadeIn";
import TextRotation from "./TextRotation";


import staticTorontoBanner from "../assets/staticTorontoBanner.mp4";

const Homepage = () => {
  return (
    <section id="home" style={styles.container}>
      <ReactPlayer
        url={staticTorontoBanner} 
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={styles.video}
        config={{ file: { attributes: { playsInline: true } } }} 
      />

      <FadeIn>
        <div style={styles.overlay} className="crt-effect">
          <h1>Hello, I'm Maisam!</h1>
          <h2>Welcome to My Portfolio!</h2>
          <p>I am a <TextRotation/></p> 
          
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
    backgroundColor: "black",
    overflow: "hidden", 

  },
  video: { // Not sure why but playing with z-index breaks the video
    position: "absolute",
    top: "0",
    left: "0",
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
    fontFamily: "'VT323', monospace",
    fontSize: "1.1rem",
    animation: "crt-glitch 0.2s infinite alternate",
    textShadow: "1px 1px 0 #ff0000, -1px -1px 0 #00ff00, -1px 1px 0 #0000ff",
  },
};

export default Homepage;
