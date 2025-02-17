import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Model = () => {
  const modelRef = useRef();
  const lastScrollY = useRef(0);
  const rotationSpeed = 0.07;
  const [rotation, setRotation] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY.current ? 1 : -1;
      setRotation((prev) => prev + scrollDirection * rotationSpeed);
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      setRotation((prev) => prev + 0.01);
    }, 50);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotation;
    }
  });

  const { scene } = useGLTF(import.meta.env.BASE_URL + "model.glb");

  return <primitive ref={modelRef} object={scene} scale={0.35} position={[-0.5, 0.1, 1]} />;
};

const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
};

export default ThreeScene;
