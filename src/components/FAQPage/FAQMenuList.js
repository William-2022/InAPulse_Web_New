import React from "react";
import { Box, Paper, Button, useMediaQuery } from "@mui/material";

const FAQMenuList = ({ data }) => {

  const mdBreakPoint = useMediaQuery(theme=>theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex",flexWrap:"wrap",justifyContent:"center", gap: "10px" }}>
      {data.map((section) => {
        return (
          <Paper
          elevation={0}
          key={section.name}
            sx={{
              display: "flex",
              borderRadius:"10px",
              width:mdBreakPoint?"280px":"120px",
              bgcolor:"card.main",
              px:"2%",
              height: "12vh",
            }}
          >
            <Button
              disableRipple
              //  href="#test"
              href={`#${section.name}`}
              sx={{
                fontSize: mdBreakPoint?"24px":"16px",
                textAlign: "center",
                fontWeight: "bolder",
                color: "black",
                justifyContent: "flex-start",
                textTransform: "none",
                "&:hover":{
                  bgcolor:"transparent"
                }
              }}
            >
              {section.name}
            </Button>
          </Paper>
        );
      })}
    </Box>
  );
};

export default FAQMenuList;
