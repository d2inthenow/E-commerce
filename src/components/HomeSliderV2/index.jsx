import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";
import product from "../../assets/images/HomeBannerV2/product.jpg";
import product1 from "../../assets/images/HomeBannerV2/product1.jpg";
import product2 from "../../assets/images/HomeBannerV2/product2.jpg";
const HomeSliderV2 = () => {
  const images = [product, product1, product2];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item  rounded-md overflow-hidden relative">
            <img src={product} alt="image" className="w-full object-cover" />
            <div
              className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 
          flex flex-col items-center justify-center transition-all duration-500"
            >
              <h4 className="text-[20px] font-[500] w-full text-left !mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[33px] font-[700] w-full">
                Women Solid Round T-shirt
              </h2>
              <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left !mt-3 !mb-3">
                Starting At Only
                <span className="text-[45px] text-[#ff5252] font-bold">
                  $29.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="!bg-[#ff5252] !text-white rounded-md font-[500] text-[15px]">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src={product1} alt="image" className="w-full object-cover" />
            <div
              className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 
          flex flex-col items-center justify-center transition-all duration-500"
            >
              <h4 className="text-[20px] font-[500] w-full text-left !mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[33px] font-[700] w-full">
                Buy one get a mystery gift box
              </h2>
              <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left !mt-3 !mb-3">
                Starting At Only
                <span className="text-[45px] text-[#ff5252] font-bold">
                  $999.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="!bg-[#ff5252] !text-white rounded-md font-[500] text-[15px]">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src={product2} alt="image" className="w-full object-cover" />
            <div
              className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 
          flex flex-col items-center justify-center transition-all duration-500"
            >
              <h4 className="text-[20px] font-[500] w-full text-left !mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[33px] font-[700] w-full">
                Buy 1 Get 1 Free
              </h2>
              <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left !mt-3 !mb-3">
                Starting At Only
                <span className="text-[45px] text-[#ff5252] font-bold">
                  $99.00
                </span>
              </h3>
              <div className="w-full">
                <Button className="!bg-[#ff5252] !text-white rounded-md font-[500] text-[15px]">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSliderV2;
