import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../ProductItem/index.jsx";
const ProductsSlider = (props) => {
  return (
    <div className="productsSlider !py-5">
      <Swiper
        slidesPerView={props.items}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
