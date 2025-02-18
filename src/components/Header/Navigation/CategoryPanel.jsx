import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";
const CategoryPanel = (props) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="!p-3 text-[17px] font-bold flex items-center justify-between">
        SHOP BY CATEGORIES{" "}
        <IoClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] "
        />
      </h3>

      <div className="scroll ">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {subMenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            )}

            {subMenuIndex === 0 && (
              <ul className="submenu w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubMenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FaPlus
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {innerSubMenuIndex === 0 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Crepe T-shirt
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Outerwear
              </Button>
            </Link>
            {subMenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            )}

            {subMenuIndex === 1 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubMenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FaPlus
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {innerSubMenuIndex === 1 && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Smart Tablet
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Crepe T-shirt
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          leather Watch
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
