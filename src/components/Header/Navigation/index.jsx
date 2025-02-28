import Button from "@mui/material/Button";
import { LuMenu } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import "../Navigation/style.css";
const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="">
        <div className="container flex items-center justify-end gap-10">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              {" "}
              <LuMenu className="text-[20px]" /> Shop By Categories
              <FaAngleDown className="text-[12px] !ml-auto font-bold cursor-pointer" />
            </Button>
          </div>
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition !font-[500]
                   !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>

                <div
                  className="submenu absolute top-[120%] left[0%]
                 min-w-[150px] bg-white shadow-md opacity-0 transition-all
                 "
                >
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>

                        <div
                          className="submenu absolute top-[0%] left[100%]
                 min-w-[150px] bg-white shadow-md opacity-0 transition-all
                 "
                        >
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button
                                  className="!text-[rgba(0,0,0,0.8)] w-full
                                 !text-left !justify-start !rounded-none
                                 "
                                >
                                  Men
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Women
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Kids
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Boys
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Girls
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px]  font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px]  font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !py-4 !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-2 mb-0 mt-0 ">
              <BsFillRocketTakeoffFill className="text-[18px]" /> Free
              International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
