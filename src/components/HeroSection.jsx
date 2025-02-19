import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';  // Import Framer Motion

// Your slide data
import glintxwebsitean1 from '../assets/glintxwebsitean1.png';
import glintxwebsitean2 from '../assets/glintxwebsitean2.png';
import glintxwebsitean3 from '../assets/glintxwebsitean3.png';

const slides = [
  {
    id: 1,
    image: glintxwebsitean1,
    text: 'EDUVATE 1.0',
    text2: 'ENJOY A BETTER EDUCATIONAL ENVIRONMENT AND SEAMLESS ACCESS TO EDUCATION INSTITUTIONS',
    text3: 'MAKE YOUR SCHOOL A GLOBAL INSTITUTION AT YOUR FINGER TIPS',
  },
  {
    id: 2,
    image: glintxwebsitean2,
    text: 'THE FUTURE IS NOW!!',
    text2: 'INVEST IN YOUR SCHOOL NOW, BECOME A BETTER AND MORE RECOGNIZABLE SCHOOL TODAY',
    text3: 'HERE IS A DIGITAL SOLUTION',
  },
  {
    id: 3,
    image: glintxwebsitean3,
    text: "DON'T MISS THIS OPPORTUNITY",
    text2: 'TAKE YOUR BUSINESS TO THE NEXT LEVEL',
    text3: 'ENHANCE CUSTOMER ENGAGEMENT',
  },
];

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard]}  // Added Keyboard Navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        keyboard={{
          enabled: true,  // Enable keyboard navigation
          onlyInViewport: false,
        }}
        className="w-full min-h-screen pt-10"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center min-h-screen px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-center">
              {/* Left Content */}
              <div className="mt-28">
                {/* Using Framer Motion for fade-in animation */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-3xl sm:text-5xl md:text-7xl font-bold text-center md:text-left"
                >
                  {slide.text}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-lg sm:text-2xl md:text-3xl text-brandYellow bg-purple-900 mt-5 mb-5 rounded-lg shadow-lg p-2"
                >
                  {slide.text2}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-lg sm:text-2xl md:text-3xl"
                >
                  {slide.text3}
                </motion.p>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105" // Hover scale effect
                  loading="lazy"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
