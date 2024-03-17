import React from "react";
import "./ProfileBox.css";
import { Link } from "react-router-dom";

const ProfileBox = () => {
  return (
    <div className="ProfileBox_container">
      <div className="ProfileBox_headline">
        <span>New to Wrist?</span>
        <br />
        <span className="sub_headline">Signup/Login for best experience</span>
      </div>
      <div className="profileBox_buttons">
        <Link to="/register">
          <button>SIGNUP</button>
        </Link>
        <span>or</span>
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
      </div>
      <div className="hrLine"></div>
      <ul className="ProfileBoxList">
        <li>Wishlist</li>
      </ul>
    </div>
  );
};

export default ProfileBox;
