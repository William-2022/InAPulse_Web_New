import React, { useEffect, useState } from "react";
import { Typography, Box, Card } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import UseOrder from "../../../hooks/useOrder";
import Scheduler from "../Scheduler";

const DeliveryTime = ({ setIsCurrentStageValid }) => {
  const { order, setParamOrder } = UseOrder();
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  useEffect(() => {
    setIsCurrentStageValid(true);
  }, [setIsCurrentStageValid]);
  return (
    <Box width="100%">
      <Typography variant="h5" fontWeight="bold" my="40px" textAlign={"center"}>
        When would you like to receive your package?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20%",
        }}
      >
        <Card
          sx={{
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            cursor: "pointer",
            border: "2px solid #EE8503",
            backgroundColor: order.scheduledAt ? "transparent" : "#EE8503",
            color: order.scheduledAt ? "secondary.dark" : "white",
          }}
          onClick={() => {
            setParamOrder("scheduledAt", null);
          }}
        >
          <ElectricBoltIcon sx={{ width: "100%", height: "50%" }} />

          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            ASAP
          </Typography>
        </Card>

        <Card
          sx={{
            width: 200,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: "2px solid #EE8503",
            cursor: "pointer",
            backgroundColor: !order.scheduledAt ? "transparent" : "#EE8503",
            color: !order.scheduledAt ? "secondary.dark" : "white",
          }}
          onClick={() => setIsSchedulerOpen(true)}
        >
          <CalendarMonthIcon sx={{ width: "100%", height: "50%" }} />

          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            SCHEDULE
          </Typography>
        </Card>
        <Scheduler
          open={isSchedulerOpen}
          handleClose={() => setIsSchedulerOpen(false)}
        />
      </Box>
    </Box>
  );
};

export default DeliveryTime;
