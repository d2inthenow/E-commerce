import Button from "@mui/material/Button";
import { IoBagCheckSharp } from "react-icons/io5";
import CartItem from "./cartItem";

const CartPage = () => {
  return (
    <section className="section !py-10 !pb-10">
      <div className="container flex !w-[80%] !max-w-[80%] gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white ">
            <div className="!py-5 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="font-[600]">Your Cart</h2>
              <p className="!mt-0 !mb-0 ">
                There are <span className="text-[#ff5252] font-[600]">2 </span>
                products in your cart
              </p>
            </div>

            <CartItem size="S" qty={1} />
            <CartItem size="S" qty={1} />
            <CartItem size="S" qty={1} />
            <CartItem size="S" qty={1} />
            <CartItem size="S" qty={1} />
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md bg-[white] rounded-md !p-5">
            <h3 className="!pb-3">Cart Totals</h3>
            <hr />

            <p className="flex justify-between items-center">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-[#ff5252] font-bold">$12345</span>
            </p>

            <p className="flex justify-between items-center">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className=" font-bold">Free</span>
            </p>

            <p className="flex justify-between items-center">
              <span className="text-[14px] font-[500]">Estimate for </span>
              <span className=" font-bold">Viet Nam</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-[#ff5252] font-bold">$12345</span>
            </p>

            <br />

            <Button className="btn-org w-full">
              <IoBagCheckSharp className="text-[20px]" />
              &nbsp; Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
