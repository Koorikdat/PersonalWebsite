import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


const App = () => {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "#121212" }}>
      <Navbar />
      <Homepage />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
