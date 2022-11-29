import { Box } from "@mui/material";
import React from "react";
import { formatPhone } from "../helpers/formatter";
import Body from "./general/Body";

function ContactText({ children, text, format }) {
  if (format === "phone") {
    text = formatPhone(text);
  }

  return (
    <Box
      display="flex"
      direction="row"
      sx={{
        py: 3,
        ml: 3,
        "> svg": {
          width:"50px",
          transform: "scale(1.5)",
          pr: 4,
        },
      }}
    >
      {children}
      <Body sx={{ fontSize: 20 }}>{text}</Body>
    </Box>
  );
}

export default ContactText;
