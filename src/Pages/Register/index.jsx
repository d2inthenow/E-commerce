import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const context = useContext(MyContext);
  const history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter your username");
      setIsLoading(false);
      return false;
    }

    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter your email");
      setIsLoading(false);
      return false;
    }
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter your password");
      setIsLoading(false);
      return false;
    }

    postData("/api/user/register", formFields).then((res) => {
      if (res?.error === true) {
        context.openAlertBox("error", res?.message);
      } else {
        context.openAlertBox("success", res?.message);
        localStorage.setItem("userEmail", formFields.email);
        setFormFields({
          name: "",
          email: "",
          password: "",
        });

        history("/verify");
      }
      setIsLoading(false);
    });
  };
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !py-5 !px-12">
          <h3 className="text-[18px] font-[600] text-black text-center">
            Register with a new account
          </h3>
          <form className="w-full !mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full !mb-5">
              <TextField
                className="w-full"
                type="text"
                id="username"
                disabled={isLoading === true ? true : false}
                value={formFields.name}
                label="Username"
                variant="outlined"
                name="name"
                onChange={onChangeInput}
              />
            </div>

            <div className="form-group w-full !mb-5">
              <TextField
                className="w-full"
                type="email"
                disabled={isLoading === true ? true : false}
                value={formFields.email}
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                className="w-full"
                type={isShowPassword === false ? "password" : "text"}
                id="password"
                label="Password"
                disabled={isLoading === true ? true : false}
                value={formFields.password}
                variant="outlined"
                name="password"
                onChange={onChangeInput}
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

            <div className="flex items-center w-full !mt-3 !mb-3">
              <Button
                type="submit"
                disabled={isLoading === true ? true : false}
                className="btn-lg btn-org w-full flex gap-3"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Register"
                )}
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
