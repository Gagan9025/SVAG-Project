import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ 
  children, 
  variant = "glass", 
  className = "", 
  onClick,
  ...props 
}) => {
  // Card variants
  const cardVariants = {
    glass: "card-glass",
    royal: "card-royal",
    "royal-gold": "card-royal-gold"
  };
  
  // Animation variants
  const cardAnimationVariants = {
    rest: { 
      y: 0,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      y: -10,
      boxShadow: variant === "glass" 
        ? "0 15px 30px rgba(255, 215, 0, 0.3)" 
        : variant === "royal" 
        ? "0 15px 30px rgba(37, 27, 90, 0.4)" 
        : "0 15px 30px rgba(255, 215, 0, 0.4)"
    }
  };
  
  return (
    <motion.div
      className={`${cardVariants[variant]} ${className}`}
      variants={cardAnimationVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;