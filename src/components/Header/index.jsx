import { React, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/src/logoGam.png";
import Search from "../Search/";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const context = useContext(MyContext);
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%] moving-text-container">
              <p className="text-[14px] font-bold moving-text text-[#ff5252] !mt-0">
                Get up to 50% new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4 min-w-50">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4 border-b-[1px] border-gray-250">
        <div className="container flex items-center justify-between ">
          <div className="col1 w-[25%]">
            <Link to="/">
              <img className="w-40 h-30 object-cover" src={logo} />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-7 ">
            <ul className="flex items-center gap-3 justify-end w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
              </li>
              <span className="text-gray-500">/</span>{" "}
              <li className="list-none">
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={24} color="secondary">
                      <FaCodeCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={12} color="secondary">
                      <FaHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={3} color="secondary">
                      <FaShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
