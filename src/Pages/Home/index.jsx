import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import ProductsSlider from "../../components/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogItem from "../../components/BlogItem";

import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import banner from "../../assets/images/AdsBanner/adsV2.jpg";
import banner1 from "../../assets/images/AdsBanner/ads1V2.jpg";

const Home = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <section className="!py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%] min-h-[500px]">
            <HomeSliderV2 />
          </div>
          <div className="part2 w-[30%] flex flex-col items-center justify-between gap-5">
            <BannerBoxV2 info="left" image={banner} />
            <BannerBoxV2 info="right" image={banner1} />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white !py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-bold">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March
              </p>
            </div>
            <div className="rightSec w-[40%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="!py-7 !pt-2 bg-white">
        <div className="container ">
          <div className="freeShipping w-[80%] !m-auto !mb-7 !p-4 !py-3 border-3 border-[#ff5252] rounded-md flex items-center justify-between">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px] " />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2 ">
              <p className="!mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[30px]">- Only $200</p>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="!py-5 !pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-bold">Lastest Products</h2>
          <ProductsSlider items={5} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="!py-5 !pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-bold">Featured Products</h2>
          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="blogSection !py-5 !pb-8 !pt-0 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-bold !mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="blogSlider"
            modules={[Navigation]}
            navigation={true}
            loop={true}
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
