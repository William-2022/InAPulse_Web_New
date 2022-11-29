import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";

import BackScrollImage from "../general/BackScrollImage";
import { buildingImg } from "../../images/AboutUs";
import Body from "../general/Body";
import Title from "../general/Title";
import "./Description.css";

function Description() {
  const md = useMediaQuery(theme=>theme.breakpoints.up("md"));

  return (
    <Box sx={{ position: "relative" }}>
      <BackScrollImage image={buildingImg} height={400} />
      <Grid
        container
        sx={{
          width: md ? "70%" : "100%",
          margin: "0 auto",
          my: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container item xs={12} p={3} my={5} wrap="wrap">
          <Box maxWidth={md ? "100%" : "100%"}>
            <Title title="We are " highlight="In A Pulse" />
            <Body mt={5}>
              Welcome to In A Pulse Doorstep Delivery! We are an app-based,
              on-demand courier service in Toronto. Our mission is to make it
              easier for people by offering fast, affordable and reliable
              delivery service. We get your package delivered professionally,
              safely and accurately to your intended destination.
            </Body>
            <Body mt={2}>
              All the packages will be delivered within same day by placing an
              order straight from your smartphone, tablet, or desktop. We know
              that some deliveries require special care, which is why give the
              utmost care and privacy for all our deliveries. Our long term
              expert drivers and employees are all cross trained on every
              specialized customer need and requirement to ensure quality and
              expert deliveries.
            </Body>
            <Body mt={2}>
              For those who like to plan, In A Pulse has an option to schedule
              an order delivery up to 30 days in advance. Whether you are at
              home, at the office or in the park with your family, you can enter
              specific instructions and you can ask to receive the package at
              the door, in front of the building or, anywhere.
            </Body>
            <Body mt={2}>
              Say goodbye to time-wasting phone calls, the tedious measuring and
              weighing of packages. In A Pulse offers secure and convenient
              paperless transactions for all of your personal and business
              courier needs. Just download the app, and use it when you need it!
              For further information about how our service can benefit you or
              your company, please contact us and we would be happy to assist at
              your earliest convenience.
            </Body>
          </Box>
        </Grid>
      </Grid>
      <BackScrollImage image={buildingImg} height={400} position='center' />
    </Box>
  );
}

export default Description;
