import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        {/* GitHub Link */}
        <a href="https://github.com/Koorikdat" target="_blank" rel="noopener noreferrer">
          <FaGithub style={styles.icon} />
        </a>

        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/maisam-anjum/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={styles.icon} />
        </a>
      </div>
      
      <p style={styles.connect}>Connect with me!</p>
      <p style={styles.copyright}>© 2025 My Portfolio</p>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100vw",
    height: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111", // Slightly darker background
    color: "white",
    position: "relative",
    bottom: "0",
  },
  icons: {
    display: "flex",
    gap: "20px",
    marginBottom: "5px",
  },
  icon: {
    fontSize: "2rem", // Adjust size of the icons
    color: "white",
    transition: "0.3s",
  },
  connect: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  copyright: {
    fontSize: "0.9rem",
    opacity: "0.8",
  },
};

export default Footer;
