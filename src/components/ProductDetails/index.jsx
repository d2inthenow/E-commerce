import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../ProductZoom";
import Rating from "@mui/material/Rating";
const ProductDetails = () => {
  return (
    <>
      <div className="!py-5 ">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropped Skinny Jeans
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white !py-5">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>
          <div className="productContainer w-[60%] ">
            <h1 className="text-[22px] font-[600] !mb-3">Dong Duong</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-[13px]">
                Brands : {""}
                <span className="font-[500px] text-black opacity-75">
                  Thái Dương{" "}
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={5}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (2412)</span>
            </div>
            <div className="flex items-center gap-4 !mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $2412
              </span>
              <span className="price text-[#ff5252] text-[18px] font-bold">
                $2003
              </span>
            </div>
            <br />
            <p>
              Khám phá một bí mật giữ màu lâu dài từ Thái Dương. Những chiếc áo,
              quần, hay bất kỳ sản phẩm nào đều giữ màu sắc tuyệt vời ngay cả
              sau nhiều lần giặt. Điều này không chỉ giúp tiết kiệm thời gian mà
              còn giữ cho bộ sưu tập thời trang luôn mới mẻ và sống động.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
