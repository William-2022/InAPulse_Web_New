import React from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

const ItemCard = ({ list}) => {
  
  return (
    <Card
      sx={{boxShadow:"none"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={list.icon}
          alt="Live"
        />
        <CardContent >
          <Typography sx={{ fontSize: 20}}>
            {list.label}
          </Typography>
          </CardContent>
      </Box>
    </Card>
  );
};

export default ItemCard;
