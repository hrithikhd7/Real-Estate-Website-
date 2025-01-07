import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Swipper = () => {
  return (
    <div className="space-y-2">
      <div data-aos="fade-right">
        <h1 className="font font-extrabold text-xl md:text-4xl lg:text-5xl">
          E$TATES Presents<span className="text-primary">...</span>
        </h1>
      </div>
      <Swiper
        data-aos="zoom-in"
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/jkQ9LCx/penthouse1.jpg"
            alt="penthouse1"
            border="0"
            className="aspect-video object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="aspect-video object-cover"
            src="https://i.ibb.co/7pkKXFc/beachfront.jpg"
            alt="beachfront"
            border="0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="aspect-video object-cover"
            src="https://i.ibb.co/JC2nwYH/villa.jpg"
            alt="villa"
            border="0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="aspect-video object-cover"
            src="https://i.ibb.co/1K50RzD/resort.jpg"
            alt="resort"
            border="0"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-end gap-2" data-aos="fade-right">
        <h1 className="font font-extrabold text-xl md:text-4xl lg:text-5xl">
          Explore
        </h1>
        <BsFillArrowDownLeftSquareFill className="text-xl md:text-4xl lg:text-5xl text-primary" />
      </div>
    </div>
  );
};

export default Swipper;
