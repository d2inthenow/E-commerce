import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../ProductItem/index.jsx";

// import product1 from "../../assets/images/ProductItem/product1.jpg";
// import product2 from "../../assets/images/ProductItem/product2.jpg";
// import product3 from "../../assets/images/ProductItem/product3.jpg";

const ProductsSlider = (props) => {
  // const productImages = [product, product1, product2, product3];

  return (
    <div className="productsSlider !py-3">
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
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
