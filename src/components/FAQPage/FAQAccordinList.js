import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQAccordinList = ({ data }) => {
  return (
    <>
      {data.map((section) => {
        const { questions } = section;
        
        return (
          <Box key={section.name} position="relative">
          <Box component={"section"} id={section.name} position="absolute" top={"-30vh"} >
            </Box>
            <Typography
              variant="h4"
              sx={{
                my: "20px",
                fontSize: "32px",
                fontWeight: "bolder",
                color: "primary.main",
              }}
              >
              {section.name}
            </Typography>
            {questions.map((questionObject) => {
              const { question, answer } = questionObject;
              
              return (
                <Accordion elevation={0} key={question}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: "bolder",fontSize:"22px" }}>
                      {question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{fontSize:"16px" }} >{answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
            </Box>
        );
      })}
    </>
  );
};

export default FAQAccordinList;
