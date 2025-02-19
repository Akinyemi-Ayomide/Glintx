import { useState } from 'react';
import { motion } from 'framer-motion';

const FormContactPage = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // For now, you can log the data to the console
    console.log({ firstName, lastName, email, info });
  };

  return (
    <div>
      <div className="w-full h-screen px-4">
        <div className="text-left mt-20 mb-10 font-bold text-3xl">
          <h1>Chat with our team</h1>
        </div>
        <p className="mb-8">
          Need help with something? Want a demo? Get in touch with our friendly
          team and we will get in touch within 2 hours.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <motion.input
              type="text"
              placeholder="First name"
              onChange={(e) => setfirstName(e.target.value)}
              className="py-4 outline-none border-b-2 border-purple-900 rounded-lg text-black px-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <motion.input
              type="text"
              placeholder="Last name"
              onChange={(e) => setlastName(e.target.value)}
              className="py-4 outline-none border-b-2 border-purple-900 text-black rounded-lg px-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <motion.input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 outline-none border-b-2 border-purple-900 text-black rounded-lg px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <motion.textarea
              name=""
              id=""
              placeholder="Information"
              onChange={(e) => setInfo(e.target.value)}
              className="py-4 outline-none h-56 border-b-2 border-purple-900 text-black rounded-lg px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            ></motion.textarea>
          </div>
          <motion.button
            className="w-full py-4 px-2 bg-purple-900 rounded-lg shadow-lg text-white mt-2 hover:bg-purple-950"
            type="submit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            Get in touch
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default FormContactPage;
