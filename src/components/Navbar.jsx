import React, { useState } from "react";
import ThreeScene from "./Model"; // Import 3D model component

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { name: "Home", id: "home", active: true },
    { name: "Skills", id: "skills", active: false },
    { name: "Projects", id: "projects", active: false },
    // { name: "Contact", id: "contact", active: false },
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
    width: "100vw",
    height: "10%",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  modelContainer: {
    width: "200px",
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
  navContainer: {
    display: "flex",
    // gap: "20px",
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