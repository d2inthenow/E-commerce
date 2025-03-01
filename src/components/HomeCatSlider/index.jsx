import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import catSlider from "../../assets/images/CatSlider/catSlider.png";
import catSlider1 from "../../assets/images/CatSlider/catSlider1.png";
import catSlider2 from "../../assets/images/CatSlider/catSlider2.png";
import catSlider3 from "../../assets/images/CatSlider/catSlider3.png";
import catSlider4 from "../../assets/images/CatSlider/catSlider4.png";
import catSlider5 from "../../assets/images/CatSlider/catSlider5.png";
import catSlider6 from "../../assets/images/CatSlider/catSlider6.png";
import catSlider7 from "../../assets/images/CatSlider/catSlider7.png";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider !py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          className="mySwiper"
          modules={[Navigation]}
          // navigation={true}
        >
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img
                  src={catSlider}
                  alt="CatSlider"
                  className="w-[70px] !transition-all"
                />
                <h3 className="text-[16px] font-[500px] !mt-3"> Fashion </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider1} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3">
                  {" "}
                  Electronics{" "}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider2} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3"> Bags </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider3} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3"> Footwear </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider4} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3"> Groceries </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider5} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3"> Beauty </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider6} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3"> Wellness </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="">
              <div className="item !py-7 !px-3 bg-white rounded-sm flex flex-col items-center justify-center">
                <img src={catSlider7} alt="CatSlider" className="w-[70px]" />
                <h3 className="text-[16px] font-[500px] !mt-3"> Jewellery </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
