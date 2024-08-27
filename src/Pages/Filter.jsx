import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { useState } from "react";
import "../Styles/filter.css";

function Filter() {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([200, 600]);
  const [caratRange, setCaratRange] = useState([0.25, 6.0]);

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCaratChange = (event, newValue) => {
    setCaratRange(newValue);
  };

  return (
    <div className="filter-section">
    <div className="filter-group brder pt-2">
        <h3>Diamond Sizes</h3>
        {[
          "0.25 CT. TW.",
          "0.30 CT. TW.",
          "0.40 CT. TW.",
          "0.50 CT. TW.",
          "0.62 CT. TW.",
          "0.75 CT. TW.",
        ].map((size) => (
          <FormControlLabel
            key={size}
            control={
              <Checkbox
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
            }
            label={size}
          />
        ))}
        <div className="see-more">See More</div>

        <div className="d-flex range-main">
        <p className="range-para">0</p>
        <Slider
          value={caratRange}
          onChange={handleCaratChange}
          valueLabelDisplay="auto"
          min={0}
          max={10}
          step={0.01}
          sx={{ color: "#A67A44" }} 
        />
        <p className="range-para">10.00 CT WT</p>
        </div>
    </div>

      <div className="filter-group">
        <h3>Prices</h3>
     <div className="d-flex range-main">
     <p className="range-para">£0</p>
     <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={999}
          sx={{ color: "#A67A44" }} 
        />
        <p className="range-para">£999</p>
     </div>
      </div>
    </div>
  );
}

export default Filter;
