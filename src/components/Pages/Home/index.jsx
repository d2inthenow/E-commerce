import React from "react";
import HomeSlider from "../../HomeSlider";
import HomeCatSlider from "../../HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../AdsBannerSlider";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="!py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full !p-4 !py-3 border-3 border-[#ff5252] rounded-md flex items-center justify-between">
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

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Home;
