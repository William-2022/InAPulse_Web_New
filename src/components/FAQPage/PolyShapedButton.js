import React from "react";
import { Box } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";

const PolyShapedButton = ({
  active,
  pointDirection = "left",
  bgColor = "primary.main",
  label,
  onClick,
}) => {
  let clipPath = "polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0)";
  if (pointDirection === "left") {
    clipPath = "polygon(20% 0, 0 50%, 20% 100%, 100% 100%, 100% 0);";
  }


  const mdBreakPoint=useMediaQuery(theme=>theme.breakpoints.up("md"))

  return (
    <Box
      sx={{
        clipPath: clipPath,
        width: mdBreakPoint?"282px":"180px",
        height: "72px",
        display: "flex",
        justifyItems: "center",
        padding: "1px",
        alignItems: "center",
        bgcolor: bgColor,
      }}
    >
      <Button
        disableRipple
        variant="contained"
        onClick={onClick}
        sx={{
          clipPath: clipPath,
          pl: pointDirection === "left" ? "50px" : "10px",
          pr: pointDirection === "left" ? "10px" : "50px",
          borderRadius: 0,
          color: active ? "white" : bgColor,
          fontWeight: "bold",
          fontSize: "25px",
          borderColor: "transparent",
          bgcolor: active ? bgColor : "#FFF",
          width: mdBreakPoint?"280px":"221px",
          textTransform: "none",
          height: "70px",
          "&:hover": {
            bgcolor: active?bgColor:"#FFF",
            color: active?"#FFF":bgColor,
          },
        }}
      >
        {label}
      </Button>
    </Box>
  );
};

export default PolyShapedButton;
