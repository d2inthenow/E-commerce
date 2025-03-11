import { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import image from "../../assets/images/ProductItem/product2.jpg";
import image1 from "../../assets/images/ProductItem/product3.jpg";
import image2 from "../../assets/images/ProductItem/product1.jpg";
import image3 from "../../assets/images/ProductItem/product.jpg";
import image4 from "../../assets/images/ProductItem/product_rp.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSmall.current.swiper.slideToLoop(index);
    zoomSliderBig.current.swiper.slideToLoop(index);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSmall}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
            modules={[Navigation]}
            navigation={true}
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                   ${slideIndex === 0 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(0)}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                  ${slideIndex === 1 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(1)}
              >
                <img
                  src={image1}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                  ${slideIndex === 2 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(2)}
              >
                <img
                  src={image2}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                  ${slideIndex === 3 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(3)}
              >
                <img
                  src={image3}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                  ${slideIndex === 4 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(4)}
              >
                <img
                  src={image4}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                ${slideIndex === 5 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(5)}
              >
                <img
                  src={image3}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group
                  ${slideIndex === 6 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(6)}
              >
                <img
                  src={image4}
                  alt=""
                  className="w-full h-[100px] transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            ref={zoomSliderBig}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image1} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image2} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image3} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image4} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image3} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom zoomType="hover" zoomScale={1} src={image4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
