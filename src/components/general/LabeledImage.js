import { Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";

import Body from "./Body";

function LabeledImage({ list, sx, perRow = 3, ...other }) {
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));

  let isEvenRow = perRow % 2 === 0;

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns:
          !sm && isEvenRow
            ? `repeat(${perRow / 2}, 1fr)`
            : `repeat(${perRow}, 1fr)`,
        gridAutoRows: "150px",
        mt: 3,
        sx,
      }}
      {...other}
    >
      {list.map(({ label, icon, svg }, index) => (
        <Stack
          sx={{
            "> svg": { transform: md ? "scale(3)" : "scale(2)" },
            "> img": { transform: md ? "scale(2)" : "scale(1.5)" },
            justifyContent: "center",
            alignItems: "center",
            pt: 5,
          }}
          key={index}
        >
          {svg && <Box component="img" alt={label + " img"} src={svg} />}
          {icon && icon}
          <Body
            mt={5}
            sx={{ fontWeight: "bold", textAlign: "center", color: "#003579" }}
          >
            {label}
          </Body>
        </Stack>
      ))}
    </Box>
  );
}

export default LabeledImage;