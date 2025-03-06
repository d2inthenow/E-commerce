import React from "react";
import Button from "@mui/material/Button";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
import { useState } from "react";
const CategoryCollapse = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState({});
  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    setInnerSubMenuIndex((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
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

                  {innerSubMenuIndex[0] ? (
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

                  {innerSubMenuIndex[0] && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Men
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Women
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Kids
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
                Electronics
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
                      Mobiles
                    </Button>
                  </Link>

                  {innerSubMenuIndex[1] ? (
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

                  {innerSubMenuIndex[1] && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Samsung
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Apple
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Laptops
                    </Button>
                  </Link>

                  {innerSubMenuIndex[2] ? (
                    <FiMinusSquare
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(2)}
                    />
                  ) : (
                    <FaPlus
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(2)}
                    />
                  )}

                  {innerSubMenuIndex[2] && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Gaming
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Macbook
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Lenovo
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Acer
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Asus
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
                Bags
              </Button>
            </Link>
            {subMenuIndex === 2 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(2)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(2)}
              />
            )}

            {subMenuIndex === 2 && (
              <ul className="submenu  w-full !pl-3">
                {/* <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubMenuIndex[2] ? (
                    <FiMinusSquare
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(2)}
                    />
                  ) : (
                    <FaPlus
                      className="absolute top-[13px] right-[14px] cursor-pointer"
                      onClick={() => openInnerSubMenu(2)}
                    />
                  )}

                  {innerSubMenuIndex[2] && (
                    <ul className="inner_submenu  w-full !pl-3">
                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Men Bags
                        </Link>
                      </li>

                      <li className="list-none relative !mb-1">
                        <Link
                          to="/"
                          className="w-full link !text-left !justify-start !p-3 !text-[14px] transition"
                        >
                          Women Bags
                        </Link>
                      </li>
                    </ul>
                  )}
                </li> */}

                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Men Bags
                    </Button>
                  </Link>
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Women Bags
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Footwear
              </Button>
            </Link>
            {subMenuIndex === 3 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(3)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(3)}
              />
            )}

            {subMenuIndex === 3 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Men Footwear
                    </Button>
                  </Link>
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Women Footwear
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Groceries
              </Button>
            </Link>
            {subMenuIndex === 4 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(4)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(4)}
              />
            )}

            {/* {subMenuIndex === 4 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Men Bags
                    </Button>
                  </Link>
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Women Bags
                    </Button>
                  </Link>
                </li>
              </ul>
            )} */}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Beauty
              </Button>
            </Link>
            {subMenuIndex === 5 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(5)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(5)}
              />
            )}

            {/* {subMenuIndex === 4 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Men Bags
                    </Button>
                  </Link>
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Women Bags
                    </Button>
                  </Link>
                </li>
              </ul>
            )} */}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Wellness
              </Button>
            </Link>
            {subMenuIndex === 6 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(6)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(6)}
              />
            )}

            {/* {subMenuIndex === 4 && (
              <ul className="submenu  w-full !pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Men Bags
                    </Button>
                  </Link>
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                      Women Bags
                    </Button>
                  </Link>
                </li>
              </ul>
            )} */}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full ">
              <Button className="w-full !text-left !justify-start !p-3 !text-[rgba(0,0,0,0.8)]">
                Jewellery
              </Button>
            </Link>
            {subMenuIndex === 7 ? (
              <FiMinusSquare
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(7)}
              />
            ) : (
              <FaPlus
                className="absolute top-[13px] right-[14px] cursor-pointer"
                onClick={() => openSubMenu(7)}
              />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
