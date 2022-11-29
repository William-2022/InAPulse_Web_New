import { useEffect } from "react";
import React from "react";
import { Box } from "@mui/material";
import AOS from "aos";

import { step1, step2, step3, step4 } from "../../../images/HowItWorks";
//import { Frame } from "../../../images/Frame.png";


import Title from "../../general/Title";
import Step from "./Step";

const steps = [
  {
    title: "Enter pickup and drop-off locations",
    body: "You can start by entering the pickup and drop-off location details. Based on the distance and timing, we provide you with a price quote.",
    icon: step1,
  },
  {
    title: "Confirm and pay for your order",
    body: "Enter all of your details, confirm and pay for the order. We accept VISA, Mastercard for all our transactions. You will be notified with the confirmation when it is complete.",
    icon: step2,
  },
  {
    title: "Your order is on the way",
    body: "As soon as we receive payment for the order, we will find a delivery partner who will help get your items within one hour. But real-time ETA's depend on the road conditions at that time.",
    icon: step3,
  },
  {
    title: "You receive your order",
    body: "Our delivery partner will go to the pick-up location to retrieve the package and then delivers the parcel to the requested destination. Meanwhile, you can also track them live from our website or app.",
    icon: step4,
  },
];

export default function HowItWorks() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Box pt={8} height={1800} overflow='hidden' bgcolor="background.secondary">
      <Title mb={5} center title="How It Works!" />
      {steps.map((step, index) => (
        <Step key={index} index={index + 1} item={step} />
      ))}
    </Box>
  );
}
