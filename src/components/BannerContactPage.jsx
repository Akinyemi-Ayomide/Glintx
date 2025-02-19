import { motion } from 'framer-motion';

import contactPage from '../assets/contactPage.png';

const BannerContactPage = () => {
  return (
    <div>
      <div>
        <motion.div
          className="w-full h-screen relative"
          style={{
            backgroundImage: `url(${contactPage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ y: 0 }} // Initial position of the image
          animate={{
            y: [0, -10, 0], // Moves the image up and down to create a bounce
          }}
          transition={{
            repeat: Infinity, // Keeps repeating the bounce animation
            repeatType: 'loop', // Ensures the bounce loops infinitely
            duration: 1, // Duration of one full bounce cycle
            ease: 'easeInOut', // Smooth ease-in-out for bounce
          }}
        >
          <div className="absolute bottom-0 px-4">
            <motion.p
              className="mb-10 bg-purple-900 rounded-lg p-2 shadow-lg text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Eduvate 1.0 - Your premier student portal for all schools. It is a
              personalized portal for your school where parents can make
              payments and view results online.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerContactPage;
