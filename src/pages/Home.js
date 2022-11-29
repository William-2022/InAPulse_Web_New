import React from "react";
import { Grid } from "@mui/material";

import HowItWorks from "../components/Home/HowItWorks";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";
import Intro from "../components/Home/Intro";
import WhatWeDo from "../components/Home/WhatWeDo/WhatWeDo";
import ServiceArea from "../components/Home/ServiceArea";
import EasyDelivery from "../components/Home/EasyDelivery";
import ForDrivers from "../components/Home/ForDrivers";
import BlogsHome from "../components/Home/BlogsHome";
// import BackScrollImage from "../components/general/BackScrollImage";
// import { drivingImg, laptopImg } from "../images";

export default function Home() {
  return (
    <Grid sx={{ width: "100%" }}>
      <Intro />
      <WhatWeDo />
      <WhyChooseUs />
      <ServiceArea/>
      <HowItWorks />
      <BlogsHome/>
      <EasyDelivery/>
    </Grid>
  );
}
