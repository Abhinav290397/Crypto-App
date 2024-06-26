//This code is taken from Mui and made some changes.
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./style.css";

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  

  return (
    <div className="toggle-prices">
      <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "& .Mui-selected":{
            color:"var(--blue) !important",
        },
        borderColor:"var(--blue)",
        border:"unset !important",
        "& .MuiToggleButtonGroup-grouped":{
            border:"1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
        },
        "& .MuiToggleButton-standard":{
            color:"var(--blue)"
        },
      }}
    >
      <ToggleButton value="prices" className="toggle-btn" >Price</ToggleButton> {/*The value attribute name (i.e prices,market_caps and total volumes) is same as that comes in API */}
      <ToggleButton value="market_caps" className="toggle-btn">Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className="toggle-btn">Total Volume</ToggleButton>

    </ToggleButtonGroup>
    </div>
  );
}
