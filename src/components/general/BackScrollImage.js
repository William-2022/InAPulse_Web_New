import { Box, useMediaQuery } from "@mui/material";
import React from "react";

function BackScrollImage({
  image,
  images,
  height = 600,
  size = "cover",
  position = "top",
}) {
  const md = useMediaQuery((theme) => theme.breakpoints.down("md"));

  let backgroundImage =
    image ||
    (images && images.map((image) => (backgroundImage += `url(${image})`)));

  return (
    <Box
      sx={{
        height: md ? 400 : height,
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        backgroundSize: size,
      }}
    />
  );
}

export default BackScrollImage;
