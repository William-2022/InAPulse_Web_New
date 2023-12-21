import React from "react";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  useMediaQuery,
  Tooltip,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import {
  FaTwitter,
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import { appStoreImg, googlePlayImg } from "../../images";
import downloadHandler from "../../helpers/downloadHandler";
import SubscriberForm from "../Home/SubscriberForm";
import zIndex from "@mui/material/styles/zIndex";

export default function Footer() {
  const {  user } = useAuth();

  let navigate = useNavigate();
  let xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  let sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  let md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  let lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const bxssm = useMediaQuery((theme) => theme.breakpoints.between('xs', 'sm'));
  const bmdlg = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));

  const pages = [
    { label: "About Us", link: "/AboutUs" },
    { label: "Contact Us", link: "/ContactUs" },
    { label: "Careers", link: "/Careers" },
    // { label: "How The Delivery Works", link: "/Delivery" },
    { label: "FAQs", link: "/FAQs" },
    { label: "Package Guidelines", link: "/Send" },
  ];

  const socials = [
    // { icon: <FaLinkedin className="icon" />, link: "https://ca.linkedin.com/" },
    {
      icon: <FaTwitter className="icon" />,
      link: "https://twitter.com/InAPulseSocial",
    },
    {
      icon: <FaYoutube className="icon" />,
      link: "https://www.youtube.com/channel/UCgtpbhRGcVfQqeYZUwUQarA",
    },
    {
      icon: <FaFacebookSquare className="icon" />,
      link: "https://facebook.com/In-A-Pulse-105258872235625",
    },
    {
      icon: <FaInstagram className="icon" />,
      link: "https://www.instagram.com/inapulse/",
    },
  ];

  const handleHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <Box sx={{padding: "2% 6% 0 6%" }}>
      {user ? 
        <Box sx={{
          display: "flex" ,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: bxssm ? "center" : "flex-end",
          gap:  "10%",
          color: "secondary.dark",
          width: bxssm ? "100%" :"97%",
          alignItems: "flex-end",
          paddingTop:"9%",
        }}>
          <Typography
            sx={{
              fontSize: sm ? "14px" : "12px",
            }}
          >
            © 2023 In A Pulse
          </Typography>
          <Typography
            disableRipple
            sx={{
              cursor: "pointer",
              textTransform: "none",
              fontSize: sm ? "14px" : "12px",
              px: 0,
              color: "secondary.dark",
            }}
            onClick={() => navigate("/Terms")}
            rel="noreferrer"
          >
            Terms and Conditions
          </Typography>
          <Typography
            disableRipple
            color={"background"}
            sx={{
              cursor: "pointer",
              textTransform: "none",
              fontSize: sm ? "14px" : "12px",
              color: "secondary.dark",
            }}
            onClick={() => navigate("/PrivacyPolicy")}
            rel="noreferrer"
          >
            Privacy Policy
          </Typography>
        </Box> 
      : <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={8} md={8} xs={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: lg && md ? "row" : "column",
              justifyContent: "space-around",
              alignItems: lg && md ? "center" : "flex-start",
              fontSize: "17px",
              width: "90%",
              alignSelf: "flex-start",
              paddingTop: lg && md ? "2%" : "12%",
            }}
            className="footer-menu"
          >
            <Box
              height="16px"
              sx={{
                cursor: "pointer",
                width: lg && md ? "10%" : "70%",
                padding: lg && md ? "null" : "0 0%",
                margin: lg && md ? "null" : "0 20% 3% 0%",
              }}
              onClick={handleHome}
              component={"img"}
              src={"/logo.png"}
              alt="logo"
            />
            {pages.map((page) => (
              <Typography
                disableRipple
                onClick={() => navigate(page.link)}
                key={page.link}
                sx={{
                  cursor: "pointer",
                  textTransform: "none",
                  color: "secondary.dark",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  fontSize: "14px",
                }}
                // className="footer-link"
              >
                {page.label}
              </Typography>
            ))}
          </Box>
          <Box sx={{
            display: xs && sm ? "flex" : "none",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "secondary.dark",
            width: "97%",
            alignItems: "flex-end",
            paddingTop:"11%"
          }}>
            <Typography
              sx={{
                fontSize: sm ? "14px" : "12px",
              }}
            >
              © 2023 In A Pulse
            </Typography>
            <Typography
              disableRipple
              sx={{
                cursor: "pointer",
                textTransform: "none",
                fontSize: sm ? "14px" : "12px",
                px: 0,
                color: "secondary.dark",
              }}
              onClick={() => navigate("/Terms")}
              rel="noreferrer"
            >
              Terms and Conditions
            </Typography>
            <Typography
              disableRipple
              color={"background"}
              sx={{
                cursor: "pointer",
                textTransform: "none",
                fontSize: sm ? "14px" : "12px",
                color: "secondary.dark",
              }}
              onClick={() => navigate("/PrivacyPolicy")}
              rel="noreferrer"
            >
              Privacy Policy
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={6}>
          <Box>
            <SubscriberForm />
            <Box className="socials" sx={{ display: "flex" }}>
              {socials.map((social) => {
                return (
                  <Button
                    sx={{
                      minWidth:0.1,
                      padding: "1%",
                      margin: "2%",
                      boxShadow: "none",
                      color: "card.navy",
                      "&:hover": {
                        color: "primary.main",
                      },
                      "& .icon": {
                        padding: "0",
                        margin: "0",

                        width: "25px",
                        height: "35px",
                      },
                    }}
                    href={social.link}
                    key={social.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.icon}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
          sx={{
            display: bxssm ? "flex" : "none",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "secondary.dark",
            width: "97%",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: sm ? "14px" : "12px",
            }}
          >
            © 2023 In A Pulse
          </Typography>

          <Typography
            disableRipple
            sx={{
              cursor: "pointer",
              textTransform: "none",
              fontSize: sm ? "14px" : "12px",
              px: 0,
            }}
            onClick={() => navigate("/Terms")}
            rel="noreferrer"
          >
            Terms and Conditions
          </Typography>
          <Typography
            disableRipple
            color={"background"}
            sx={{
              cursor: "pointer",
              textTransform: "none",
              fontSize: sm ? "14px" : "12px",
            }}
            onClick={() => navigate("/PrivacyPolicy")}
            rel="noreferrer"
          >
            Privacy Policy
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={4}></Grid>
      </Grid>}

      {/* <Box
        component="footer"
        sx={{
          width: "100%",
          backgroundColor: "background.secondary",
          display: "flex",
          px: "10%",
          pt: "64px",
          pb: 3,
          alignItems: "center",
          flexWrap: "nowrap",
          flexDirection: "row",
          fontSize: "16px",
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "40%",
            width: "80%",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: null,
          }}
        >
          
        </Box>

        
      </Box> */}
    </Box>
  );
}
