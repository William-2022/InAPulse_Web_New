import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Moment from "moment";
import React from "react";

import {
  deliveryTimeline,
  ORDER_STATUS,
  ORDER_STEPS,
} from "../../helpers/OrderStatus";
import Section from "../general/Section";

function OrderTimeline({ timeline, current, title = "Timeline", vertical }) {
  const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const timeFormat = (time) => {
    Moment.locale("en");
    let date = Moment(time).format("hh:mm A");
    return date !== "Invalid date" ? date : "";
  };

  const style = {
    py: 0,
    mb: 0,
    noCenter: sm || vertical ? false : true,
    sx: {
      minWidth: 225,
    },
  };

  return (
    <Box width="100%" minWidth={{ xs: 240, sm: 390 }}>
      <Section subtitle={title} {...style}>
        <Stepper
          activeStep={ORDER_STEPS[current]}
          orientation={sm || vertical ? "vertical" : "horizontal"}
          alternativeLabel={sm || vertical ? false : true}
          sx={{
            width: "100%",
            mt: 2,
            "& .Mui-active > .MuiStepConnector-line": {
              borderColor: "primary.main",
            },
            "& .Mui-completed > .MuiStepConnector-line ": {
              borderColor: "primary.main",
            },
          }}
        >
          {Object.entries(deliveryTimeline)?.map(
            ([key, { match, label,body }], index) => {
              if (current === ORDER_STATUS.CANCELLED && !timeline[match])
                return null;
              if (
                key === ORDER_STATUS.CANCELLED &&
                current !== ORDER_STATUS.CANCELLED
              )
                return null;

              return (
                <Step key={index}>
                  <StepLabel >
                    <Typography>
                      <b>{label}</b>
                      <p>{sm||vertical?body:""}</p>
                      <br />
                      {timeFormat(timeline[match])}
                    </Typography>
                  </StepLabel>
                </Step>
              );
            }
          )}
        </Stepper>
      </Section>
    </Box>
  );
}

export default OrderTimeline;
