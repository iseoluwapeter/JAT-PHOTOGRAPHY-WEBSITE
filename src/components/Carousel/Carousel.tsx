import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
  captions?: string[]; // Optional captions for each image
}

const Carousel: React.FC<CarouselProps> = ({ images, captions = [] }) => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-[500px] md:h-[550px] lg:h-[650px] object-cover"
            />

            {/* Overlay with Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 ">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={index} // Ensures animation runs on each new slide
                className="text_2 text-white text-4xl md:text-7xl font-bold text-center drop-shadow-lg max-w-lg lg:max-w-3xl "
              >
                {captions[index] || "Beautiful Moments"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                key={`caption-${index}`}
                className="text-white text-lg md:text-2xl mt-2 text-center drop-shadow-md"
              >
                Experience elegance and royalty.
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
