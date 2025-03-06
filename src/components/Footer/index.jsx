import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
import { PiGiftBold } from "react-icons/pi";
import { LuRotateCcw } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CiChat2 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import picture from "../../assets/images/Footer/picture.png";
import picture1 from "../../assets/images/Footer/picture1.png";
import picture2 from "../../assets/images/Footer/picture2.png";
import picture3 from "../../assets/images/Footer/picture3.png";
import picture4 from "../../assets/images/Footer/picture4.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="!py-6 bg-white ">
          <div className="container">
            <div className="flex items-center justify-center gap-5 !py-8 !pb-8 ">
              <div className="col flex items-center justify-center flex-col group w-[15%]">
                <FaShippingFast
                  className="text-[50px] transition-all
              duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2"
                />
                <h3 className="text-[18px] font-[600]">Free Shipping</h3>
                <p className="text-[14px] font-[400]">
                  For all Orders over 100$
                </p>
              </div>

              <div className="col flex items-center justify-center flex-col group w-[15%]">
                <LuRotateCcw
                  className="text-[50px] transition-all
              duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2"
                />
                <h3 className="text-[18px] font-[600]">30 Days Returns</h3>
                <p className="text-[14px] font-[400]">
                  For an Exchange Product
                </p>
              </div>

              <div className="col flex items-center justify-center flex-col group w-[15%]">
                <RiSecurePaymentLine
                  className="text-[50px] transition-all
              duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2"
                />
                <h3 className="text-[18px] font-[600]">Secured Payment</h3>
                <p className="text-[14px] font-[400]">Payment Cards Accepted</p>
              </div>

              <div className="col flex items-center justify-center flex-col group w-[15%]">
                <PiGiftBold
                  className="text-[50px] transition-all
              duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2"
                />
                <h3 className="text-[18px] font-[600]">Special Gifts</h3>
                <p className="text-[14px] font-[400]">
                  Our First Product Order
                </p>
              </div>

              <div className="col flex items-center justify-center flex-col group w-[15%]">
                <FcCustomerSupport
                  className="text-[50px] transition-all
              duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-2"
                />
                <h3 className="text-[18px] font-[600]">Support 24/7</h3>
                <p className="text-[14px] font-[400]">Contact us Anytime</p>
              </div>
            </div>
            <br />
            <hr />

            <div className="footer flex !py-10">
              <div className="part1 w-[30%] border-r-2 border-[rgba(0,0,0,0.1)]">
                <h2 className="text-[20px] font-[600] !mb-4">Contact us</h2>
                <p className="text-[15px] font-[400] !pb-4">
                  D2-Store 276 Trần Hưng Đạo, Phường Bình Hưng,
                  <br /> Thành phố Phan Thiết, Tỉnh Bình Thuận
                </p>
                <Link className="link " to="mailto:duong0023@gmail.com">
                  duong0023@gmail.com
                </Link>

                <p className="text-[25px] block font-[600] w-full !mt-3 !mb-5 text-[#ff5252]">
                  (+84) 368205272
                </p>

                <div className="flex items-center gap-2">
                  <CiChat2 className="text-[75px] text-[#ff5252]" />
                  <span className="text-[20px] font-[600] ">
                    Online Chat <br />
                    Get Expert Help
                  </span>
                </div>
              </div>

              <div className="part2 w-[40%] flex !pl-8">
                <div className="part2_col1 w-[50%]">
                  <h2 className="text-[20px] font-[600] !mb-4">Products</h2>
                  <ul className="list">
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Prices drop
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        New Products
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Best sales
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Site Map
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Stores
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="part2_col2 w-[50%]">
                  <h2 className="text-[20px] font-[600] !mb-4">Our Company</h2>
                  <ul className="list">
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Delivery
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Legal Notice
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Term and Conditions of Use
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        About us
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Secure Payment
                      </Link>
                    </li>
                    <li className="list-none text-[14px] w-full !mb-3">
                      <Link className="link" to="/">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="part3 w-[30%] flex flex-col !pl-8">
                <h2 className="text-[20px] font-[600] !mb-4">
                  Subscribe to newsletter
                </h2>
                <p className="text-[15px] font-[400] ">
                  Subscribe to our latest newsletter to get news about special
                  discounts
                </p>
                <form className="!mt-5" action="">
                  <input
                    className="w-full h-[45px] border outline-none !pl-4 !pr-4
                   rounded-sm"
                    type="text"
                    placeholder="Your Email Address"
                  />
                  <Button className="!mt-4 !mb-4 !bg-[#ff5252] !text-white text-[15px] font-[500] !py-2 !px-4 rounded-md">
                    Subscribe
                  </Button>

                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I have read and agree to the terms and conditions and the Privacy Policy"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="bottomStrip !py-3 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link
                  to="/"
                  target="_blank"
                  className="w-[35px] h-[35px] border border-[rgba(0,0,0,0.1] hover:bg-[#ff5252]
                   rounded-full group flex items-center justify-center transition-all"
                >
                  <FaFacebookF className="text-[25px] group-hover:text-white" />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  target="_blank"
                  className="w-[35px] h-[35px] border border-[rgba(0,0,0,0.1] hover:bg-[#ff5252]
                   rounded-full group flex items-center justify-center transition-all"
                >
                  <FaInstagram className="text-[25px] group-hover:text-white" />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  target="_blank"
                  className="w-[35px] h-[35px] border border-[rgba(0,0,0,0.1] hover:bg-[#ff5252]
                   rounded-full group flex items-center justify-center transition-all"
                >
                  <IoLogoYoutube className="text-[25px] group-hover:text-white" />
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  target="_blank"
                  className="w-[35px] h-[35px] border border-[rgba(0,0,0,0.1] hover:bg-[#ff5252]
                   rounded-full group flex items-center justify-center transition-all"
                >
                  <FaPhoneFlip className="text-[25px] group-hover:text-white" />
                </Link>
              </li>
            </ul>

            <p className="text-[13px] text-center !mb-0">
              © 2025 - Ecommerce software by D2Code
            </p>
            <div className="flex items-center">
              <img src={picture} alt="image" />
              <img src={picture1} alt="image" />
              <img src={picture2} alt="image" />
              <img src={picture3} alt="image" />
              <img src={picture4} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
