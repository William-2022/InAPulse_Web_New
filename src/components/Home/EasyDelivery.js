import React from "react";
import Title from "../general/Title";
import Body from "../../components/general/Body";
import { appStoreImg, googlePlayImg } from "../../images";
import downloadHandler from "../../helpers/downloadHandler";
import { Box, useMediaQuery, Stack, Tooltip, Typography } from "@mui/material";
import Image from "../general/Image";
import mobile from "../../images/V2/mobile.png";
import QR from "../../images/V2/QR.PNG";

const EasyDelivery = () => {
  let xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  let xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  let sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  let md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const bxssm = useMediaQuery((theme) => theme.breakpoints.between('xs', 'sm'));
  const bmdlg = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));

  return (
    <Box
      sx={{
        mt: lg ? "60px" : md ? "60px auto" : null,
        padding: lg && md ? "1% 6% 1% 6%" : "2% 6%",
        display: "flex",
        justifyContent: "space-between",
        
        backgroundColor:"card.navy"
      }}
    >
      <Box
        component="section"
        sx={{
          width: bxssm? "100%" : xl ? "50%" :"60%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          padding: "7% 0",
          
        }}
      >
         <Title
          title="FREE DELIVERY ON YOUR FIRST ORDER"
          color={"primary.main"}
          sx={{fontSize:20,mb:1}}
          textAlign={md && lg && xl ? null :"center"}
        />
        <Title
          title="Download our App to get started."
          color={"text.white"}
          textAlign={md && lg && xl ? null :"center"}
        />
        <Stack
          gap={2}
          mt={8}
          sx={{ flexDirection: lg ? "row" : md ? "row" : "column" }}
        >
          <Tooltip
            placement="top"
            arrow
            title={
              <Typography fontSize="16px">
                Click to download from google
              </Typography>
            }
          >
            <Box
              component="img"
              sx={{
                width: md ? "20%" : "33%",
                minWidth: 200,
                mr: 2,
                cursor: "pointer",
              }}
              alt="google play"
              src={googlePlayImg}
              onClick={() => downloadHandler("google")}
            />
          </Tooltip>
          <Tooltip
            placement="top"
            arrow
            title={
              <Typography fontSize="16px">
                Click to download from apple
              </Typography>
            }
          >
            <Box
              component="img"
              sx={{
                width: md ? "20%" : "33%",
                minWidth: 200,
                cursor: "pointer",
              }}
              alt="app play"
              src={appStoreImg}
              onClick={() => downloadHandler("apple")}
            />
          </Tooltip>
        </Stack>
      </Box>
      <Box
        component="section"
        sx={{
          width: "50%",
          height: "49%",
          position: "absolute",
          right: 0,
          display: md ? "flex" : "none",
        }}
      >
        <Box
          sx={{ width: "50%", height: "100%" }}
          component={"img"}
          alt="coveragemap"
          src={mobile}
        />
         <Box
          sx={{position:"absolute", top:"55%",right:"25%",width: "17%", height: "32%" }}
          component={"img"}
          alt="coveragemap"
          src={QR}
        />
      </Box>
    </Box>
  );
};

export default EasyDelivery;
