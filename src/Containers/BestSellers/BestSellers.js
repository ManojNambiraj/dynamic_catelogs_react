import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assests/images/bestSellers/1.jpg";
import img2 from "../../assests/images/bestSellers/2.jpg";
import img3 from "../../assests/images/bestSellers/3.jpg";
import img4 from "../../assests/images/bestSellers/4.jpg";
import img5 from "../../assests/images/bestSellers/5.jpg";
import img6 from "../../assests/images/bestSellers/6.jpg";
import img7 from "../../assests/images/bestSellers/7.jpg";
import img8 from "../../assests/images/bestSellers/8.jpg";
import img9 from "../../assests/images/bestSellers/9.jpg";
import "./BestSellers.css";

const BestSellers = () => {
  const data = [
    { images: img5 },
    { images: img6 },
    { images: img7 },
    { images: img8 },
    { images: img9 },
    { images: img4 },
    { images: img2 },
    { images: img3 },
    { images: img1 },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="BestSellers_container">
        <div className="BestSellers_content">
          <h1>Top Products</h1>
        </div>
      </div>
      <div className="ChipcartsContainer">
        <div className="subChipcartsContainer">
          <div className="smallChipsContainer">
            <Carousel
              swipeable={true}
              draggable={true}
              arrows={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="1s ease"
              transitionDuration={500}
              itemClass="carousel-item-padding-40-px"
            >
              {data.map((data) => {
                return (
                  <div className="smallChip">
                    <img src={data.images} alt="img" className="chip-images" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
