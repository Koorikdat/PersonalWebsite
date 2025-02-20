import { alignProperty } from "@mui/material/styles/cssUtils";
import FadeIn from "./FadeIn";



const Skills = () => {
  return (
    <section id="home" style={styles.container}>


    <FadeIn>
      <div style={styles.overlay}>
        <h1>Skills</h1>
      </div>
      </FadeIn>


      <FadeIn> <p> hello I am trying fade </p> </FadeIn>
      
    </section>
  );
};



const styles = {
  container: {
    width: "100vw",
    height: "50vh",
    textAlign: 'center', // <-- the magic
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    marginright: "auto",
  },

  overlay: {
    width: "30vw",
    height: "20vh",
    backgroundColor: "rgba(34, 19, 35, 0.5)", 
    backdropFilter: "blur(10px)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginright: "auto",
  },
  
};

export default Skills;
