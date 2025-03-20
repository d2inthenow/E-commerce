import React from "react";
import image from "../../../assets/images/Customer/customer1.jpg";
import Button from "@mui/material/Button";
import { IoCloudUpload } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
const MyAccount = () => {
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md  rounded-md">
            <div className="w-full !p-5 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden !mb-4 relative group">
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt=""
                />

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
                <NavLink
                  to="/my-account"
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="flex w-full !py-2 !text-left  !px-5 !justify-start !capitalize !rounded-none items-center gap-2 !text-[rgba(0,0,0,0.8)]">
                    <FaUser className="text-[17px]" />
                    My Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/my-orders"
                  exact={true}
                  activeClassName="isActive"
                >
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
        </div>

        <div className="col2 w-[70%]">
          <div className="card bg-white !p-5 shadow-md rounded-md">
            <h2 className="!pb-3">
              My Profile <hr />
            </h2>
            <form className="!mt-4">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center !mt-5 ">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <br />

              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-org btn-lg btn-border w-[100px]">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
