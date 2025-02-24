import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Banner5 from "../../../src/assets/banner.jpg";
import Banner1 from "../../../src/assets/banner1.jpg";
import Banner2 from "../../../src/assets/banner2.jpg";
import Banner3 from "../../../src/assets/banner3.jpg";
import Banner4 from "../../../src/assets/banner4.jpg";
import Banner from "../../../src/assets/banner5.jpg";
import Banner6 from "../../../src/assets/banner6.jpg";

const HomeSlider = () => {
  const images = [Banner, Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <div className="homeSlider !py-4">
      <div className="container">
        <Swiper
          className="sliderHome"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="item rounded-[20px] overflow-hidden ">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
