import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { ProductContext } from '../context/ProductContext';

const OurProduct = () => {
  const { products } = useContext(ProductContext);
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div className="py-10 mt-20 mb-20">
      <div className="text-green-700 text-center mb-6">
        <h1 className="text-2xl font-bold text-brandYellow">Our Products</h1>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-4xl mx-auto"
      >
        {products.map((card) => (
          <SwiperSlide key={card?.id || Math.random()}>
            <div className="  shadow-lg rounded-xl  text-center transition-transform duration-300 hover:scale-105">
              <Link to={`/product/${card?.id}`}>
                <img
                  src={card?.img[0] }
                  alt={card?.name || 'Product'}
                  className="w-full rounded-md mb-3"
                />
                <h3 className="text-lg text-brandYellow font-bold">
                  {card?.name || 'Unnamed Product'}
                </h3>
                <p className="text-gray-600">
                  {card?.detail || 'No details available.'}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurProduct;
