import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SortSection.css";

const SortSection = ({ handleFilter, count }) => {
  const [price, setPrice] = useState("");

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setPrice(selectedValue);

    const sortOrder = selectedValue === "Low to high" ? "asc" : "desc";
    handleFilter(null, sortOrder);
  };

  return (
    <div className="sort_section_content">
      <div className="count_of_wrists">
        {count} Wrists Collections
      </div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort by: Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={price}
          onChange={handleSortChange}
          label="Sort by: Price"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Low to high"}>Low to high</MenuItem>
          <MenuItem value={"High to low"}>High to low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortSection;
