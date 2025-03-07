import { motion } from 'framer-motion';
import glintxwebsite5 from '../assets/glintxwebsite5.jpg';

const AboutSection1 = () => {
  return (
    <motion.div
      className="mt-10 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className=" px-5 mt-20 grid md:grid-cols-1 lg:grid-cols-2 gap-4 ">
        <motion.div
          className="p-5 md:relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-[#ffc30a] mb-10 mt-6">How it started</p>
          <h1 className="text-3xl mt-5 font-bold mb-10 md:text-6xl ">
            Our Dream Is Global Learning Transformation
          </h1>
          <p className="mb-2">
            Glintx Worth International is a multinational company committed to
            delivering cutting-edge technology solutions that empower businesses
            to thrive in a digital world. We specialize in providing seamless,
            innovative, and scalable solutions that help organizations optimize
            operations, enhance efficiency, and drive sustainable growth—all at
            their fingertips.
          </p>
          <p>
            With a strong global presence, we bridge the gap between businesses
            and technology, ensuring that enterprises of all sizes can leverage
            digital transformation to stay competitive. Our expertise spans
            across business automation, cloud solutions, IT consulting, data
            analytics, and digital strategy—enabling companies to operate
            smarter, faster, and more effectively.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src={glintxwebsite5}
            alt=""
            className="w-full rounded-3xl mt-2 p-2"
          />
          <div className=" px-5 mt-20 grid md:grid-cols-1 lg:grid-cols-2 gap-4text-[#ffc30a]">
            <motion.div
              className="p-10 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <span className="text-7xl">100+</span>
              <p>Clients</p>
            </motion.div>
            <motion.div
              className="p-10 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <span className="text-7xl">500+</span>
              <p>Jobs done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection1;
