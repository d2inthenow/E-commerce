import { IoCloudUpload } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../App";
import { uploadImage, fetchDataFromApi } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import user from "../../assets/images/Customer/user.png";

const AccountSideBar = () => {
  const context = useContext(MyContext);
  const history = useNavigate();
  const [previews, setPreviews] = useState([]);
  const [upLoading, setUpLoading] = useState(false);
  const formdata = new FormData();

  const [anchorEl, setAnchorEl] = useState(null);

  let selected_images = [];

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== undefined &&
      context?.userData?.avatar !== ""
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  const onChangeFile = (e, apiEndPoint) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUpLoading(true);

      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/webp")
        ) {
          selected_images.push(files[i]);
          formdata.append(`avatar`, files[i]);

          uploadImage("/api/user/user-avatar", formdata).then((res) => {
            setUpLoading(false);
            let avatar = [];
            avatar.push(res?.data?.avatar);
            setPreviews(avatar);
          });
        } else {
          context.openAlertBox(
            "error",
            "Please select a valid JPG , PNG , JPG or webp image file"
          );
          setUpLoading(false);
          return false;
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const logout = () => {
    setAnchorEl(null);

    fetchDataFromApi(
      `/api/user/logout?token=${localStorage.getItem("accesstoken")}`,
      { withCredentials: true }
    ).then((res) => {
      if (res?.error === false) {
        context.setIsLogin(false);
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
        history("/");
      }
    });
  };

  return (
    <div className="card bg-white shadow-md  rounded-md sticky top-[10px]">
      <div className="w-full !p-5 flex items-center justify-center flex-col">
        <div
          className="w-[110px] h-[110px] rounded-full
         flex items-center justify-center bg-gray-200 overflow-hidden !mb-4 relative group"
        >
          {upLoading === true ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              {previews?.length !== 0 ? (
                previews?.map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      className="w-full h-full object-cover"
                    />
                  );
                })
              ) : (
                <img src={user} className="w-full h-full object-cover" />
              )}
            </>
          )}

          <div
            className="overlay absolute w-[100%] h-[100%] top-0 left-0 z-50
         bg-[rgba(0,0,0,0.7)] cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-all "
          >
            <IoCloudUpload className="text-[#fff] text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
              name="avatar"
              accept="image/*"
            />
          </div>
        </div>

        <h3 className="text-[18px] font-[600]">{context?.userData?.name}</h3>

        <h6 className="text-[13px] font-[500]">{context?.userData?.email}</h6>
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
          <Button
            onClick={logout}
            className="flex w-full !py-2 !text-left !px-5 !justify-start !capitalize !rounded-none items-center gap-2 !text-[rgba(0,0,0,0.8)]"
          >
            <IoLogOut className="text-[19px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
