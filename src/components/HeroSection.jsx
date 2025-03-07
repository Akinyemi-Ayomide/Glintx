
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const {slides} = useLoaderData(); // ✅ Correct usage

  return (
    <div className="w-full min-h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        className="w-full min-h-screen pt-10"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex justify-center items-center min-h-screen px-4"
          >
            <div className=" px-5 mt-20 grid md:grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full items-center">
              {/* Left Content */}
              <div className="mt-28">
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
                  className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
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
