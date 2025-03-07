import { motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

const Section1 = () => {
  const {Do} = useLoaderData();
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: -100 }}  // Start above the screen
      animate={{ opacity: 1, y: 0 }}    // End at normal position
      transition={{ duration: 1, ease: 'easeOut' }}  // Smooth easing
    >
      <div className="text-center py-2 font-bold mt-10 mb-5">
        <motion.h1
          className="text-brandYellow text-5xl mb-10"
          initial={{ opacity: 0, y: -30 }}  // Text starts above the screen
          animate={{ opacity: 1, y: 0 }}    // Text falls into place
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}  // Text animation
        >
          What We Do
        </motion.h1>
      </div>

      <motion.div
        className=" px-5 mt-20 grid md:grid-cols-1 lg:grid-cols-4 gap-4 gap-4 w-full"
        initial={{ opacity: 0, y: -50 }}  // Cards start above the screen
        animate={{ opacity: 1, y: 0 }}    // Cards fall into place
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}  // Cards animation with delay
      >
        {Do.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center bg-white justify-center hover:ease-in-out transition-transform w-full h-[200px] rounded-lg shadow-lg gap-2 py-2 px-2 border-t-brandYellow border-t-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}   // Individual cards start below
            animate={{ opacity: 1, y: 0 }}    // Cards fall into place
            transition={{ duration: 0.5 }}
          >
            <span>
              <img src={item.img} alt={item.name} className="w-5 text-white" />
            </span>
            <h2 className="text-black font-bold capitalize">{item.name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Section1;
