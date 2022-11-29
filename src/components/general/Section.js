import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Title from "./Title";

const Section = ({
  title,
  children,
  subtitle,
  noCenter,
  sx,
  py = 8,
  mb = 8,
  accordion,
}) => {
  const [open, setOpen] = useState(!accordion);

  useEffect(() => {
    setOpen(!accordion);
  }, [accordion]);

  return (
    <Accordion
      expanded={open}
      onClick={() => (accordion ? setOpen((old) => !old) : null)}
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "transparent",
        justifyContent: "center",
        py: py,
        boxShadow: "none !important",
        border: accordion
          ? (theme) => `1px solid ${theme.palette.primary.main} !important`
          : undefined,
        borderRadius: 1,
        my: accordion ? "8px !important" : "0px !important",
        "&::before": { content: "none" },
        ...sx,
      }}
    >
      <AccordionSummary
        expandIcon={accordion ? <Add color="primary" /> : null}
        sx={{
          cursor: accordion ? undefined : "default !important",
          height: title || subtitle ? null : 0,
          minHeight: title || subtitle ? null : "0px !important",
        }}
      >
        {title && (
          <Title mb={mb} fullWidth center={!noCenter}>
            {title}
          </Title>
        )}
        {subtitle && (
          <Title mb={mb} starting={28} fullWidth center={!noCenter}>
            {subtitle}
          </Title>
        )}
      </AccordionSummary>

      <AccordionDetails
        sx={{
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: noCenter ? undefined : "center",
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default Section;
