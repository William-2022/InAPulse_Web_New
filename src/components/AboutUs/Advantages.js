import React from "react";
import { Stack } from "@mui/material";

import conductIcon from "../../images/AboutUs/conduct.svg";
import valueIcon from "../../images/AboutUs/value.svg";
import leaderIcon from "../../images/AboutUs/leader.svg";
import AdvantageItem from "./AdvantageItem";

export default function Advantages() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      px={3}
      my={15}
    >
      <AdvantageItem icon={valueIcon} title="Our Values">
        We value innovation in the marketplace, excellence in customer service,
        and integrity and respect in our actions.
      </AdvantageItem>
      <AdvantageItem icon={leaderIcon} title="Our Leadership">
        Our leadership team makes sound business decisions and executes them
        with strong leadership and accountability.
      </AdvantageItem>
      <AdvantageItem icon={conductIcon} title="Our Code of Conduct">
        We strive to build trusted relationships with our customers, employees,
        and community partners.
      </AdvantageItem>
    </Stack>
  );
}
