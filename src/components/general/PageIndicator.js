import { Box } from "@mui/material";
import React from "react";
import Body from "./Body";

function PageIndicator({ current, length, onClick, showPage }) {
  const style = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      position: "relative",
    },
    indicator: {
      height: 10,
      cursor: "pointer",
      borderRadius: 1,
    },
  };

  let indicators = [];
  for (let index = 0; index < length; index++) {
    indicators.push(
      <Box width={95 / length + "%"} key={index} sx={{ position: "relative" }}>
        {index === current && showPage && (
          <Box
            sx={{
              position: "absolute",
              height: 30,
              width: 30,
              bgcolor: "secondary.dark",
              top: -20,
              left: 0,
              right: 0,
              mx: "auto",
              borderRadius: "50px 50px 0 0 ",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                "&:after ": {
                  content: '""',
                  height: 15,
                  width: 15,
                  position: "absolute",
                  backgroundColor: "white",
                  right: -15,
                  top: 5,
                  zIndex: 5,
                  borderRadius: 40,
                },
                "&:before ": {
                  content: '""',
                  height: 15,
                  width: 15,
                  backgroundColor: "secondary.dark",
                  position: "absolute",
                  right: -7.5,
                  top: 13,
                  overflow: "hidden",
                },
              }}
            />
            <Body dark>{index + 1}</Body>
            <Box
              sx={{
                "&:after ": {
                  content: '""',
                  height: 15,
                  width: 15,
                  position: "absolute",
                  backgroundColor: "white",
                  zIndex: 5,
                  left: -15,
                  top: 5,
                  borderRadius: 40,
                },
                "&:before ": {
                  content: '""',
                  height: 15,
                  width: 15,
                  backgroundColor: "secondary.dark",
                  position: "absolute",
                  left: -7.5,
                  top: 13,
                  overflow: "hidden",
                },
              }}
            />
          </Box>
        )}
        <Box
          key={index}
          onClick={() => onClick(index)}
          sx={[
            style.indicator,
            {
              width: "100%",
              bgcolor: index <= current ? "secondary.dark" : "secondary.light",
            },
          ]}
        />
      </Box>
    );
  }

  return <Box sx={style.container}>{indicators}</Box>;
}

export default PageIndicator;
