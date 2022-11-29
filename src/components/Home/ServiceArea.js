import { Box, useMediaQuery, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Title from "../general/Title";
import map from "../../images/V2/map.png";
import { Paper, styled } from "@mui/material";

const ServiceArea = () => {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    height: 60,
    lineHeight: "60px",
    borderRadius:"50px",
    backgroundColor:"background.secondary"
  }));
  const partners = [
    { name: "Pharmacy Shops" },
    { name: "Auto Shops" },
    { name: "Flower Shops" },
    { name: "Warehouses" },
    { name: "Many Local Small Businesses" },
  ];
  return (
    <Box
      sx={{ margin: lg && md ? "2% 0" : "0 0 15% 0", padding: "0 6%" }}
      component="section"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <Title mt={lg && md ?0:4} title="Trusted" highlight="By" />
      <Box  sx={{ display:"flex",flexDirection:lg&&md?"row":"column",justifyContent:"space-between",width:"100%" }} container>
        <Box mt={lg && md ?10:2} width={md ? "40%" : "100%"}>
          <Typography fontSize="large" textAlign={lg&&md?null:"center"}>SERVING GTA AREA</Typography>
          <Typography mt={lg && md ?0:2} textAlign={lg&&md?null:"center"}>
            Need something delivered to Oshawa? Newmarket? Burlington? In a
            Pulse has got you covered. We deliver from the Halton Region all the
            way across to Durham. With In a Pulse, we guarantee your package
            will be delivered in a safe and timely manner.
          </Typography>
          <Box
            sx={{
              pt: 6,
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {partners.map((elevation) => (
              <Item key={elevation}>{elevation.name}</Item>
            ))}
          </Box>
        </Box>
        <Box
          mt={10}

          component={"img"}
          alt="coveragemap"
          width={md ? "40%" : "90%"}
          src={map}
        />
      </Box>
    </Box>
  );
};

export default ServiceArea;
