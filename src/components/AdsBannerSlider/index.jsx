import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const AdsBannerSlider = (props) => {
  return (
    <div className="!py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        className="mySwiper"
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <div className="box">{/* <img src="" alt="" /> */}</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
