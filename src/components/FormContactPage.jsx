import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0lhtr8b', 'template_xmfzhzb', form.current, {
        publicKey: '1HKxCVF2ZvtMWhy8L',
      })
      .then(() => {
        console.log('SUCCESS! Your message has been sent.');
        toast.success('Message sent successfully!', { position: 'top-right' });

        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', info: '' });
        form.current.reset();
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        toast.error('Failed to send message. Try again.', {
          position: 'top-right',
        });
      });
  };

  return (
    <div className="w-full h-screen px-4">
      <div className="text-left mt-20 mb-10 font-bold text-3xl">
        <h1>Chat with our team</h1>
      </div>
      <p className="mb-8">
        Need help with something? Want a demo? Get in touch with our friendly
        team, and we will respond within 2 hours.
      </p>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <motion.input
            type="text"
            name="first_name"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="py-4 outline-none border-b-2 border-purple-900 rounded-lg text-black px-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            required
            aria-label="First name"
            
          />
          <motion.input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="py-4 outline-none border-b-2 border-purple-900 text-black rounded-lg px-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            required
            aria-label="Last name"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 mt-2">
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="py-4 outline-none border-b-2 border-purple-900 text-black rounded-lg px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            required
            aria-label="Email"
          />
          <motion.textarea
            name="message"
            placeholder="Information"
            value={formData.info}
            onChange={handleChange}
            className="py-4 outline-none h-56 border-b-2 border-purple-900 text-black rounded-lg px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            required
            aria-label="Additional information"
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
      <ToastContainer />
    </div>
  );
};

export default FormContactPage;
