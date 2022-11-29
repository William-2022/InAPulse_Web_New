import React from "react";
import { useState, useLayoutEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Title from "../components/general/Title";

import StageContentSection from "../components/PlaceOrder/StageContentSection.js";
import UseOrder from "../hooks/useOrder.js";
import AlreadyHaveOrder from "../components/AlreadyHaveOrder.js";

function PlaceAnOrder() {
  const IslgBreakPoint = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [stage, setStage] = useState(0);
  const { activeOrder } = UseOrder();
  const stages = [
    "Delivery Details",
    "Pickup Location",
    "Dropoff Location",
    "Delivery Time",
    "Order Summary",
    "Order Estimation",
  ];
  const xs = useMediaQuery((theme) => theme.breakpoints.between("xs", "sm"));

  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [stage]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: "50px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box>
        <Title title="Send packages in" highlight="Toronto" />
      </Box>
      <Box sx={{
          width: "100%",
          height:"auto",
          marginTop:"1%",
          alignSelf: "center",
          bgcolor: "background.paper",
          borderStyle: "solid",
          borderwidth: "1px",
          borderColor: "grey.400",
          borderRadius: 3,
          padding:"1% 0 2.5% 0"
          }}>
        {Boolean(activeOrder) ? (
          <AlreadyHaveOrder orderId={activeOrder.id} />
        ) : (
          <Grid  justifyContent={"center"} container>
            <Grid item xs={12} md={8} xs={13}>
              <Stepper
                sx={{
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "secondary.dark",
                  },
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "secondary.dark",
                  },
                }}
                activeStep={stage}
                alternativeLabel
              >
                {stages.map((label) => (
                  <Step key={label}>
                    <StepLabel><Typography  sx={{fontSize: xs ? "12px" :"16px"}} >{label}</Typography></StepLabel>
                  </Step>
                ))}
              </Stepper>
              <StageContentSection stage={stage} setStage={setStage} />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default PlaceAnOrder;
