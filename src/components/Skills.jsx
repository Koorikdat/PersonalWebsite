import { FaPython, FaReact, FaJava, FaAngular, FaDatabase, FaGithub } from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";
import React from "react";
import FadeIn from "./FadeIn";
import BlackStatic from "../assets/BlackStatic.mp4"; 

const Skills = () => {
  return (
    <section id="skills" style={styles.container}>

      {/*  Video Background  */}
      <div style={styles.videoContainer}>
        <video autoPlay loop muted playsInline style={styles.video}>
          <source src={BlackStatic} type="video/mp4" />
        </video>
      </div>

      <h4 style={styles.title}>These are some of my skills!</h4>
      <FadeIn>
        <div style={styles.overlay}>
          <div style={styles.skillsGrid}>
            <SkillCard icon={<FaPython />} name="Python" />
            <SkillCard icon={<FaReact />} name="React.js" />
            <SkillCard icon={<FaJava />} name="Java" />
            <SkillCard icon={<FaAngular />} name="Angular" />
            <SkillCard icon={<SiDjango />} name="Django" />
            <SkillCard icon={<SiMysql />} name="SQL" />
            <SkillCard icon={<FaDatabase />} name="Database" />
            <SkillCard icon={<FaGithub />} name="GitHub" />
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

const SkillCard = ({ icon, name }) => {
  return (
    <div style={styles.skillCard}>
      <div style={styles.skillIcon}>{icon}</div>
      <span style={styles.skillName}>{name}</span>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  videoContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0", 
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover", 
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#fff",
    position: "relative",
    zIndex: "2",
  },
  overlay: {
    width: "75vw",
    height: "70vh",
    backgroundColor: "rgba(34, 19, 35, 0.5)",
    backdropFilter: "blur(15px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    flexDirection: "column",
    position: "relative",
    zIndex: "2",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "900px",
  },
  skillCard: {
    width: "140px",
    height: "140px",
    backgroundColor: "#222",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  skillIcon: {
    fontSize: "4rem",
    color: "white",
  },
  skillName: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
  },
};

export default Skills;
