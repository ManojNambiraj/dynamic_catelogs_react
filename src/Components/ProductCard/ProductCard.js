import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="product_card">
      <div className="card_top">
        <i class="fa-regular fa-heart" title="Add to Wishlist"></i>
        <div className="card_image_box">
          <img src={item?.image} alt="products" />
        </div>
      </div>
      <div className="card_bottom">
        <p className="card_product_name">{truncateString(item?.name, 30)}</p>
        <span className="categoryName">
          {item?.category === "Men"
            ? "Men's Watch"
            : item?.category === "Women"
            ? "Women's Watch"
            : "Kid's watch"}
        </span>
        <div className="card_price_column">
          <span>&#8377;{item?.price}</span>
          <Link to={`/product/${item._id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
