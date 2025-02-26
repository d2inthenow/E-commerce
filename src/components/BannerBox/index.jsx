import React from "react";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <img
        src={props.img}
        className="w-full group-hover:scale-105 transition-all
        group-hover:rotate-2 max-h-[200px] object-cover"
        alt="banner"
      />
    </div>
  );
};

export default BannerBox;
