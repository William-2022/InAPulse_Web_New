import React from "react";
import { Typography, Card } from "@mui/material";

function ItemCard({ icon, ItemType, active, onClick }) {
  return (
    <>
      <Card
        sx={{
          width: 150,
          height: 107,
          display: "flex",
          backgroundColor: active ? "primary.main" : "transparent",
          color: active ? "white" : "text.main",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderWidth: "2px",
          cursor: "pointer",
          borderColor: active ? "primary.main" : "secondary.dark",
          "& svg": {
            height: "50%",
            width: "80%",
          },
        }}
        onClick={onClick ? onClick : null}
      >
        {icon}

        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {ItemType}
        </Typography>
      </Card>
    </>
  );
}

export default ItemCard;
