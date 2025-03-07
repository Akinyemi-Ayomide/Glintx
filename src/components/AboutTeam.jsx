import { motion } from 'framer-motion';
import { Team } from '../assets/Team';

const AboutTeam = () => {
  return (
    <div className="mt-20 mb-20">
      <h1 className="text-[#ffc30a]">Meet The Team</h1>
      <h1 className="text-2xl md:text-6xl mt-5 mb-10">
        Meet Our Dedicated Team
      </h1>
      <div className="grid md:grid-cols-3 gap-5">
        {Team.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Stagger the animations for a smoother effect
              ease: 'easeOut',
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-purple-900 bg-opacity-60 text-white text-center py-3 rounded-lg">
              <p>{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
