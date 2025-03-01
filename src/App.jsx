import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TextRotation from "./components/TextRotation";



const App = () => {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "#121212" }}>
      <Navbar />
      <TextRotation/>
      <Homepage />
      <Skills />
      <TextRotation/>
      <Projects />
      <TextRotation/>
      <Footer />
      
    </div>
  );
};

export default App;
