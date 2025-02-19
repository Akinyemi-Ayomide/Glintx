import React from 'react';
import { motion } from 'framer-motion';
import glintxwebsite3 from '../assets/glintxwebsite3.jpg';

const Section3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="mt-4 mb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Start small and faded
          animate={{ opacity: 1, scale: 1 }} // Scale to normal size
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <img src={glintxwebsite3} alt="" className="rounded-lg" />
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 100 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Slide into place
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="item-center">
            <motion.h1
              className="font-bold text-center mb-5 text-5xl text-[#ffc30a]"
              initial={{ opacity: 0, y: -20 }} // Start from above
              animate={{ opacity: 1, y: 0 }} // Fall into place
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
              EDUVATE 1.0
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Start from below
              animate={{ opacity: 1, y: 0 }} // Slide up to position
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            >
              Beyond efficiency and security, Eduvate 1.0 enhances communication
              between all stakeholders in the education ecosystem. Instant
              messaging, notifications, and performance updates keep parents
              informed about their child’s progress, while teachers can
              collaborate more effectively with students and colleagues. A
              well-connected school fosters a thriving learning environment,
              aligning with global best practices in education management.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section3;
