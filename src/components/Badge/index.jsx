import React from "react";

const Badge = (props) => {
  return (
    <span
      className={` capitalize !py-1 !px-5 rounded-full text-[12px]
    ${props.status === "pending" && "bg-[#ff5252] text-white"}
    ${props.status === "confirm" && "bg-green-500 text-white"}
    ${props.status === "delivered" && "bg-blue-500 text-white"}`}
    >
      {props.status}
    </span>
  );
};

export default Badge;
