import React from "react";
import { Box } from "@mui/material";

const Image = ({ src = "", sx, className,imgStyle,onClick }) => {
  return (
    <Box onClick={onClick} sx={{ width: "100%", ...sx }}>
      <img
        className={className}
        src={src}
        alt="customImage"
        style={{ width: "100%", ...imgStyle }}
      />
    </Box>
  );
};

export default Image;
