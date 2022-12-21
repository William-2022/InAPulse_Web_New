import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useMediaQuery,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Hero from "../../images/V2/Hero.png";
import flowers from "../../images/V2/GYQ/flowers.png";
import meds from "../../images/V2/GYQ/meds.png";

import Title from "../general/Title";
import Button from "../general/Button";

import Calculator from "../Calculator/Calculator";
import ItemCard from "./ItemCard";

export default function Intro() {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  let navigate = useNavigate();

  const items = [
    {
      image: flowers,
      title: "Flowers",
      time: "30 mins",
      distance: "14 km",
      cost: "$18 - $28",
      color: "card.navy",
    },
    {
      image: meds,
      title: "Medication",
      time: "25 mins",
      distance: "5 km",
      cost: "$10 - $12",
      color: "card.maroon",
    },
  ];
  return (
    <Box sx={{ padding: "0 ", width: "100%" }}>
      <Box
        className="intro-container"
        sx={{
          display: sm && xs ? "flex" : null,
          bgcolor: md ? null : "white",
          justifyContent: md ? null : "center",
          alignItems: md ? "center" : "start",
          position: "relative",
          flexWrap: "noWrap",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            padding: md && lg && xl ? "0% 4% 1% 1%" : "1% 4% 10% 4%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: xs && sm && md ? "55vh" : "63vh",
            backgroundColor: "#00367A",
            "@media (width: 375px) and (height: 667px)  ": {
              height: "77vh",
            },
            "@media (width: 360px) and (height: 740px)  ": {
              height: "70vh",
            },
          }}
        >
          <Box
            sx={{
              padding: md && lg && xl ? "6% 4% 1% 6%" : "2% 1% 30% 1%",
              width: md && lg && xl ? "50%" : "99%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Title
              sx={{ color: "text.white", fontSize: lg ? "3.5em" : null }}
              title="We Deliver Anything"
              textAlign={
                xs && sm && md ? null : "center"
              }
            />

            <Title
              sx={{
                color: "text.white",
                padding: !sm ? "1% 0 5% 10%" : null,
                fontSize: lg ? "3.5em" : null,
              }}
              title="'In A Pulse'"
              textAlign={xs && sm && md ? null : "center"}
            />
            <Typography textAlign={xs && sm && md ? null : "center"}
              sx={{ color: "text.white", fontSize:xs && sm && md  ? 22 : 18,maxWidth: md ? "65%":null}}
            >
              Fast & affordable same-day delivery in the GTA in approximately 3
              hours.
            </Typography>
            {/* mobile image */}
            {xs && sm && md ? null : (
              <Box sx={{height:"85%",width:"100%",  
              "@media (width: 820px) and (height: 1180px)": {
                height: "120%",
                width: "95%",
              },}} component={"img"} alt="landingphoto" src={Hero} />
            )}
            <Button
              disableRipple
              variant="contained"
              sx={{
                px: lg ? 1 : 0,
                py: md && lg && xl ? 1.5 : 1,
                borderRadius: "50px",
                fontSize: md && lg && xl ? 18 : 16,
                width: xl ? "75%" : lg ? "55%" : md ? "60%" : "80%",
                margin: xl
                  ? "4% 0 7% 0"
                  : lg
                  ? "5% 0"
                  : md
                  ? "3% 0"
                  : "7% 9% 0% 9%",
              }}
              onClick={() => navigate("/SignUp")}
            >
              Sign UP
            </Button>
          </Box>
          <Box>
            {/* desktop image */}
            <Box
              sx={{
                display: lg && md ? null : "none",
                position: "absolute",
                left: sm && md ? "59%" : "20%",
                top: sm && md ? "3%" : "28%",
                right: sm && md ? "10%" : null,
                width: sm && md ? "35%" : "72%",
                height: lg ? "90%" : md ? "70%" : sm ? "60%" : "38%",
                minWidth: sm && md ? "400px" : "100px",
                zIndex: 2,
              
                "@media (width: 280px) and (height: 653px)": {
                  top: "35%",
                  left: "30%",
                  height: "29%",
                  width: "65%",
                },
              }}
              component={"img"}
              alt="landingphoto"
              src={Hero}
            />
          </Box>

          {/* <Body mt={2}>
          We do on-demand, emergency, time-critical and scheduled delivery.
          Estimate your delivery cost by simply entering your location details
          in our pricing calculator and place an order!
        </Body> */}

          {/* <LabeledImage list={categoryList} /> */}

          {/* <Stack
          mt={3}
          flexDirection={"row"}
          // gap={sm?6:1}
          justifyContent={md ? null : "center"}
          alignItems={"center"}
        >
          <Box
            component={"img"}
            src={googlePlayImg}
            alt="googeplay"
            sx={{
              cursor: "pointer",
              width: sm ? "200px" : "50%",
              mx: sm ? 2 : 1,
            }}
            onClick={() => downloadHandler("google")}
          />
          <Box
            component={"img"}
            src={appStoreImg}
            alt="applestore"
            sx={{
              cursor: "pointer",
              width: sm ? "200px" : "50%",
              mx: sm ? 2 : 1,
            }}
            onClick={() => downloadHandler("apple")}
          />
        </Stack> */}
        </Box>
        {/* mobile view calculator */}
        {!(sm && xs) ? (
          <>
            <Title
              sx={{
                color: "text.main",
                padding: !sm ? "5% 0 0 10%" : null,
                fontSize: lg ? "2.5em" : null,
              }}
              title="Get Your"
              highlight="Quote Here"
              textAlign="center"
            />
            <Calculator bgColor="transparent" direction="column" />
          </>
        ) : null}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection:  xs && sm && md  ? "row" :"column",
          justifyContent: "space-between",
          padding: xs && sm && md? "2% 6% 1% 6%" : "1% 4% 10% 4%",
          width: "100%",
        }}
      >


        <Box>
          {sm && xs ? (
            <>
              <Title
                sx={{
                  color: "text.main",
                  padding: !sm ? "1% 0 0 10%" : null,
                  fontSize: lg ? "2.5em" : null,
                }}
                title="Get Your"
                highlight="Quote Here"
              />
              <Calculator bgColor="transparent" topMargin="null" />
            </>
          ) : null}
        </Box>

        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </Box>
    </Box>
  );
}
