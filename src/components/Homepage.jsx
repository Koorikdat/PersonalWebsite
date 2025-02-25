import React from "react";
import ReactPlayer from "react-player";
import FadeIn from "./FadeIn";

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

      {/* Overlay Content */}
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
    overflow: "hidden", 
    backgroundColor: "black", 
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

  },
};

export default Homepage;
