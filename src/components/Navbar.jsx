import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const modelRef = useRef();
  const lastScrollY = useRef(0);
  const rotationSpeed = 0.1; // Adjust for faster/slower rotation
  const [rotation, setRotation] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY.current ? 1 : -1; // 1 = down, -1 = up

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

  return <primitive ref={modelRef} object={scene} scale={0.5} position={[0, 0, 1]} />;
};

const ThreeScene = () => {
  return (
    <Canvas style={styles.canvas} camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Model />
    </Canvas>
  );
};

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { name: "Home", id: "home", active: true },
    { name: "Skills", id: "skills", active: false },
    { name: "Projects", id: "projects", active: false },
    { name: "Contact", id: "contact", active: false },
  ]);

  const changeActiveNavItem = (index, sectionId) => {
    setNavItems((prevItems) =>
      prevItems.map((item, i) => ({ ...item, active: i === index }))
    );

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.navbar}>
      {/* Left Side: 3D Model */}
      <div style={styles.modelContainer}>
        <ThreeScene />
      </div>

      {/* Right Side: Navigation Menu */}
      <div style={styles.navContainer}>
        {navItems.map((item, i) => (
          <div
            key={i}
            style={{
              ...styles.navItem,
              ...(item.active ? styles.navItemActive : {}),
            }}
            onClick={() => changeActiveNavItem(i, item.id)}
          >
            <span style={styles.navItemText}>{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "#432245",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: "10px 30px",
    width: "100%",
    height: "9%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  modelContainer: {
    width: "80px",
    height: "50px",
    display: "flex",
    alignItems: "center",
  },
  canvas: {
    width: "100px",
    height: "100px",
  },
  navContainer: {
    display: "flex",
    gap: "20px",
  },
  navItem: {
    color: "#bbb",
    padding: "10px 15px",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  navItemActive: {
    color: "#fff",
  },
  navItemText: {
    fontSize: "16px",
    transition: "opacity 0.25s",
  },
};

export default Navbar;
