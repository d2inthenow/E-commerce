import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 overflow-hidden rounded-md w-full group relative">
      <img
        src={props.image}
        alt="image"
        className="w-full transition-all duration-150 group-hover:scale-105"
      />
      <div
        className={`info absolute !p-5 top-0 ${
          props.info === "left" ? "left-0" : "right-0"
        }
     w-[70%] h-[100%] z-50 flex flex-col items-center justify-center gap-2 ${
       props.info === "left" ? "" : "!pl-18"
     }`}
      >
        <h2 className=" text-[24px] font-[500]">Samsung Gear VR Camera</h2>

        <span className="text-[25px] text-[#ff5252] font-bold w-full">
          $129.00
        </span>
        <div className=" w-full">
          <Link className=" text-[18px] font-[600] link underline" to="/">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
