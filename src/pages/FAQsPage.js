import React, { useState } from "react";
import { Box } from "@mui/system";
import { ButtonGroup, Grid, useMediaQuery } from "@mui/material";
import PolyShapedButton from "../components/FAQPage/PolyShapedButton";
import faqData from "../json/FAQS.json";
import FAQAccordinList from "../components/FAQPage/FAQAccordinList";
import FAQMenuList from "../components/FAQPage/FAQMenuList";

const FAQsPage = () => {
  const [target, setTarget] = useState("customer");
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box sx={{ py: "20px",width:"100%" }} className="FAQPage">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          bgcolor: "card.main",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          pt: "50px",
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          sx={{
            py: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          disableElevation
        >
          <PolyShapedButton
            label="Customers"
            active={target === "customer"}
            onClick={() => setTarget("customer")}
          />
          <PolyShapedButton
            label="Partners"
            active={target === "partner"}
            pointDirection="right"
            onClick={() => setTarget("partner")}
          />
        </ButtonGroup>
        <Box sx={{ flexGrow: 1 }} className="FAQ-sections">
          <Grid container spacing={2} sx={{ px: "5%", flexWrap: "wrap" }}>
            <Grid
              item
              className="menulist"
              minWidth={"240px"}
              xs={12}
              lg={3}
              maxWidth={lgUp ? "300px !important" : null}
            >
              <FAQMenuList data={faqData[target]} />
            </Grid>
            <Grid item xs={12} md={8}>
              <FAQAccordinList data={faqData[target]} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQsPage;
