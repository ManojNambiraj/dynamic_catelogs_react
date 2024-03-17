import React from "react";
import "./Landing.css";
import Navbar from "../../Containers/Navbar/Navbar";
import NavbarBottom from "../../Containers/NavbarBottom/NavbarBottom";
import Banner from "../../Containers/Banner/Banner";
import OfferBar from "../../Containers/OfferBar/OfferBar";
import FilterSort from "../../Containers/FilterSort/FilterSort";
import BestSellers from "../../Containers/BestSellers/BestSellers";

const Landing = () => {
  return (
    <div className="Landing_container">
      <div className="navbar_section">
        <Navbar />
        <div className="navbarBottom_section">
          <NavbarBottom />
        </div>
      </div>

      <div className="banner_section">
        <Banner />
        <OfferBar />
      </div>

      <div className="filterSort_section">
        <FilterSort />
      </div>

      <div className="bestSellers_caurosal">
        <BestSellers />
      </div>
    </div>
  );
};

export default Landing;
