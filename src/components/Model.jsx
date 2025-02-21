import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const modelPaths = [
  "/PersonalWebsite/models/model1.glb",
  "/PersonalWebsite/models/model2.glb",
  "/PersonalWebsite/models/model3.glb",
  "/PersonalWebsite/models/model4.glb",
];

const modelScales = [0.35, 2.7, .04, 4]; 
const modelPositions = [
  [-1, 0, 1],    
  [0, -1, 1], 
  [0.5, -1, 1],
  [0, -.75, 1],  
];

const Model = ({ modelIndex }) => {
  const modelRef = useRef();
  const lastScrollY = useRef(0);
  const rotationSpeed = 0.1;
  const [rotation, setRotation] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY.current ? 1 : -1;
      setRotation((prev) => prev + scrollDirection * rotationSpeed);
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotation;
    }
  });

  // ✅ Load model dynamically
  const { scene } = useGLTF(modelPaths[modelIndex]);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={modelScales[modelIndex]} // Apply scale dynamically
      position={modelPositions[modelIndex]} // Apply position dynamically
    />
  );
};

const ThreeScene = () => {
  const [modelIndex, setModelIndex] = useState(0);

  const handleClick = () => {
    setModelIndex((prevIndex) => {
      if (prevIndex >= modelPaths.length - 1) {
        setRotation(0); // Reset rotation
        return 0; // Reset index to 0 (first model)
      }
      return prevIndex + 1;
    });
  };
  

  return (
    <Canvas style={styles.canvas} camera={{ position: [0, 0, 3] }} onClick={handleClick}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelIndex={modelIndex} />
      </Suspense>
    </Canvas>
  );
};

const styles = {
  canvas: {
    width: "200px",
    height: "140px",
    cursor: "pointer",
  },
};

export default ThreeScene;
