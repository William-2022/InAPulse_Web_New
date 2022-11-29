import { Typography } from "@mui/material";
import React from "react";

function PageTitle({ title, hightlight, center, ...other }) {
  return (
    <Typography
      variant="h2"
      fontWeight="bolder"
      textAlign={center ? "center" : "left"}
      {...other}
    >
      {title} <span className="inapulse-navy">{hightlight}</span>
    </Typography>
  );
}

export default PageTitle;
