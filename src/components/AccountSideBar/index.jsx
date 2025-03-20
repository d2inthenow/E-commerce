import React from "react";
import image from "../../assets/images/Customer/customer1.jpg";
import { IoCloudUpload } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
const AccountSideBar = () => {
  return (
    <div className="card bg-white shadow-md  rounded-md sticky top-[10px]">
      <div className="w-full !p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group">
          <img src={image} className="w-full h-full object-cover" alt="" />

          <div
            className="overlay absolute w-[100%] h-[100%] top-0 left-0 z-50
         bg-[rgba(0,0,0,0.7)] cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-all "
          >
            <IoCloudUpload className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <h3 className="text-[18px] font-[600]">Dong Duong dep trai</h3>

        <h6 className="text-[13px] font-[500]">duong0023@gmail.com</h6>
      </div>

      <ul className="list-none !pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="flex w-full !py-2 !text-left  !px-5 !justify-start !capitalize !rounded-none items-center gap-2 !text-[rgba(0,0,0,0.8)]">
              <FaUser className="text-[17px]" />
              My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="flex w-full !py-2 !text-left !px-5 !justify-start !capitalize !rounded-none items-center gap-2 !text-[rgba(0,0,0,0.8)]">
              <BsFillHandbagFill className="text-[17px]" />
              My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="flex w-full !py-2 !text-left !px-5 !justify-start !capitalize !rounded-none items-center gap-2 !text-[rgba(0,0,0,0.8)]">
              <IoIosHeart className="text-[17px]" />
              My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <Button className="flex w-full !py-2 !text-left !px-5 !justify-start !capitalize !rounded-none items-center gap-2 !text-[rgba(0,0,0,0.8)]">
            <IoLogOut className="text-[19px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
