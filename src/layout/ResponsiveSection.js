import { Box, useMediaQuery } from "@mui/material";
import React from "react";

function ResponsiveSection({
  xl = "10%",
  lg = "5%",
  sm = 3,
  noPx,
  children,
  bg = "background.main",
  ...other
}) {
  const lgBreak = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const xlBreak = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const px = !noPx ? (xlBreak ? xl : lgBreak ? lg : sm) : 0;

  return (
    <Box component="section" bgcolor={bg} px={px} {...other}>
      {children}
    </Box>
  );
}

export default ResponsiveSection;
