import React, { useEffect, useState } from "react";
import "./FilterBox.css";

const FilterBox = ({ handleFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const applyFilter = () => {
    handleFilter(selectedCategories);
  };

  return (
    <>
      <div className="filter_top_section">
        <span className="filter_logo">
          <i className="fa-solid fa-arrow-up-short-wide"></i>
          <span>Filter</span>
        </span>
        <span className="filter_clear">Clear all</span>
      </div>
      <div className="filter_content_list">
        <div className="filter_sections">
          <div className="filter_sections_head">Categories</div>
          <div className="filter_sections_checkList">
            <section>
              <input
                type="checkbox"
                id="men"
                checked={selectedCategories.includes("Men")}
                onChange={() => handleCheckboxChange("Men")}
              />
              <label htmlFor="men">Men's</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="women"
                checked={selectedCategories.includes("Women")}
                onChange={() => handleCheckboxChange("Women")}
              />
              <label htmlFor="women">Women's</label>
            </section>
            <section>
              <input
                type="checkbox"
                id="kids"
                checked={selectedCategories.includes("Kids")}
                onChange={() => handleCheckboxChange("Kids")}
              />
              <label htmlFor="kids">Kids</label>
            </section>
          </div>
        </div>
      </div>
      <div className="filter_section_container">
        <button className="apply_btn" onClick={applyFilter}>
          Apply Filter
        </button>
      </div>
    </>
  );
};

export default FilterBox;
