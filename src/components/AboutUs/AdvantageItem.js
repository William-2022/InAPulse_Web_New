import { Box, Stack } from "@mui/material";
import React from "react";
import Body from "../general/Body";
import Title from "../general/Title";

function AdvantageItem({ icon, title, children }) {
  return (
    <Stack spacing={3} sx={{ alignItems: "center",mt:5, justifyContent: "center" }}>
      <img
        src={icon}
        alt={title.replace(" ", "-") + "-icon"}
        style={{ width: 100, height: 100 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 350,
          minHeight:200,
          justifyContent: "flex-start",
        }}
      >
        <Title center starting={34}>
          {title}
        </Title>
        <Body mt={2} center>
          {children}
        </Body>
      </Box>
    </Stack>
  );
}

export default AdvantageItem;
