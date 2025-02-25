import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -1 }}
      initial={{ opacity: 1, x: 20 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ 
        opacity: 1,
        scale: 1.05, 
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
