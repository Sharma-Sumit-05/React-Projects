import React from 'react';
import { motion } from 'framer-motion';

const RainEffect = () => {
 
  const raindrops = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {raindrops.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -150, opacity: 0 }}
          animate={{ 
            y: "110vh", 
            opacity: [0, 0.5, 0.5, 0] 
          }}
          transition={{
            duration: 1 + Math.random() * 1.5, 
            repeat: Infinity,
            delay: Math.random() * 5,   
            ease: "linear",
          }}
          className="absolute w-0.5 h-24 bg-blue-500"
          style={{ 
            left: `${Math.random() * 100}%`, 
            filter: "blur(0.5px)" 
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;