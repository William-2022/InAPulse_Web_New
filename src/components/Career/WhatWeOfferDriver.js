import { Grid } from "@mui/material";
import React from "react";

import { earnMoneyImg, getStartedImg, ownBossImg } from "../../images/Career";
import ResponsiveSection from "../../layout/ResponsiveSection";
import ImageCard from "../general/ImageCard";
import Section from "../general/Section";

function WhatWeOfferDriver() {
  const offers = [
    {
      title: "Be your own boss",
      body: "Unlike full-time jobs or fixed hours, when and where you work is totally up to you. Deliver near your home or in a place you're just visiting",
      img: ownBossImg,
    },
    {
      title: "Earn money on the go",
      body: "Clear and concise pay model lets you know how much you will get before accepting any order.",
      img: earnMoneyImg,
      side: "right",
    },
    {
      title: "Get started right away",
      body: "Our sign up process is easy and quick so you can start earning as soon as possible.",
      img: getStartedImg,
    },
  ];

  return (
    <ResponsiveSection bg="background.secondary">
      <Grid container>
        <Grid item xs={12} lg={10} mx="auto">
          <Section title="What we offer" centerTitle>
            {offers.map(({ title, body, img, side }, index) => (
              <ImageCard key={index} mb={5} image={img} title={title} side={side}>
                {body}
              </ImageCard>
            ))}
          </Section>
        </Grid>
      </Grid>
    </ResponsiveSection>
  );
}

export default WhatWeOfferDriver;
