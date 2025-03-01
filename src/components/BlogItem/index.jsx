import React from "react";
import { IoMdTime } from "react-icons/io";
import Blog from "../../assets/images/Blog/blog.jpg";
import Blog1 from "../../assets/images/Blog/blog1.jpg";
import Blog2 from "../../assets/images/Blog/blog2.jpg";
import Blog3 from "../../assets/images/Blog/blog3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div
        className="imgWrapper w-full overflow-hidden
       rounded-md cursor-pointer relative"
      >
        <img
          src={Blog2}
          alt="blog image"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />

        <span
          className="flex items-center justify-center absolute  bottom-[15px] right-[15px]
         z-50 text-white text-[11px] bg-[#ff5252] !p-1 rounded-md gap-1"
        >
          <IoMdTime className="text-[17px]" /> 11th April, 2003
        </span>
      </div>

      <div className="info !py-4">
        <h2 className="text-[18px] font-[600]">
          <Link className="link" to="/">
            Achieving excellence through thoug customized solutions
          </Link>
        </h2>
        <p className="text-[15px] font-[400] text-[rgba(0,0,0,0.8)]">
          We are excited to hear from you! Whether you’re looking for strategic
          insights, customized solution...
        </p>
        <Link
          to="/"
          className=" flex items-center gap-1 font-[600] text-[15px] link underline"
        >
          Read more <FaArrowRight className="text-[10spx]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
