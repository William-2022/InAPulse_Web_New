import React from "react";
import Section from "../../general/Section";
import ResponsiveSection from "../../../layout/ResponsiveSection";
import Title from "../../general/Title";

import { Box, Grid, Typography, Paper } from "@mui/material";
import CardDesign from "./CardDesign";
import fastDelivery from "../../../images/WhyUs/fastDelivery.png";
import trackOrder from "../../../images/WhyUs/trackOrder.png";
import supportStaff from "../../../images/WhyUs/supportStaff.png";
import environmentFriendly from "../../../images/WhyUs/environmentFriendly.png";
import scheduleForLater from "../../../images/WhyUs/scheduleForLater.png";
import makePaymentEasy from "../../../images/WhyUs/makePaymentEasy.png";
import { useMediaQuery } from "@mui/material";
import servicespic from "../../../images/V2/servicespic.jpg";
import LabeledImage from "../../general/LabeledImage";
import GroupIcon from "@mui/icons-material/Group";
import ImageCard2 from "../../general/ImageCard2";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const services = [
  {
    color: "card.orange",
    icon: <GroupIcon fontSize="large" />,
    title: "Fast Deliveries",
    text: "Our goal is to deliver packages within one hour. Real time ETA’s are dependent on road conditions.",
  },
  {
    color: "card.navy",
    icon: <BusinessCenterIcon fontSize="large" />,
    title: "Track your order",
    text: "Real time ETA’s allow customer to track delivery partners live on the platform.",
  },
  {
    color: "card.maroon",
    icon: <ShoppingCartCheckoutIcon fontSize="large" />,
    title: "Make payment easily",
    text: "All payments made are 100% secure and safe. We accept VISA, Mastercard, and VISA Debit cards for all transactions.",
  },
];

const WhyChooseUS = () => {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));

  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const styles = {
    paperContainer: {
      height: sm && xs ? 385 : 685,
      backgroundImage: `url(${servicespic})`,
      padding: "2% 50% 2% 5%",
      marginTop: "2%",
    },
  };

  return (
    <Box sx={{position:"relative", padding: sm && xs ? "2% 6% 0 0":"7% 4% 0 0",marginBottom: sm && xs ? null:"25%",height: sm && xs ? 592 : 880}} bgcolor="background.secondary">
      <Title title="Our" textAlign="center" highlight="Services" sx={{padding: "0 0 0 5%" }} />
      <Typography sx={{ textAlign: "center", padding: "2% 0 0 4%" }}>
        We are a startup, urban delivery company serving the GTA area. We offer
        fast & affordable same-day as well as scheduled pickups & deliveries.You
        order, we deliver. We do our best to serve you.
      </Typography>
      {/* <Box style={styles.paperContainer}>
        <Box sx={{ display: "flex", flexDirection: sm && xs ? "row" : "column",justifyContent:"space-between",backgroundColor:"background.main" }}>
          {services.map((item) => (
            <ImageCard2 list={item} />
          ))}
        </Box>
      </Box> */}
      <Box sx={{ position:"absolute",padding: sm && xs ?  "0% 45% 2% 10%" :"0% 45% 2% 0%", marginTop: "2%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: sm && xs ? "row" : "column",
            justifyContent: "space-between",
          }}
        >
          {services.map((item) => (
            <ImageCard2 list={item} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          left: 0,
          top: 0,
          objectFit: "cover",
          width: "116%",
          height: "77%",
          minWidth: "400px",
          display: md ? null : "none",
          zIndex: 1,
        }}
        component={"img"}
        alt="landingphoto"
        src={servicespic}
      />
    </Box>
  );
};

export default WhyChooseUS;
