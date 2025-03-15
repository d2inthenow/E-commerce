import React from "react";
import product from "../../assets/images/ProductItem/product.jpg";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "@mui/material/Button";
const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-srcoll overflow-x-hidden !px-4 !py-3">
        <div className="cartItem flex itemx-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4">
          <div className="img w-[25%] rounded-md overflow-hidden ">
            <Link to="/productDetails/1" className="block group ">
              <img
                src={product}
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] !pr-5 relative">
            <h4 className="text-[15px] font-[500] ">
              <Link to="/productDetails/1" className="link transition-all">
                Men Cotton Short Sleeve
              </Link>
            </h4>
            <p className="flex items-center gap-5 !mt-2 !mb-2">
              <span>
                Quantity : <span>2</span>
              </span>
              <span className="font-bold text-[#ff5252]">Price : $ 200</span>
            </p>
            <RiDeleteBin5Line className="absolute top-0 right-0 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem flex itemx-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !pt-3">
          <div className="img w-[25%] rounded-md overflow-hidden ">
            <Link to="/productDetails/1" className="block group ">
              <img
                src={product}
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] !pr-5 relative">
            <h4 className="text-[15px] font-[500] ">
              <Link to="/productDetails/1" className="link transition-all">
                Men Cotton Short Sleeve
              </Link>
            </h4>
            <p className="flex items-center gap-5 !mt-2 !mb-2">
              <span>
                Quantity : <span>2</span>
              </span>
              <span className="font-bold text-[#ff5252]">Price : $ 200</span>
            </p>
            <RiDeleteBin5Line className="absolute top-0 right-0 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem flex itemx-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !pt-3">
          <div className="img w-[25%] rounded-md overflow-hidden ">
            <Link to="/productDetails/1" className="block group ">
              <img
                src={product}
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] !pr-5 relative">
            <h4 className="text-[15px] font-[500] ">
              <Link to="/productDetails/1" className="link transition-all">
                Men Cotton Short Sleeve
              </Link>
            </h4>
            <p className="flex items-center gap-5 !mt-2 !mb-2">
              <span>
                Quantity : <span>2</span>
              </span>
              <span className="font-bold text-[#ff5252]">Price : $ 200</span>
            </p>
            <RiDeleteBin5Line className="absolute top-0 right-0 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem flex itemx-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !pt-3">
          <div className="img w-[25%] rounded-md overflow-hidden ">
            <Link to="/productDetails/1" className="block group ">
              <img
                src={product}
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] !pr-5 relative">
            <h4 className="text-[15px] font-[500] ">
              <Link to="/productDetails/1" className="link transition-all">
                Men Cotton Short Sleeve
              </Link>
            </h4>
            <p className="flex items-center gap-5 !mt-2 !mb-2">
              <span>
                Quantity : <span>2</span>
              </span>
              <span className="font-bold text-[#ff5252]">Price : $ 200</span>
            </p>
            <RiDeleteBin5Line className="absolute top-0 right-0 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem flex itemx-center w-full gap-4 border-b border-[rgba(0,0,0,0.1)] !pb-4 !pt-3">
          <div className="img w-[25%] rounded-md overflow-hidden ">
            <Link to="/productDetails/1" className="block group ">
              <img
                src={product}
                alt=""
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] !pr-5 relative">
            <h4 className="text-[15px] font-[500] ">
              <Link to="/productDetails/1" className="link transition-all">
                Men Cotton Short Sleeve
              </Link>
            </h4>
            <p className="flex items-center gap-5 !mt-2 !mb-2">
              <span>
                Quantity : <span>2</span>
              </span>
              <span className="font-bold text-[#ff5252]">Price : $ 200</span>
            </p>
            <RiDeleteBin5Line className="absolute top-0 right-0 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>

      <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden !pr-5">
        <div className="bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">1 item</span>
            <span className="text-[#ff5252] font-bold">$86.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-[#ff5252] font-bold">$8.00</span>
          </div>
        </div>

        <div className="bottomInfo !py-3 !px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (tax excel)</span>
            <span className="text-[#ff5252] font-bold">$94.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (tax incl)</span>
            <span className="text-[#ff5252] font-bold">$94.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Taxes:</span>
            <span className="text-[#ff5252] font-bold">$0.00</span>
          </div>

          <div className="flex items-center justify-between w-full gap-5">
            <Link to="/cart " className="w-[50%] d-block">
              <Button className=" btn-org w-full">View Cart</Button>
            </Link>
            <Link to="/checkout " className="w-[50%] d-block">
              <Button className=" btn-org w-full">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
