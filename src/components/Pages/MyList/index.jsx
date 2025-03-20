import Button from "@mui/material/Button";
import { IoBagCheckSharp } from "react-icons/io5";
import MyListItem from "./myListItem";
import AccountSideBar from "../../AccountSideBar";

const MyList = () => {
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>

        <div className="col2 w-[70%]">
          <div className="shadow-md rounded-md bg-white ">
            <div className="!py-5 !px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="font-[600]">My List</h2>
              <p className="!mt-0 !mb-0 ">
                There are <span className="text-[#ff5252] font-[600]">2 </span>
                products in your cart
              </p>
            </div>

            <MyListItem />
            <MyListItem />
            <MyListItem />
            <MyListItem />
            <MyListItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
