import React from "react";
import bannerImg from "../../assests/images/banner1.webp";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_img_box">
        <img src={bannerImg} alt="bannerImg" />
      </div>
    </div>
  );
};

export default Banner;
