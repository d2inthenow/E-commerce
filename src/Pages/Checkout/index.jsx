import TextField from "@mui/material/TextField";
import product from "../../assets/images/ProductItem/product1.jpg";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
const Checkout = () => {
  return (
    <section className="!py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md !p-5 rounded-md">
            <h1 className="font-[600]">Billing Details</h1>

            <form className="w-full !mt-5">
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Country"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] !mb-3">Street Address</h6>

              <div className="flex items-center gap-5 !pb-5 ">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House number and street name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] !mb-3">Town / City</h6>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="City"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] !mb-3">State / Country</h6>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="City"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] !mb-3">Postcode / ZIP</h6>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="ZIP Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%]">
          <div className="card bg-white shadow-md !p-5 rounded-md">
            <h2 className="font-[600] !mb-4">Your Order</h2>

            <div className="flex items-center justify-between !py-2 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[500]">Product</span>
              <span className="text-[14px] font-[500]">Subtotal</span>
            </div>
            <div className="scroll !mb-5 max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2">
              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={product}
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px] font-[600]"> Quan Jean</h4>
                    <span className="text-[13px]">Quantity : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$99.00</span>
              </div>

              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={product}
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px] font-[600]"> Quan Jean</h4>
                    <span className="text-[13px]">Quantity : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$99.00</span>
              </div>

              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={product}
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px] font-[600]"> Quan Jean</h4>
                    <span className="text-[13px]">Quantity : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$99.00</span>
              </div>

              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={product}
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px] font-[600]"> Quan Jean</h4>
                    <span className="text-[13px]">Quantity : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$99.00</span>
              </div>

              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={product}
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px] font-[600]"> Quan Jean</h4>
                    <span className="text-[13px]">Quantity : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$99.00</span>
              </div>

              <div className="flex items-center justify-between !py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[60px] h-[60px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={product}
                      className="w-full transition-all group-hover:scale-105"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px] font-[600]"> Quan Jean</h4>
                    <span className="text-[13px]">Quantity : 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$99.00</span>
              </div>
            </div>

            <Button className="w-full btn-org flex items-center gap-2">
              <BsFillBagCheckFill className="text-[20px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
