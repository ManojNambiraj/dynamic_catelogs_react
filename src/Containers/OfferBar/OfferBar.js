import React from "react";
import "./OfferBar.css";

const OfferBar = () => {
  return (
    <div className="offerBar_container">
      <div className="offerBar_content">
        <div className="appoinmentDiv">
          <i class="fa-solid fa-blender"></i>
          <span>Book An Appoinment</span>
        </div>
        <div className="emiDiv">
          <i class="fa-brands fa-creative-commons-remix"></i>
          <span>Buy With No Cost EMI</span>
        </div>
        <div className="PikeupDiv">
          <i class="fa-solid fa-store"></i>
          <span>Pikeup At The Store</span>
        </div>
      </div>
    </div>
  );
};

export default OfferBar;
