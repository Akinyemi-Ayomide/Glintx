import { motion } from 'framer-motion';
import { Design } from '../assets/Design';

const Gallery = () => {
  return (
    <motion.div
      className="mt-20 mb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h1 className="font-bold text-center mb-5 text-5xl text-[#ffc30a]">
        Our Design
      </h1>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        {Design.slice(0, 8).map((item, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }} // Images start below
            animate={{ opacity: 1, y: 0 }} // Fade and slide up to position
            transition={{
              duration: 0.6,
              delay: index * 0.1, // Stagger the animations for a nice effect
              ease: 'easeOut',
            }}
          >
            <img
              src={item.img || 'no image'}
              alt="Design Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
