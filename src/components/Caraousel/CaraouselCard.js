import { Stack, Typography,useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CaraouselCard = ({ title, content, imgUrl }) => {
  const sm =useMediaQuery(theme=>theme.breakpoints.up("sm"))
  return (
    <Stack
      sx={{ color: "black", px: 5, py: 10}}
      direction={"column"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        sx={{ width: sm?"30%":"40%", height: "fit-content", ml: "5%" }}
        component={"img"}
        alt={title}
        src={imgUrl}
      />
      <Typography mb={5} variant={sm?"h4":"h6"} textAlign="center" fontWeight="bold">
        {title}
      </Typography>
      <Typography textAlign="center" maxWidth="50%" >{content}</Typography>
    </Stack>
  );
};

export default CaraouselCard;
