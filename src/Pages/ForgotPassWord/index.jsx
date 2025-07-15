import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { postData } from "../../utils/api";
const ForgotPassWord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

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

    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please enter your password");
      setIsLoading(false);
      return false;
    }
    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Please enter your confirm password");
      setIsLoading(false);
      return false;
    }
    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox(
        "error",
        "Password and confirm password do not match"
      );
      setIsLoading(false);
      return false;
    }

    postData("/api/user/reset-password", formFields).then((res) => {
      if (res?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        context.openAlertBox("success", res?.message);
        history("/login");
      } else {
        context.openAlertBox("error", res?.message);
      }
      setIsLoading(false);
    });
  };

  const valideValues = Object.values(formFields).every((el) => el);

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] !m-auto rounded-md bg-white !py-5 !px-12">
          <h3 className="text-[18px] font-[600] text-black text-center">
            Forgot Password
          </h3>
          <form onSubmit={handleSubmit} className="w-full !mt-5">
            <div className="form-group w-full !mb-5 relative">
              <TextField
                className="w-full"
                type={isShowPassword === false ? "password" : "text"}
                id="new password"
                label="New password"
                variant="outlined"
                onChange={onChangeInput}
                value={formFields.newPassword}
                disabled={isLoading === true ? true : false}
                name="newPassword"
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
                name="confirmPassword"
                value={formFields.confirmPassword}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
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
              <Button
                type="submit"
                disabled={!valideValues}
                className="btn-org w-full !py-2  !text-[20px] "
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Change Password"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassWord;
