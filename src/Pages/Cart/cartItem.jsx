import { useState } from "react";
import product from "../../assets/images/ProductItem/product2.jpg";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const CartItem = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItems(value);
    }
  };

  const [QuantityAnchorEl, setQuantitySizeAnchorEl] = useState(null);
  const [selectedQuantity, setQuantity] = useState(props.qty);
  const openQuantity = Boolean(QuantityAnchorEl);
  const handleClickQuantity = (event) => {
    setQuantitySizeAnchorEl(event.currentTarget);
  };
  const handleCloseQuantity = (value) => {
    setQuantitySizeAnchorEl(null);
    if (value !== null) {
      setQuantity(value);
    }
  };
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

        <div className="flex items-center !mt-2 gap-4">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] fonr-[600] !py-1 !px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize}
              <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] fonr-[600] !py-1 !px-2 rounded-md cursor-pointer"
              onClick={handleClickQuantity}
            >
              Qty: {selectedQuantity} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={QuantityAnchorEl}
              open={openQuantity}
              onClose={() => handleCloseQuantity(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseQuantity(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity(10)}>10</MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 !mt-2">
          <span className="Price text-[16px] font-[600]">$2003</span>
          <span className="oldPrice line-through text-gray-500 font-[500] text-[15px]">
            $2412
          </span>

          <span className="Price text-[#ff5252] text-[16px] font-bold">
            17% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
