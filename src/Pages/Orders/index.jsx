import AccountSideBar from "../../components/AccountSideBar";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../components/Badge";
import image from "../../assets/images/ProductItem/product.jpg";
import { useState } from "react";
const Orders = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white ">
            <div className="!py-5 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="font-[600]">My Orders</h2>
              <p className="!mt-0 !mb-0 ">
                There are <span className="text-[#ff5252] font-[600]">5 </span>
                orders
              </p>

              <div className="relative overflow-x-auto !mt-5">
                <table className="w-full text-sm text-left ">
                  <thead className="text-xs text-black uppercase bg-[#c0c0c0] ">
                    <tr>
                      <th scope="col" className="!px-6 !py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Paymant Id
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="!bg-white border-b ">
                      <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px]
                         !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderProduct(0)}
                        >
                          {isOpenOrderProduct === 0 ? (
                            <FaAngleUp className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="!px-6 !py-4 font-medium">
                        <span className="text-[#ff5252]">
                          316768798132168v8a7534g
                        </span>
                      </td>
                      <td className="!px-6 !py-4 font-medium">
                        <span className="text-[#ff5252]">pay_T68f7T654Hjn</span>
                      </td>
                      <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                        Dong Duong dep trai
                      </td>
                      <td className="!px-6 !py-4 font-medium">0343546321</td>
                      <td className="!px-6 !py-4 font-medium ">
                        <span className="block w-[300px]">
                          248 Truong Sa , Quan Phu Nhuan , Tp Ho Chi Minh
                        </span>
                      </td>
                      <td className="!px-6 !py-4 font-medium">11313</td>
                      <td className="!px-6 !py-4 font-medium">100000$</td>
                      <td className="!px-6 !py-4 font-medium">
                        duongneymar0023@gmail.com
                      </td>
                      <td className="!px-6 !py-4 font-medium">
                        546F64q5q3af687z
                      </td>
                      <td className="!px-6 !py-4 font-medium">
                        <Badge status="delivered" />
                      </td>
                      <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                        21-3-2025
                      </td>
                    </tr>

                    {isOpenOrderProduct === 0 && (
                      <tr>
                        <td className="!pl-20" colSpan="6">
                          <div className="relative overflow-x-auto ">
                            <table className="w-full text-sm text-left ">
                              <thead className="text-xs text-black uppercase bg-[#c0c0c0] ">
                                <tr>
                                  <th
                                    scope="col"
                                    className="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="!px-6 !py-3 whitespace-nowrap"
                                  >
                                    Sub Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="!bg-white border-b ">
                                  <td className="!px-6 !py-4 font-medium">
                                    <span className="text-[#ff5252]">
                                      621649asd319492sIAS5d6
                                    </span>
                                  </td>
                                  <td className="!px-6 !py-4 font-medium">
                                    The best Jacket with jeans
                                  </td>
                                  <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                                    <img
                                      src={image}
                                      alt=""
                                      className="w-[60px] h-[60px] rounded-md object-cover"
                                    />
                                  </td>
                                  <td className="!px-6 !py-4 font-medium">3</td>
                                  <td className="!px-6 !py-4 font-medium ">
                                    100$
                                  </td>
                                  <td className="!px-6 !py-4 font-medium">
                                    300$
                                  </td>
                                </tr>
                                <tr className="!bg-white border-b ">
                                  <td className="!px-6 !py-4 font-medium">
                                    <span className="text-[#ff5252]">
                                      621649asd319492sIAS5d6
                                    </span>
                                  </td>
                                  <td className="!px-6 !py-4 font-medium">
                                    The best Jacket with jeans
                                  </td>
                                  <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                                    <img
                                      src={image}
                                      alt=""
                                      className="w-[60px] h-[60px] rounded-md object-cover"
                                    />
                                  </td>
                                  <td className="!px-6 !py-4 font-medium">3</td>
                                  <td className="!px-6 !py-4 font-medium ">
                                    100$
                                  </td>
                                  <td className="!px-6 !py-4 font-medium">
                                    300$
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
