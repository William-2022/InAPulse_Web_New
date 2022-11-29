import { Box, Paper, useMediaQuery } from "@mui/material";
import React from "react";

function Card({ children, sx, noMin, outline, elevate, ...other }) {
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      component={Paper}
      elevation={elevate ? 5 : sm ? 5 : 0}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        my: "auto",
        borderRadius: 5,
        maxWidth: noMin ? undefined : 600,
        border: !sm && outline ? "1px solid grey" : undefined,
        // width: "100%",
        p: 5 ,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

export default Card;
