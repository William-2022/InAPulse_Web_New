import React from "react";
import { Card, CardContent, CardMedia, Box, Typography, useMediaQuery } from "@mui/material";

const ItemCard = ({ item }) => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  return (
    <Card
      sx={{
        minWidth:md && lg && xl ? 400 : 200,
        height: md && lg && xl ? 300 : 190,
        padding: "2% 0",
        backgroundColor: item.color,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          sx={{ width:md && lg && xl ?  230 : 170 }}
          image={item.image}
          alt="Live"
        />
        <CardContent sx={{fontSize: 22, color: "text.white",display:"flex",flexDirection:"column",justifyContent:"space-around" }}>
          <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: 18 }}>Time: {item.time}</Typography>{" "}
          <Typography sx={{ fontSize: 18 }}>
            Distance: {item.distance}
          </Typography>{" "}
          <Typography sx={{ fontSize: 18 }}>Cost: {item.cost}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ItemCard;
