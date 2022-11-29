import React from "react";
import { Box } from "@mui/system";
import Body from "./general/Body";
const EstimateFlexRow = ({
  label,
  price,
  bold,
  minus,
  unit,
  moneySign = true,
  unitFix = 2,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        my: 1,
        mt: bold ? 3 : undefined,
      }}
    >
      <Body starting={18} fontWeight={bold ? "bold" : null}>
        {label}
      </Body>
      <Body starting={18} fontWeight={bold ? "bold" : null}>{`${
        minus ? "-" : ""
      }${moneySign ? "$" : ""}${price.toFixed(unitFix)}${
        unit ? unit : ""
      }`}</Body>
    </Box>
  );
};

export default EstimateFlexRow;
