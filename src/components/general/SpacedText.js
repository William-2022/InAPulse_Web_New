import { Box } from "@mui/material";
import React from "react";
import Body from "./Body";

function SpacedText({ bold, title, value, ...other }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontWeight: bold ? "bold" : undefined,
      }}
      {...other}
    >
      <Body sx={{ fontWeight: "inherit" }}>{title}</Body>
      <Body sx={{ fontWeight: "inherit", color: "inherit" }}>{value}</Body>
    </Box>
  );
}

export default SpacedText;
