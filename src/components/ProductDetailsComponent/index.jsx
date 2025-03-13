import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Button from "@mui/material/Button";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[24px] font-[600] !mb-2">Dong Duong</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-[13px]">
          Brands : {""}
          <span className="font-[500px] text-black opacity-75">Thái Dương</span>
        </span>
        <Rating name="size-small" defaultValue={5} size="small" readOnly />
        <span className="text-[13px] cursor-pointer">Review (2412)</span>
      </div>
      <div className="flex items-center gap-4 !mt-4">
        <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
          $2412
        </span>
        <span className="price text-[#ff5252] text-[18px] font-bold">
          $2003
        </span>
        <span className="text-[14px]">
          Available In Stock:
          <span className="text-[14px] text-blue-700 font-bold">16 items</span>
        </span>
      </div>
      <p className="!mt-3 !pr-10 !mb-5">
        Khám phá một bí mật giữ màu lâu dài từ Thái Dương. Những chiếc áo, quần,
        hay bất kỳ sản phẩm nào đều giữ màu sắc tuyệt vời ngay cả sau nhiều lần
        giặt. Điều này không chỉ giúp tiết kiệm thời gian mà còn giữ cho bộ sưu
        tập thời trang luôn mới mẻ và sống động.
      </p>

      <div className="flex items-center gap-3">
        <span className="text-[16px] font-[500]">Size :</span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              productActionIndex === 0 ? "!text-white  !bg-[#ff5252]" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!text-white  !bg-[#ff5252]" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!text-white  !bg-[#ff5252]" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!text-white  !bg-[#ff5252]" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
          <Button
            className={`${
              productActionIndex === 4 ? "!text-white  !bg-[#ff5252]" : ""
            }`}
            onClick={() => setProductActionIndex(4)}
          >
            XXL
          </Button>
        </div>
      </div>

      <p className="text-[14px] !mt-4 !mb-2 text-[black]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>
      <div className="flex items-center gap-4 !py-4">
        <div className="qtyBoxWrapper w-[70px]">
          <QuantityBox />
        </div>

        <Button className="btn-org flex gap-2">
          <MdOutlineShoppingCart className="text-[22px]" />
          Add to cart
        </Button>
      </div>

      <div className="flex items-center gap-4 !mt-4">
        <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
          <FaRegHeart className="text-[18px]" />
          Add to WishList
        </span>
        <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
          <FaCodeCompare className="text-[18px]" />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
