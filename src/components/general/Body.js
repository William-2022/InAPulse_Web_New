import { Typography, useMediaQuery } from "@mui/material";
import React from "react";

function Body({
  children,
  center,
  sx,
  starting = '18pt',
  end,
  dark,
  fullWidth,
  color,
  ...other
}) {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Typography
      fontSize={lg ? starting : md ? starting - 2 : end || starting - 4}
      textAlign={center ? "center" : "left"}
      sx={[
        {
          width: fullWidth ? "100%" : undefined,
          color: color ? color : dark ? "secondary.contrastText" : "text.main",
          "& span": { color: "primary" },
        },
        sx,
      ]}
      {...other}
    >
      {children}
    </Typography>
  );
}

export default Body;
