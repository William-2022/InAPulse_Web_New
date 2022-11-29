import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import Title from "../../components/general/Title"

const GetQuote = () => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  return (
    <Box>
      <Title title="Get an estimate for a " highlight="Delivery"/>
      <Box
        sx={{
          width: "100%",
          height:"61vh",
          marginTop:"1%",
          alignSelf: "center",
          bgcolor: "background.paper",
          borderStyle: "solid",
          borderwidth: "1px",
          borderColor: "grey.400",
          borderRadius: 3,
          padding: xs && sm ? "10% 25%": "15% 2% 0 4%",
          }}
      >
        <Typography textAlign="center" variant="h7" fontWeight={"bold"}>
          Please enter the pickup and dropoff location
        </Typography>
        <Calculator
          topMargin={"10%"}
          authed
          bgColor="transparent"
          direction=""
        />
      </Box>
    </Box>
  );
};

export default GetQuote;
