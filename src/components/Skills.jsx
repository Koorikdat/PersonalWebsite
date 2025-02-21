import { BiCaretLeft } from "react-icons/bi";
import FadeIn from "./FadeIn";

const Skills = () => {
  return (
    <section id="home" style={styles.container}>
      {/* Overlay with animated fade-in */}
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



    </section>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "80vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start", // Align items to the left
    alignItems: "center",
    paddingLeft: "0", // Prevent position jump
    borderradius: "500px",
    marginLeft: "3%",  // Push it more to the right
    position: "relative", // Ensure it moves properly

  },

overlay1: {
    width: "15vw", // Increased width for better visibility
    height: "70vh",
    backgroundColor: "rgba(34, 19, 35, 0.5)",
    backdropFilter: "blur(10px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    flexDirection: "column",
    
}

};

export default Skills;
