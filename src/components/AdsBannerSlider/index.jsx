import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BannerBox from "../BannerBox";
import ads from "../../assets/images/AdsBanner/adsBanner.jpg";
import ads1 from "../../assets/images/AdsBanner/adsBanner1.jpg";
import ads2 from "../../assets/images/AdsBanner/adsBanner2.jpg";
import ads3 from "../../assets/images/AdsBanner/adsBanner3.jpg";
import ads4 from "../../assets/images/AdsBanner/adsBanner4.jpg";
import ads5 from "../../assets/images/AdsBanner/adsBanner5.jpg";
import { Link } from "react-router-dom";
const AdsBannerSlider = (props) => {
  return (
    <div className="!py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        className="smlBtn"
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <Link>
            <BannerBox img={ads} link={"/"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <BannerBox img={ads1} link={"/"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <BannerBox img={ads2} link={"/"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <BannerBox img={ads3} link={"/"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <BannerBox img={ads4} link={"/"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <BannerBox img={ads5} link={"/"} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
