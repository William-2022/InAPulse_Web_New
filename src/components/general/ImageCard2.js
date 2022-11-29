import React from "react";
import { Card, CardContent, CardMedia, Box, Typography , useMediaQuery} from "@mui/material";

const ImageCard2 = ({ list }) => {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));

  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Card sx={{ width: sm && xs ? "29%":md?"30%" : "190%",padding:sm && xs ?null:"0 6%", marginTop:sm && xs ? null : "20%" ,height: 220,color:"text.white" ,backgroundColor:list.color}}>
      <Box
        sx={{
          padding: sm && xs ? "10% 5% 0 5%" : "6% 5% 0 1%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia alt="Live">
        {list.icon}
        </CardMedia>
        <CardContent sx={{padding:"7px 1px"}}>
          <Typography sx={{ fontSize: sm && xs ? 16 : 20,fontWeight:"bold",textAlign:"center" }}>{list.title}</Typography>
          <Typography sx={{ fontSize: sm && xs ? 14 : 18,textAlign:"center" }}>{list.text}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ImageCard2;
