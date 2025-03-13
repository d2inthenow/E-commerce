import React from "react";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
const QuantityBox = () => {
  const [qtyValue, setQtyValue] = useState(1);
  const plusQty = () => {
    setQtyValue(qtyValue + 1);
  };
  const minusQty = () => {
    if (qtyValue === 1) {
      setQtyValue(1);
    } else {
      setQtyValue(qtyValue - 1);
    }
  };
  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[40px] !p-2 !pl-5 text-[15px] 
      focus:outlint-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyValue}
      />
      <div
        className="flex flex-col items-center justify-between h-[40px]
       absolute top-0 right-0 z-50"
      >
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-black !rounded-none
          hover:!bg-[#f1f1f1]"
          onClick={plusQty}
        >
          <FaAngleUp className="text-[12px] opacity-55" />
        </Button>
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-black !rounded-none 
          hover:!bg-[#f1f1f1]"
          onClick={minusQty}
        >
          <FaAngleDown className="text-[12px] opacity-55" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityBox;
