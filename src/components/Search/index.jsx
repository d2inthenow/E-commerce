import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Search product here....."
        className="w-full h-[45px] !px-4 focus:outline-none bg-inherit text-[15px]"
      />
      <Button
        variant="contained"
        className="!absolute top-[5px] right-[5px] z-50 !w-[45px] !h-[40px] !min-w-[40px] rounded-full !text-black !bg-[#e5e5e5] hover:!bg-[#d4d4d4] 
                  focus:!ring-4 focus:!ring-gray-300
                  !shadow-none !outline-none border-none"
      >
        <IoSearch className="text-[#2a2a2a] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
