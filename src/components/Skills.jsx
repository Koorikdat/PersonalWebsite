import { BiCaretLeft } from "react-icons/bi";
import FadeIn from "./FadeIn";
import { FaPython, FaReact, FaJava, FaAngular, FaDatabase, FaGithub} from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="home" style={styles.container}>

      <FadeIn>
        <div style={styles.overlay1}>
          <h1>Skills</h1>
            <p1> ReactJS </p1>
            <p1> Python </p1>
            <p1> SQL </p1>
            <p1> C# </p1>
            <p1> C </p1>
            <p1> NodeJS </p1>
        </div>
      </FadeIn>


      <FadeIn>
        <div style={styles.overlay2}>


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
    width: "100%",
    height: "80vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start", 
    alignItems: "center",
    paddingLeft: "0", 
    borderradius: "500px",
    marginLeft: "3%", 
    position: "relative",

  },

  overlay1: {
    width: "15vw", 
    height: "70vh",
    backgroundColor: "rgba(34, 19, 35, 0.5)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    flexDirection: "column",
    
},

overlay2: {
  width: "75vw", 
  height: "70vh",
  backgroundColor: "rgba(34, 19, 35, 0.5)",
  backdropFilter: "blur(10px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  flexDirection: "column",
  
},

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
  },
  
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "30px",
    justifyContent: "center",
    maxWidth: "900px",
  },
  skillCard: {
    width: "120px",
    height: "120px",
    backgroundColor: "#222",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  skillIcon: {
    fontSize: "2.5rem",
    color: "white",
  },
  skillName: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};


export default Skills;
