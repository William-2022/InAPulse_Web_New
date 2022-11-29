import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/general/Button";

import Title from "../components/general/Title";
import { errorImg } from "../images";

const ErrorPage = () => {
  const navigate = useNavigate();
  const mdBreakPoint = useMediaQuery(theme=>theme.breakpoints.up("md"));
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
        src={errorImg}
      />
      <Title center>
        Oops! Looks like something went wrong. Please try again!
      </Title>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 500,
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Button sx={{ flex: 1 }} onClick={() => navigate("/")}>
          back to home
        </Button>
        <Button
          sx={{ flex: 1 }}
          onClick={() => navigate("/FAQs")}
          variant="outlined"
          color="secondary"
        >
          FAQs
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
