import { Box, CircularProgress } from "@mui/material";
import React from "react";

const OverScreenLoader = ({isLoading}) => {

  return (
    <>
      {isLoading && (
        <Box
          className={"Loader"}
          sx={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            top:0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            bgcolor: " rgba(236, 236, 236,0.5)",
          }}
        >
          <Box sx={{ width: "100px" }}>
            <CircularProgress
              size={"100%"}
              sx={{ "& .MuiCircularProgress-svg": { color: "grey.400" } }}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default OverScreenLoader;
