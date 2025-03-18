import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../../App";
import { useContext } from "react";
const Login = () => {
  const context = useContext(MyContext);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const forgotPassword = () => {
    if (formFields.email === "") {
      history("/verify");
      context.openAlertBox("success", "OTP send to your email");
    }
  };
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !py-5 !px-12">
          <h3 className="text-[18px] font-[600] text-black text-center">
            Login to your account
          </h3>
          <form action="" className="w-full !mt-5">
            <div className="form-group w-full !mb-5">
              <TextField
                className="w-full"
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                name="email"
              />
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                className="w-full"
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="Password"
                variant="outlined"
                name="password"
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
            <a
              className="link cursor-pointer text-[14px] font-[600]"
              onClick={forgotPassword}
            >
              Forgot Password?
            </a>

            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button className="btn-org w-full !py-2  !text-[20px] ">
                LOGIN
              </Button>
            </div>

            <p className="text-center ">
              Not Registered? &nbsp;
              <Link
                className="link text-[14px] font-[600] text-[#ff5252]"
                to="/register"
              >
                Sign Up
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

export default Login;
