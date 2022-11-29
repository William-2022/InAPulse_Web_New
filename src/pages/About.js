import React from "react";
import { useMediaQuery, Box, useTheme, Stack } from "@mui/material";
import { useNavigate } from "react-router";

import "./Quote-page/Quote.css";
import Advantages from "../components/AboutUs/Advantages";

import deliveryManIcon from "../images/AboutUs/deliveryMan.svg";
import Description from "../components/AboutUs/Description";
import Title from "../components//general/Title";
import Body from "../components/general/Body";
import Button from "../components/general/Button";
export default function About() {
  let navigate = useNavigate();
  let theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Description />
      <Stack
        sx={{
          backgroundColor: "primary.main",
          minHeight: 250,
          justifyContent: "center",
          alignItems: md ? "flex-start" : "center",
          position: "relative",
          pr: md ? 0 : 3,
          py: 3,
          paddingLeft: md ? "20%" : 3,
        }}
      >
        <Title starting={44} zIndex={1} center color={"white"}>
          We are hiring delivery partners
        </Title>
        <Body mb={4} mt={2} center sx={{ color: "primary.contrastText" }}>
          Be your own boss, work when you want, make what you need now!
        </Body>
        <Button
          sx={{
            borderRadius: 3,
            height: 60,
            backgroundColor: "white",
            zIndex: 1,
            color: "primary.main",
            fontWeight: "bolder",
            fontSize: md ? 25 : 18,
            px: 5,
            "&:hover": {
              backgroundColor: "#a09d9d",
              color: "white",
            },
          }}
          variant="contained"
          onClick={() => navigate("/Careers")}
        >
          Sign Up Today!
        </Button>
        <img
          src={deliveryManIcon}
          alt="delivery man logo"
          style={{
            height: 350,
            position: "absolute",
            right: "10%",
            zIndex: 0,
            bottom: 20,
            display: md ? "flex" : "none",
          }}
        />
      </Stack>
      <Advantages />
    </Box>
  );
}
