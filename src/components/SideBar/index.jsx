import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
const SideBar = (props) => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  return (
    <aside className="sidebar !py-5">
      <div className="box">
        <h3 className="!mb-3 text-[18px] font-[600] flex items-center">
          Product Categories
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            <FaAngleDown />
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll !px-3 relative -left-[10px]">
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
    </aside>
  );
};

export default SideBar;
