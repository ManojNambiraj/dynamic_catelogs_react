import React, { useEffect, useState } from "react";
import Navbar from "../../Containers/Navbar/Navbar";
import NavbarBottom from "../../Containers/NavbarBottom/NavbarBottom";
import { useLocation, useParams } from "react-router-dom";
import "./Product.css";
import { BackendAPI } from "../../App";
import axios from "axios";

const Product = () => {
  const [cart, setCart] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const getData = await axios.get(`${BackendAPI}/product/Product/${id}`);

    setProduct(getData.data.message);
  };
  return (
    <div className="individual_container">
      <div className="navbar_section">
        <Navbar />
        <div className="navbarBottom_section">
          <NavbarBottom />
        </div>
      </div>

      <div className="ProductNameBar">
        <div className="productnameSpace">
          <span>{product.name}</span>
        </div>
      </div>

      <div className="individual_product_area">
        <div className="product_area_left">
          <i className="fa-regular fa-heart" title="Add to Wishlist"></i>
          <div className="product_area_imgBox">
            <img src={product.image} alt="product_img" />
          </div>
          <div className="left_area_showcase_btns">
            <button>Try it on</button>
            <button>Surprise me!</button>
          </div>
        </div>
        <div className="product_area_right">
          <div className="product_name_section">
            <div className="product_area_name">
              {product.name}
            </div>
            <div className="product_area_ratings">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="hr_line_area"></div>
            <div className="price_area_section">
              <span className="newPrice">&#8377;{product.price}</span>
              <span className="oldPrice">&#8377;{product.oldPrice}</span>
              <span className="priceoffer">(20% off)</span>
              <div className="tax_row">* MRP Inclusive of all taxes</div>
            </div>
            <div className="Cart_btns">
              <button
                onClick={() => {
                  setCart(cart - 1);
                }}
              >
                -
              </button>
              <span>{cart}</span>
              <button
                onClick={() => {
                  setCart(cart + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="product_buy_btn_area">
              <button className="add_btn">Add to cart</button>
              <button className="buy_btn">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
