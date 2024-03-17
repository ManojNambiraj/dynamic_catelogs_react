import React, { useEffect, useState } from "react";
import Navbar from "../../Containers/Navbar/Navbar";
import NavbarBottom from "../../Containers/NavbarBottom/NavbarBottom";
import { useLocation } from "react-router-dom";
import SortSection from "../../Components/SortSection/SortSection";
import FilterBox from "../../Components/FilterBox/FilterBox";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductList.css";
import { BackendAPI } from "../../App";
import axios from "axios";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState("All");
  const {
    state: { value },
  } = useLocation();

  useEffect(() => {
    setCategory(value || "All");
  }, [value]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let path;
        switch (category) {
          case "All":
            path = "product/Products";
            break;
          case "Men":
            path = "category/Men";
            break;
          case "Women":
            path = "category/Women";
            break;
          case "Kids":
            path = "category/Kids";
            break;
          default:
            throw new Error("Invalid category");
        }

        const response = await axios.get(`${BackendAPI}/${path}`);
        setProductsList(response?.data?.message);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [category]);

  const handleFilter = (categoryValue, sortOrder) => {
    let filteredProducts = [...productsList];
    if (categoryValue) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryValue
      );
    }

    if (sortOrder === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProductsList(filteredProducts);
  };

  return (
    <div className="Products_container">
      <div className="navbar_section">
        <Navbar />
        <div className="navbarBottom_section">
          <NavbarBottom />
        </div>
      </div>

      <div className="Sort_section">
        <SortSection handleFilter={handleFilter} count={productsList?.length} />
      </div>

      <div className="product_content_section">
        <div className="filter_container">
          <FilterBox handleFilter={handleFilter} />
        </div>
        <div className="productList_right_section">
          <div className="Card_container">
            {productsList?.map((item) => {
              return <ProductCard item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
