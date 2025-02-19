import React from 'react';
import { motion } from 'framer-motion';
import glintxwebsite1 from '../assets/glintxwebsite1.jpg';

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-5">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -100 }} // Slide in from the left
          animate={{ opacity: 1, x: 0 }} // Set to normal position
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="item-center">
            <motion.h1
              className="font-bold text-center mb-5 text-5xl text-[#ffc30a]"
              initial={{ opacity: 0, y: -20 }} // Start above
              animate={{ opacity: 1, y: 0 }} // Fall into place
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              EDUVATE 1.0
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Start below
              animate={{ opacity: 1, y: 0 }} // Slide to normal position
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              The world of education is rapidly evolving, and schools must embrace digital transformation to remain competitive. Eduvate 1.0 is an advanced student management portal designed to help schools operate at global standards by streamlining administrative tasks, enhancing communication, and improving accessibility. With this innovative solution, your institution can provide a seamless experience for students, parents, and staff, ensuring efficiency and professionalism in all operations.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start small and faded
          animate={{ opacity: 1, scale: 1 }} // Scale to normal size
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          <img src={glintxwebsite1} alt="" className="rounded-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section2;
