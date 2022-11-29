import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function CardDesign({ title, text, logo, children }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: "10px",
        maxWidth: 545,
        height: "96%",
        maxHeight: "99%",
        padding: "3% 0",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center" }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 100, padding: "4%" }}
          image={logo}
          alt="logo"
        />

        <CardContent>
          <Box>
            <Typography color="primary.light" component="div" variant="h6">
              {title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {text}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
export default CardDesign;
