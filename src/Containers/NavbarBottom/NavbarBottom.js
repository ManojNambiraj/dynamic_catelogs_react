import React from "react";
import "./NavbarBottom.css";
import { useNavigate } from "react-router-dom";

const NavbarBottom = () => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate("/products", {
      state: {
        value: page,
      },
    });
  };
  return (
    <div className="NavbarBottom_container">
      <div className="nav_bottom_content">
        <ul>
          <li>
            <div
              onClick={() => {
                handleClick("All");
              }}
            >
              All Wrists
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                handleClick("Men");
              }}
            >
              Men
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                handleClick("Women");
              }}
            >
              Women
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                handleClick("Kids");
              }}
            >
              Kids
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
