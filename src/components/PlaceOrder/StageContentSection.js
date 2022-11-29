import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import PickupDetails from "./stages/PickupDetails.js";
import DropoffDetails from "./stages/DropoffDetails.js";
import Confirmation from "./stages/Confirmation.js";
import DeliveryDetails from "./stages/DeliveryDetails.js";
import DeliveryTime from "./stages/DeliveryTime.js";
import StageChangeButtons from "./StageChangeButtons.js";
import UseOrder from "../../hooks/useOrder.js";
import DeliveryEstimate from "./stages/DeliveryEstimate.js";
import SubmitStatusModal from "./SubmitStatusModal.js";
import OverScreenLoader from "../OverScreenLoader.js";

const StageContentSection = ({ stage = 0, setStage }) => {
  const { coverage, orderSubmit } = UseOrder();
  const [isCurrentStageValid, setIsCurrentStageValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState();
  const [submissionError, setSubmissionError] = useState("");
  const [submittedOrderId, setSubmittedOrderId] = useState(null);
  const handlePrevious = () => {
    setStage((prev) => prev - 1);
  };

  const handleNext = () => {
    setStage((prev) => prev + 1);
  };

  const handletoStage = (stage) => {
    setStage(stage);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    orderSubmit()
      .then((res) => setSubmittedOrderId(res.payload.id))
      .catch((err) => setSubmissionError(err))
      .finally(() => setIsSubmitting(false));
  };

  const stages = [
    DeliveryDetails,
    PickupDetails,
    DropoffDetails,
    DeliveryTime,
    Confirmation,
    DeliveryEstimate,
  ];

  const maxStage = stages.length - 1;
  const CurrentStage = stages[stage];

  return (
    <Box
      sx={{
        margin: "auto",
        width: "90%",
      }}
    >
      <Box
        className="currentStageContainer"
        sx={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {<OverScreenLoader isLoading={isSubmitting} />}

        {Boolean(coverage.length) ? (
          <CurrentStage
            {...{ handletoStage, submissionError, setIsCurrentStageValid }}
          />
        ) : (
          <CircularProgress
            size={"100px"}
            sx={{ "& .MuiCircularProgress-svg": { color: "primary" } }}
          />
        )}
      </Box>
      {Boolean(coverage.length) && (
        <StageChangeButtons
          {...{
            stage,
            handlePrevious,
            handleNext,
            handletoStage,
            maxStage,
            handleSubmit,
            isCurrentStageValid,
          }}
        />
      )}
      {
        <SubmitStatusModal
          open={Boolean(submittedOrderId)}
          orderid={submittedOrderId}
        />
      }
    </Box>
  );
};

export default StageContentSection;
