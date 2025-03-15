import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !py-5 !px-12">
          <h3 className="text-[18px] font-[600] text-black text-center">
            Register with a new account
          </h3>
          <form action="" className="w-full !mt-5">
            <div className="form-group w-full !mb-5">
              <TextField
                className="w-full"
                type="username"
                id="username"
                label="Username"
                variant="outlined"
              />
            </div>
            <div className="form-group w-full !mb-5">
              <TextField
                className="w-full"
                type="number"
                id="phone"
                label="Phone Number"
                variant="outlined"
              />
            </div>
            <div className="form-group w-full !mb-5">
              <TextField
                className="w-full"
                type="email"
                id="email"
                label="Email"
                variant="outlined"
              />
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                className="w-full"
                type={isShowPassword === true ? "password" : "text"}
                id="password"
                label="Password"
                variant="outlined"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px]
                !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === true ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button className="btn-org w-full !py-2  !text-[20px] ">
                Register
              </Button>
            </div>

            <p className="text-center ">
              Already have an account? &nbsp;
              <Link
                className="link text-[14px] font-[600] text-[#ff5252]"
                to="/login"
              >
                Sign In
              </Link>
            </p>
            <p className="text-center font-[500]">
              Or continue with social account
            </p>

            <div className="flex items-center justify-between w-full !mt-3 ">
              <Button className="!bg-[#f1f1f1] !border-1 flex gap-2 !text-[12px] !text-black !py-4">
                <FcGoogle className="text-[20px]" />
                Login with Google
              </Button>
              <Button className="!bg-[#f1f1f1] !border-1 flex gap-2 !text-[12px] !text-black !py-4">
                <FaFacebook className="text-[20px]" />
                Login with Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
