import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import ResponsiveSection from "../../layout/ResponsiveSection";
import Button from "../general/Button";
import PageIndicator from "../general/PageIndicator";
import Title from "../general/Title";
import {
  ordersScreen,
  completeScreen,
  processScreen,
  startScreen,
} from "../../images/Career";
import Section from "../general/Section";

export default function HowItWorksDriver() {
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const [step, setStep] = useState(0);

  const steps = [
    {
      text: "Click “Start” to begin receiving order requests.",
      img: startScreen,
    },
    {
      text: "Easily update status and get access to necessary info.",
      img: processScreen,
    },
    {
      text: "Finish the order by taking a picture and adding comments.",
      img: completeScreen,
    },
    { text: "Get access to previous orders.", img: ordersScreen },
  ];

  const renderButton = (forward) => (
    <Button
      compact
      sx={{
        fontSize: sm ? 80 : 60,
      }}
      onClick={() => setStep((old) => (forward ? ++old : --old))}
    >
      {forward ? (
        <ChevronRight fontSize="inherit" />
      ) : (
        <ChevronLeft fontSize="inherit" />
      )}
    </Button>
  );

  //console.log(step);
  return (
    <ResponsiveSection bg="background.main">
      <Section title="How it works" centerTitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box width={sm ? 80 : 60}>{step !== 0 && renderButton()}</Box>

          <Box
            component="img"
            src={steps[step]?.img}
            alt={"how-it-works_" + step}
            sx={{
              maxWidth: 200,
              mb: 5,
              mx: sm ? 6 : 3,
            }}
          />
          <Box width={sm ? 80 : 60}>
            {step !== steps.length - 1 && renderButton(true)}
          </Box>
        </Box>
        <Title
          starting={28}
          sx={{
            maxWidth: 500,
            mb: 2,
            height: 100,
          }}
          center
        >
          {steps[step]?.text}
        </Title>
        <Box width={sm ? 300 : "100%"}>
          <PageIndicator
            length={steps.length}
            current={step}
            onClick={setStep}
          />
        </Box>
      </Section>
    </ResponsiveSection>
  );
}
