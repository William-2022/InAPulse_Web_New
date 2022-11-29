import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "aos/dist/aos.css";
import { join1, join2, join3 } from "../../../images/HowItWorks";
import Title from "../../general/Title";
import Body from "../../general/Body";

function Step({ item, index }) {
  const theme = useTheme();
  const joins = [null, join1, join2, join3];
  const md = useMediaQuery(theme.breakpoints.down(800));

  return (
    <Grid
      container
      data-aos-offset={0}
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="center-center"
      data-aos-anchor={".how_" + index}
      sx={{
        py: 3,
        px: 3,
        maxWidth: 1400,
        mx: "auto",
        width: "100%",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {index % 2 === 0 && !md && (
        <Grid
          item
          xs={6}
          sx={{
            position: "relative",
          }}
        >
          {index !== 4 && (
            <Box component="span">
              <Box
                component="img"
                alt={"trail-" + index}
                src={joins[index]}
                sx={{
                  width: "80%",
                  position: "absolute",
                  right: '-15%',
                  bottom: '20%',
                }}
              />
            </Box>
          )}
        </Grid>
      )}
      <Grid
        item
        xs={md ? 12 : 6}
        sx={{
          position: "relative",
          height: md ? undefined : 300,
        }}
      >
        <Box
          sx={[
            {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            },
            !md && {
              position: "absolute",
            },
          ]}
        >
          <Box
            component="img"
            sx={{ height: 150, mb: 1 }}
            src={item?.icon}
            alt={item?.title + "-img"}
            className={"how_" + index}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Title component="h4" starting={40} sx={{ color: "#6e7378" }}>
              0{index}
            </Title>
            <Title my={2} starting={40}>
              {item?.title}
            </Title>
            <Body>{item?.body}</Body>
          </Box>
        </Box>
      </Grid>
      {index % 2 !== 0 && !md && (
        <Grid
          item
          xs={6}
          sx={{
            position: "relative",
          }}
        >
          <Box component="span">
            <Box
              component="img"
              alt={"trail-" + index}
              src={joins[index]}
              sx={[
                {
                  width: index % 3 === 0 ? "70%" : "90%",
                  left: "-30%",
                  bottom: index % 3 === 0 ? '4%' : "15%",
                  position: "absolute",
                },
              ]}
            />
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default Step;
