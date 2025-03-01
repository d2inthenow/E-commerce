import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import productRp from "../../assets/images/ProductItem/product_rp.jpg";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import React from "react";

const ProductItem = ({ image }) => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)] ">
      <div className="imgWrapper w-[100%]  overflow-hidden rounded-md relative group">
        <Link to="/1">
          <div className="img h-[390px] overflow-hidden">
            <img src={image} alt="Product" className="w-full h-auto" />
            <img
              src={productRp}
              alt=""
              className="w-full transition-all duration-400 absolute top-0 left-0 
            opacity-0 group-hover:opacity-100 group-hover:scale-100"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute !p-2 text-[15px] font-[500] rounded-full top-[10px] left-[10px] !z-50 bg-[#ff5252] text-white">
          17%
        </span>

        <div
          className="actions absolute top-[-200px]
         right-[-5px] !z-50 flex flex-col items-center
          gap-4 w-[70px] group-hover:top-[10px] transition-all duration-300 opacity-0  group-hover:opacity-100"
        >
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[white] !text-black hover:!bg-[#ff5252] hover:!text-white">
            <FaRegHeart className="text-[15px]" />
          </Button>

          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white">
            <FaCodeCompare className="text-[15px]" />
          </Button>

          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[white] !text-black hover:!bg-[#ff5252] hover:!text-white">
            <MdOutlineZoomOutMap className="text-[15px]" />
          </Button>
        </div>
      </div>

      <div className="info !py-5 !p-3  bg-[#f1f1f1]">
        <h6 className="text-[15px]">
          <Link to="/" className="link transition-all">
            Dong Duong
          </Link>
        </h6>
        <h3 className="text-[16px] title !mb-1 !mt-2 font-[500] text-[#000]">
          <Link to="/1" className="link transition-all">
            Panda jacket with jean pants and T-shirt
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center justify-between gap-4 ">
          <span className="oldPrice line-through text-gray-500 font-[500] text-[15px]">
            $2412
          </span>
          <span className="Price text-[#ff5252] text-[16px] font-bold">
            $2003
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
