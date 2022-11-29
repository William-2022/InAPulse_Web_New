import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../images/not_found.png";

const DoestNotExist = () => {
  const navigate = useNavigate();

  const mdBreakPoint = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pb: "50px",
        gap: "50px",
      }}
    >
      <Box
        component={"img"}
        sx={{
          width: mdBreakPoint ? "40%" : "80%",
          maxWidth: "1200px",
        }}
        src={notFound}
      />
      <Typography variant={mdBreakPoint ? "h2" : "h4"} textAlign={"center"}>
        Oops! Looks Like the page does not exist.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button
          sx={{ fontWeight: "600", height: "50px", width: "150px" }}
          onClick={() => navigate("/")}
          variant="contained"
        >
          back to home
        </Button>
        <Button
          sx={{
            fontWeight: "600",
            height: "50px",
            width: "150px",
            color: "black",
          }}
          onClick={() => navigate("/FAQs")}
          variant="outlined"
        >
          FAQs
        </Button>
      </Box>
    </Box>
  );
};

export default DoestNotExist;
