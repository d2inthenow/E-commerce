import product from "../../assets/images/ProductItem/product2.jpg";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";

import Button from "@mui/material/Button";
const MyListItem = (props) => {
  return (
    <div className="cartItem flex items-center !p-3 gap-4 !pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/productDetails/1234" className="group ">
          <img
            src={product}
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoCloseSharp
          className="cursor-pointer absolute top-[0px] right-[0px]
     text-[22px] link transition-all"
        />
        <span className="text-[13px]">D2</span>
        <h3 className="font-[600] text-[16px]">
          <Link to="/productDetails/1234" className="link">
            The best Jacket & jean
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={5} size="small" readOnly />

        <div className="flex items-center gap-4 !mt-2 !mb-2">
          <span className="Price text-[16px] font-[600]">$2003</span>
          <span className="oldPrice line-through text-gray-500 font-[500] text-[15px]">
            $2412
          </span>

          <span className="Price text-[#ff5252] text-[16px] font-bold">
            17% Off
          </span>
        </div>

        <Button className="btn-org btn-sml">Add To Cart</Button>
      </div>
    </div>
  );
};

export default MyListItem;
