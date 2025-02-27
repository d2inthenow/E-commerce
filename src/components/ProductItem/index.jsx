import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import product from "../../assets/images/ProductItem/product.jpg";
import product1 from "../../assets/images/ProductItem/product.jpg";
import product2 from "../../assets/images/ProductItem/product.jpg";
import product3 from "../../assets/images/ProductItem/product.jpg";
const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden ">
      <div className="imgWrapper w-[100%] h-[450px] overflow-hidden rounded-md">
        <img src={product} alt="" className="w-full" />
      </div>

      <div className="info !py-3">
        <h6 className="text-[14px]">
          <Link to="/" className="link">
            Dong Duong
          </Link>
        </h6>
        <h3 className="text-[15px] title !mt-2 font-[500] text-[rgba(0,0,0,0.8)]">
          Panda jacket with jean pants and T-shirt
        </h3>
      </div>
    </div>
  );
};

export default ProductItem;
