import React from "react";
import phone from "../../images/Phone.jpg";
import "./Quote.css";
import Calculator from "../../components/Calculator/Calculator";
import { useMediaQuery, useTheme } from "@mui/material";


// legacy

export default function Quote() {
  const theme=useTheme()
  const mdBreakPoint = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className="quote-box">
      <div className="quote-text-box">
        <h1 className="quote-title">Pricing Estimator</h1>
        <p className="text">
          {" "}
          In A Pulse's pricing is based on an algorithm that uses time and
          distance variables to minimize cost and maximize efficiency!
        </p>
        <p className="text">
          {" "}
          Get an instant quote by simply entering the item's pickup and drop-off
          location into the shipping calculator.
        </p>
      </div>
      <div className="quote-img-container">
        {mdBreakPoint ? (
          <img className="quote-img" src={phone} alt="quotepage-img" />
        ) : (
          <img
            className="quote-img"
            src={phone}
            alt="quotepage-img"
            style={{ width: "100vw", height: "45vh" }}
          />
        )}
      </div>
      <Calculator />
    </div>
  );
}
