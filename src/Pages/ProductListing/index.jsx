import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import { FiGrid } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [ItemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="!py-5 !pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white !p-2 !mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white ">
            <SideBar />
          </div>
          <div className="rightContent w-[80%] !p-3">
            <div
              className="w-full bg-[#f1f1f1] !mb-4 !p-2 rounded-md flex items-center
            justify-between"
            >
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                 !text-[#000] ${ItemView === "list" && "active"}`}
                  onClick={() => setItemView("list")}
                >
                  <RiMenuLine className="text-[rgba(0,0,0,0.8)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                    !text-[black]  ${ItemView === "grid" && "active"}`}
                  onClick={() => setItemView("grid")}
                >
                  <FiGrid className="text-[rgba(0,0,0,0.8)]" />
                </Button>
                <span className="text-[15px] font-[500] !pl-3">
                  There are 17 products
                </span>
              </div>

              <div className="col2 !ml-auto flex items-center justify-end gap-3 !pr-3">
                <span className="text-[15px] font-[500] !pl-3">Sort By</span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="text-[12px] !bg-[white] !text-[#000] !capitalize !border-2 !border-[black]"
                >
                  Sales , highest to lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="text-[12px] !text-[#000] !capitalize "
                  >
                    Sales , highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[12px] !text-[#000] !capitalize "
                  >
                    Relavance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[12px] !text-[#000] !capitalize "
                  >
                    Name , A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[12px] !text-[#000] !capitalize "
                  >
                    Name , Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[12px] !text-[#000] !capitalize "
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[12px] !text-[#000] !capitalize "
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${
                ItemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4`}
            >
              {ItemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center !mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
