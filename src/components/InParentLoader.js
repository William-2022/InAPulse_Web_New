import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const InParentLoader = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box width="15%">
        <CircularProgress
          size={"100%"}
          sx={{ "& .MuiCircularProgress-svg": { color: "grey.400" } }}
        />
      </Box>
    </Box>
  );
};

export default InParentLoader;
