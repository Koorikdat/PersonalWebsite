import React, { Component } from "react";
import { RotatingText } from "react-simple-rotating-text";

class Example extends Component {
  render() {
    return (

      <RotatingText
        texts={["Software Developer!", "Computer Scientist!", "Machine Learning Researcher"]}
        animation="slide"
        direction="vertical"
        colors={['red', 'blue']}

      />
    );
  }
}
const styles = {
    
    text: {
        textAlign: "center",
        fontSize: "40px",
    },
  };

export default Example;
