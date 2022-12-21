import React from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";

import DriverContactForm from "../components/Career/DriverContactForm";
import HowItWorksDriver from "../components/Career/HowItWorksDriver";

import "./Quote-page/Quote.css";
import Title from "../components/general/Title";
import Body from "../components/general/Body";
import ResponsiveSection from "../layout/ResponsiveSection";
import WhatWeOfferDriver from "../components/Career/WhatWeOfferDriver";
import WhatYouNeed from "../components/Career/WhatYouNeed";

export default function DriverSignUp() {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box >
      <ResponsiveSection bgcolor="background.main" sx={{padding:"5% 12% 0 12%"}} >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="flex-start"
            alignContent="center"
            pr={md ? 3 : 0}
          >
            <Title className="quote-title">
              Deliver With <span>In A Pulse.</span>
            </Title>
            <Body my={4}>
              Want to earn competitive pay, keep 100% of your tips and create
              your own flexible schedule? Join us by signing up. As a delivery
              driver, you can be your own boss and enjoy the flexibility of
              choosing when, where, and how much money you earn. All you need is
              a mode of transportation (optional) and a smartphone to start
              making money. It’s that simple!
            </Body>
          </Grid>
          <Grid item container xs={12} md={6} justifyContent="center">
            <DriverContactForm />
          </Grid>
        </Grid>
      </ResponsiveSection>
      <WhatYouNeed />
      <WhatWeOfferDriver />
      <HowItWorksDriver />
    </Box>
  );
}
