import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../ProductZoom";
import ProductsSlider from "../ProductsSlider";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import TextField from "@mui/material/TextField";
import customer from "../../assets/images/Customer/customer.jpg";
import customer1 from "../../assets/images/Customer/customer1.jpg";
import customer2 from "../../assets/images/Customer/customer2.jpg";
import customer3 from "../../assets/images/Customer/customer3.jpg";
import customer4 from "../../assets/images/Customer/customer4.jpg";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="!py-5 ">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Cropped Skinny Jeans
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white !py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] !pr-10 !pl-10">
            <h1 className="text-[24px] font-[600] !mb-2">Dong Duong</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-[13px]">
                Brands : {""}
                <span className="font-[500px] text-black opacity-75">
                  Thái Dương
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={5}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (2412)</span>
            </div>
            <div className="flex items-center gap-4 !mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $2412
              </span>
              <span className="price text-[#ff5252] text-[18px] font-bold">
                $2003
              </span>
              <span className="text-[14px]">
                Available In Stock:
                <span className="text-[14px] text-blue-700 font-bold">
                  16 items
                </span>
              </span>
            </div>
            <p className="!mt-3 !pr-10 !mb-5">
              Khám phá một bí mật giữ màu lâu dài từ Thái Dương. Những chiếc áo,
              quần, hay bất kỳ sản phẩm nào đều giữ màu sắc tuyệt vời ngay cả
              sau nhiều lần giặt. Điều này không chỉ giúp tiết kiệm thời gian mà
              còn giữ cho bộ sưu tập thời trang luôn mới mẻ và sống động.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px] font-[500]">Size :</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!text-white  !bg-[#ff5252]" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!text-white  !bg-[#ff5252]" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!text-white  !bg-[#ff5252]" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!text-white  !bg-[#ff5252]" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
                <Button
                  className={`${
                    productActionIndex === 4 ? "!text-white  !bg-[#ff5252]" : ""
                  }`}
                  onClick={() => setProductActionIndex(4)}
                >
                  XXL
                </Button>
              </div>
            </div>

            <p className="text-[14px] !mt-4 !mb-2 text-[black]">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>
            <div className="flex items-center gap-4 !py-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QuantityBox />
              </div>

              <Button className="btn-org flex gap-2">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to cart
              </Button>
            </div>

            <div className="flex items-center gap-4 !mt-4">
              <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[18px]" />
                Add to WishList
              </span>
              <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
                <FaCodeCompare className="text-[18px]" />
                Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container !pt-10">
          <div className="flex items-center gap-10">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Review (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md">
              <h4 className="font-[600]">Thai Duong Classic Denim Jacket</h4>
              <p>
                Form boxy 2.0 vẫn giữ được sự rộng rãi, thoải mái, nhưng với độ
                dài áo đã được cải tiến - ngắn hơn thắt lưng.
              </p>
              <h4 className="font-[600]">FreeShipping & Return</h4>
              <p>
                Miễn phí ship cho đơn hàng từ 500k, đổi trả trong vòng 7 ngày kể
                từ ngày nhận hàng.
              </p>
              <h4 className="font-[600]">Online Support</h4>
              <p>
                Hỗ trợ 24/7 qua các kênh: Facebook, Zalo, Instagram, Hotline.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left ">
                  <thead class="text-xs text-black uppercase bg-[#c0c0c0] ">
                    <tr>
                      <th scope="col" class="!px-6 !py-3">
                        Thông số
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        S
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        M
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        L
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        XL
                      </th>
                      <th scope="col" class="!px-6 !py-3">
                        XXL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="!bg-white border-b ">
                      <th
                        scope="row"
                        class="!px-6 !py-4 font-semibold  whitespace-nowrap text-black"
                      >
                        Ngực
                      </th>
                      <td class="!px-6 !py-4 font-medium">68,5</td>
                      <td class="!px-6 !py-4 font-medium">70</td>
                      <td class="!px-6 !py-4 font-medium">71,5</td>
                      <td class="!px-6 !py-4 font-medium">73</td>
                      <td class="!px-6 !py-4 font-medium">74,5</td>
                    </tr>
                    <tr class="!g-white border-b ">
                      <th
                        scope="row"
                        class="!px-6 !py-4 font-semibold  whitespace-nowrap text-black"
                      >
                        Chiều dài tay
                      </th>
                      <td class="!px-6 !py-4 font-medium">20</td>
                      <td class="!px-6 !py-4 font-medium">20,5</td>
                      <td class="!px-6 !py-4 font-medium">21</td>
                      <td class="!px-6 !py-4 font-medium">21,5</td>
                      <td class="!px-6 !py-4 font-medium">22</td>
                    </tr>
                    <tr class="bg-white ">
                      <th
                        scope="row"
                        class="!px-6 !py-4 font-semibold  whitespace-nowrap text-black"
                      >
                        Chiều dài áo
                      </th>
                      <td class="!px-6 !py-4 font-medium">21,5</td>
                      <td class="!px-6 !py-4 font-medium">22</td>
                      <td class="!px-6 !py-4 font-medium">22,5</td>
                      <td class="!px-6 !py-4 font-medium">23</td>
                      <td class="!px-6 !py-4 font-medium">23,5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md">
              <div className="w-full productReviewContainer ">
                <h2 className="text-[18px] font-bold">
                  Customer questions & answers
                </h2>

                <div className="reviewScroll w-[80%] max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-5 !pr-5">
                  <div className="review w-full !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src={customer} alt="image" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px] font-[500]">Mr.D2</h4>
                        <h5 className="text-[14px] !mb-0 font-[500]">
                          1-1-2025
                        </h5>
                        <p className="!mt-0 !mb-0 font-[500]">Nice Product</p>
                      </div>

                      <Rating name="size-small" defaultValue={2} readOnly />
                    </div>
                  </div>

                  <div className="review w-ful !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src={customer1} alt="image" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px] font-[500]">Mr.D2</h4>
                        <h5 className="text-[14px] !mb-0 font-[500]">
                          1-1-2025
                        </h5>
                        <p className="!mt-0 !mb-0 font-[500]">Nice Product</p>
                      </div>

                      <Rating name="size-small" defaultValue={4} readOnly />
                    </div>
                  </div>

                  <div className="review w-full !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src={customer2} alt="image" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px] font-[500]">Mr.D2</h4>
                        <h5 className="text-[14px] !mb-0 font-[500]">
                          1-1-2025
                        </h5>
                        <p className="!mt-0 !mb-0 font-[500]">Nice Product</p>
                      </div>

                      <Rating name="size-small" defaultValue={5} readOnly />
                    </div>
                  </div>

                  <div className="review w-full !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src={customer3} alt="image" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px] font-[500]">Mr.D2</h4>
                        <h5 className="text-[14px] !mb-0 font-[500]">
                          1-1-2025
                        </h5>
                        <p className="!mt-0 !mb-0 font-[500]">Nice Product</p>
                      </div>

                      <Rating name="size-small" defaultValue={5} readOnly />
                    </div>
                  </div>

                  <div className="review w-full !pt-5 !pb-5 border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] rounded-full overflow-hidden">
                        <img src={customer4} alt="image" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px] font-[500]">Mr.D2</h4>
                        <h5 className="text-[14px] !mb-0 font-[500]">
                          1-1-2025
                        </h5>
                        <p className="!mt-0 !mb-0 font-[500]">Nice Product</p>
                      </div>

                      <Rating name="size-small" defaultValue={4} readOnly />
                    </div>
                  </div>

                  <br />

                  <div className="reviewForm bg-[#fafafa] !p-4 rounded-md">
                    <h2 className="text-[18px]">Add a review</h2>

                    <form className="w-full !mt-4">
                      <TextField
                        id="outlined-multiline-flexiable"
                        label="Write your review"
                        multiline
                        className="w-full"
                        rows={5}
                      />

                      <Rating
                        className="!mt-3"
                        name="size-small"
                        defaultValue={5}
                      />

                      <div className="flex items-center !mt-5">
                        <Button className="btn-org">Submit Review</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container !pt-8">
          <h2 className="text-[20px] font-bold">Related Products</h2>
          <ProductsSlider items={5} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
