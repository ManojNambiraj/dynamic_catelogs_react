import React, { useEffect } from "react";
import "./WishList.css";
import Navbar from "../../Containers/Navbar/Navbar";
import img1 from "../../assests/images/bestSellers/1.jpg";
import { useNavigate } from "react-router-dom";

const WishList = () => {

  const navigate = useNavigate();

  const token = window.sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, []);

  var dummyData = [{}, {}, {}, {}, {}];
  return (
    <div className="WishList_container">
      <div className="navbar_section">
        <Navbar />
      </div>

      <div className="wishlistBar_headline">
        <div className="wishlist_heading">Wishlist</div>
      </div>

      <div className="wishlist_cards">
        {dummyData.map((listItem) => {
          return (
            <div className="wish_card">
              <div className="wishlist_cards_content">
              <div className="wish_card_left">
                <i className="fa-regular fa-heart"></i>
                <div className="wish_img_box">
                  <img src={img1} alt="product" />
                </div>
                <div className="wish_product_details">
                  <div className="wish_product_name">
                    {"Sonata Quartz Analog Black"}
                  </div>
                  <div className="wish_product_price">&#8377;{"34,999"}</div>
                </div>
              </div>
              <div className="wish_card_right">
                <button title="Remove From Wishlist">X</button>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
