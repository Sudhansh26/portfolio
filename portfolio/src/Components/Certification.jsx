import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export const Certification = () => {
  const images = [
    "https://res.cloudinary.com/dtlessn0g/image/upload/v1758779236/WhatsApp_Image_2025-09-25_at_11.04.12_b7fadad1_efr1ux.jpg",
    "https://res.cloudinary.com/dtlessn0g/image/upload/v1758779235/WhatsApp_Image_2025-09-25_at_11.01.48_b21fc218_ddbxbc.jpg",
  ];

  return (
    <>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">Certification</h3>
      <div className="my-6 sm:my-10 px-4 sm:px-6 md:px-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16} // smaller gap on mobile
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
          }}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="px-1 sm:px-2">
                <div className="relative group overflow-hidden rounded-xl h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Certification ${index + 1}`}
                    className="max-h-full w-auto object-contain rounded-xl border-4 border-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-xl transition-transform duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
