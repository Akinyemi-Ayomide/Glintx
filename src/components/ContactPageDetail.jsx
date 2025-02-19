import { FaPhoneAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const ContactPageDetail = () => {
  return (
    <div>
      {/* Email Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="rounded-r-lg p-3 gap-2 mb-4"
      >
        <a
          href="mailto:info@glintxworthintl.com"
          className="flex flex-row items-center hover:text-purple-700"
        >
          <span className="mr-3 text-lg">
            <MdAlternateEmail />
          </span>
          info@glintxworthintl.com
        </a>
      </motion.div>

      {/* Phone Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.2, // Adds slight delay between the email and phone animations
        }}
        className="rounded-r-lg p-3"
      >
        <a
          href="tel:+2347061765674"
          className="flex flex-row items-center hover:text-purple-700"
        >
          <span className="mr-3 text-lg">
            <FaPhoneAlt />
          </span>
          +234 706 176 5674
        </a>
      </motion.div>
    </div>
  );
};

export default ContactPageDetail;
