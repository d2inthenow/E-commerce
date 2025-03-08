import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";
const SideBar = (props) => {
  const [isOpenAvailabillityFilter, setOpenAvailabillityFilter] =
    useState(true);
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);
  const [value, setValue] = useState(3);
  return (
    <aside className="sidebar !py-5">
      <div className="box">
        <h3 className="!mb-3 text-[18px] font-[600] flex items-center">
          Product Categories
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !ml-auto !rounded-full !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll !px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Jewellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box !mt-3">
        <h3 className="!mb-3 text-[18px] font-[600] flex items-center">
          Availabillity
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !ml-auto !rounded-full !text-[#000]"
            onClick={() =>
              setOpenAvailabillityFilter(!isOpenAvailabillityFilter)
            }
          >
            {isOpenAvailabillityFilter === true ? (
              <FaAngleUp />
            ) : (
              <FaAngleDown />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailabillityFilter}>
          <div className="scroll !px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox />}
              label="Available (24)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="In Stock (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Not Available (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box !mt-3">
        <h3 className="!mb-3 text-[18px] font-[600] flex items-center">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !ml-auto !rounded-full !text-[#000]"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll !px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox />}
              label="Small (2)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Medium (3)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Big (4)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XL (5)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XXL (6)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box !mt-3">
        <h3 className="!mb-3 text-[18px] font-[600] flex items-center">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex !pt-4 !pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs: {10}</strong>
          </span>
          <span className="text-[13px] !ml-auto">
            From: <strong className="text-dark">Rs: {10000}</strong>
          </span>
        </div>
      </div>

      <div className="box !mt-3">
        <h3 className="!mb-3 text-[18px] font-[600] flex items-center">
          Filter By Rating
        </h3>
        <div className="w-full">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
