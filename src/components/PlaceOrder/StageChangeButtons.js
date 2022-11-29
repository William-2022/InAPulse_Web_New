import React from "react";
import { Box, Button } from "@mui/material";

const StageChangeButtons = ({
  stage,
  maxStage,
  handleSubmit,
  isCurrentStageValid,
  handlePrevious,
  handleNext,
}) => {
  return (
    <Box display="flex">
      {stage !== 0 && (
        <Button
          color="primary"
          variant="outlined"
          onClick={handlePrevious}
          sx={{
            borderRadius: 2,
            height: 50,
            width: "150px",
            mt: 5,
          }}
        >
          BACK
        </Button>
      )}
      {stage !== maxStage ? (
        <Button
          variant="contained"
          disabled={!isCurrentStageValid}
          onClick={handleNext}
          sx={{
            borderRadius: 2,
            height: 50,
            width: "150px",
            mt: 5,
            ml: "auto",
          }}
        >
          NEXT
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled={!isCurrentStageValid}
          onClick={handleSubmit}
          sx={{
            borderRadius: 2,
            height: 50,
            width: "150px",
            mt: 5,
            ml: "auto",
          }}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default StageChangeButtons;
