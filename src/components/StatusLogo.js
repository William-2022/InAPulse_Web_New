import { Box } from "@mui/material";
import React from "react";

import { orderDisplayText } from "../helpers/OrderStatus";
import Body from "./general/Body";

const StatusLogo = ({ status }) => {
  const bodyStyle = { starting: 18, end: 16 };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="img"
        alt={status + "-icon"}
        sx={{ height: 30, pr: 2 }}
        src={orderDisplayText[status].icon}
      />
      <Body {...bodyStyle}>{orderDisplayText[status].label}</Body>
    </Box>
  );
};

export default StatusLogo;
