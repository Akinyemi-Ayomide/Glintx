import React from 'react';
import { motion } from 'framer-motion';

const AboutSection2 = () => {
  return (
    <motion.div
      className="mt-10 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="grid md:grid-cols-2 gap-2 mt-10">
        <motion.div
          className="rounded-lg shadow-lg p-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-[#ffc30a]">Our Mission</h1>
          <h1 className="font-bold text-3xl md:text-6xl mt-5 mb-10"></h1>
          <p>
            Our mission is to empower businesses with cutting-edge technology
            solutions that drive efficiency, innovation, and sustainable growth.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg shadow-lg p-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-[#ffc30a]">Our Vision</h1>
          <h1 className="font-bold text-3xl md:text-6xl mt-5 mb-10"></h1>
          <p>
            Our vision is to be a global leader in innovative technology
            solutions, revolutionizing business operations and driving digital
            transformation that empowers organizations to achieve sustainable
            growth and global excellence.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection2;
