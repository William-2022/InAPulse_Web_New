import React from "react";
import { step1, step2, step3, step4 } from "../../images/HowItWorks";
import {
  Box,
  Button,
  Stack,
  useMediaQuery,
  Tooltip,
  Typography,
  Grid,
} from "@mui/material";
import Title from "../../components/general/Title";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const HowItWorks = () => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const steps = [
    {
      title: "Enter pickup and drop-off locations",
      icon: step1,
    },
    {
      title: "Confirm and pay for your order",
      icon: step2,
    },
    {
      title: "Your order is on the way",
      icon: step3,
    },
    {
      title: "You receive your order",
      icon: step4,
    },
  ];
  return (
    <Box
      p={"2% 6% 10% 6%"}
      width={"100%"}
      sx={{ backgroundColor: "background.secondary" }}
    >
      <Title
        mt={lg && md ? 0 : 3}
        mb={xs && sm ? 0 : 2}
        title="How It"
        highlight="Works"
        textAlign="center"
      />
      <Grid
        container
        direction="row"
        columns={4}
        columnSpacing={20}
        rowSpacing={5}
        sx={{
          paddingTop: "5%",
        }}
      >
        {steps.map((item, index) => (
          <Grid 
          data-aos='fade-down' 
          data-aos-delay={index * 500}
          data-aos-duration={9}
          data-aos-offset="10"
          data-aos-once="true"
          item lg={1} md={2} xs={2} sx={{ padding: "0", margin: "0" }}>
            <Box
              component="img"
              sx={{ height: xs && sm ? 140 : 110, mb: 1 }}
              src={item.icon}
            >
            </Box>
            <Typography fontSize={xs && sm ? 20 : 14}>{item.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
