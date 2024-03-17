import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ProfileBox from "../../Components/ProfileBox/ProfileBox";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // ANIMI
  const [placeholder, setPlaceholder] = useState("Search");
  const [index, setIndex] = useState(0);
  const [profileBox, setProfileBox] = useState(false);
  const [userLogin, setUserLogin] = useState(false);

  const navigate = useNavigate();

  const token = window.sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setUserLogin(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === placeholder.length) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, placeholder]);

  const handleLogout = () => {
    window.sessionStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };

  return (
    <div className="navbar_container">
      <div className="nav_content">
        <div className="nav_left">
          <Link to={"/"}>
            <div className="nav_brand_logo">
              <i class="fa-solid fa-clock"></i>
              <span>Wrist</span>
            </div>
          </Link>
          <div className="nav_search_box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              autoComplete="off"
              placeholder={placeholder.substring(0, index)}
            />
          </div>
        </div>
        <div className="nav_right">
          <div
            className="nav_wishList"
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <i class="fa-regular fa-heart"></i>
            <span>Wishlist</span>
          </div>
          {userLogin ? (
            <div className="nav_account" onClick={handleLogout}>
              <i class="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </div>
          ) : (
            <div
              className="nav_account"
              onClick={() => {
                setProfileBox(profileBox == true ? false : true);
              }}
            >
              <i class="fa-regular fa-user"></i>
              <span>Account</span>
            </div>
          )}

          {profileBox && <ProfileBox />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
