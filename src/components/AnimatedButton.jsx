import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  variant = "gold", 
  size = "md", 
  className = "", 
  onClick,
  disabled = false,
  icon,
  ...props 
}) => {
  // Button variants
  const buttonVariants = {
    gold: "btn-gold",
    royal: "btn-royal",
    "royal-gold": "btn-royal-gold"
  };
  
  // Size variants
  const sizeClasses = {
    sm: "px-4 py-2 text-sm touch:p-3 touch:text-base touch:min-h-10",
    md: "px-6 py-3 touch:p-4 touch:min-h-12",
    lg: "px-8 py-4 text-lg touch:p-5 touch:text-xl touch:min-h-14"
  };
  
  // Animation variants
  const buttonAnimationVariants = {
    rest: { 
      scale: 1,
      boxShadow: variant === "gold" 
        ? "0 4px 6px rgba(0, 0, 0, 0.1)" 
        : variant === "royal" 
        ? "0 4px 6px rgba(0, 0, 0, 0.1)" 
        : "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: variant === "gold" 
        ? "0 8px 15px rgba(255, 215, 0, 0.4)" 
        : variant === "royal" 
        ? "0 8px 15px rgba(37, 27, 90, 0.4)" 
        : "0 8px 20px rgba(255, 215, 0, 0.4)"
    },
    tap: { 
      scale: 0.95,
      boxShadow: variant === "gold" 
        ? "0 2px 4px rgba(255, 215, 0, 0.2)" 
        : variant === "royal" 
        ? "0 2px 4px rgba(37, 27, 90, 0.2)" 
        : "0 2px 4px rgba(255, 215, 0, 0.2)"
    }
  };
  
  return (
    <motion.button
      className={`${buttonVariants[variant]} ${sizeClasses[size]} ${className} relative overflow-hidden flex items-center justify-center touch:active-scale`}
      variants={buttonAnimationVariants}
      whileHover="hover"
      whileTap="tap"
      initial="rest"
      animate="rest"
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2 react-icon touch:text-lg">{icon}</span>}
      {children}
      {variant === "gold" && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
          whileHover={{ opacity: 0.2, x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
};

export default AnimatedButton;