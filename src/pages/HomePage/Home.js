import React from "react";
import Calculator from "../../components/Calculator/Calculator";
import { Box } from "@mui/material";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Intro from "../../components/Intro";

export default function Home() {
  return (
    <Box sx={{ transform: "translateY(-60px)", width:'100%'}}>
      <Intro />
      <Calculator />
      <WhyChooseUs />
      <HowItWorks />
    </Box>
  );
}
