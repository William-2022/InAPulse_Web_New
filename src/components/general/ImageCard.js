import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Body from "./Body";
import Title from "./Title";

function ImageCard({ image, title, side = "left", children, ...other }) {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const flexCenter = {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <Grid
      container
      sx={{
        bgcolor: "secondary.dark",
        minHeight: 450,
        borderRadius: 7.5,
        overflow: "hidden",
        justifyContent: "center",
        flexDirection: side === "left" ? "row" : "row-reverse",
      }}
      {...other}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{ backgroundImage: `url(${image})`, backgroundSize: "cover", height:450 }}
      />
      <Grid p={md ? 8 : 4} item xs={12} md={5} sx={flexCenter}>
        <Title fullWidth dark>
          {title}
        </Title>
        <Body fullWidth dark mt={3}>
          {children}
        </Body>
      </Grid>
    </Grid>
  );
}

export default ImageCard;
