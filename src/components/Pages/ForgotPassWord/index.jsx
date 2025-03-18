import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../../App";
import { useContext } from "react";
const ForgotPassWord = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const context = useContext(MyContext);
  const history = useNavigate();

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !py-5 !px-12">
          <h3 className="text-[18px] font-[600] text-black text-center">
            Forgot Password
          </h3>
          <form action="" className="w-full !mt-5">
            <div className="form-group w-full !mb-5 relative">
              <TextField
                className="w-full"
                type={isShowPassword === false ? "password" : "text"}
                id="new password"
                label="New password"
                variant="outlined"
                name="email"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px]
              !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEye className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                className="w-full"
                type={isShowPassword2 === false ? "password" : "text"}
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                name="password"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px]
              !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === true ? (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEye className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button className="btn-org w-full !py-2  !text-[20px] ">
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassWord;
