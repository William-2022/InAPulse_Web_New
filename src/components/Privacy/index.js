import React from "react";
import { Typography, Box } from "@mui/material";

export const Header = ({ children }) => {
  return (
    <Typography sx={{ my: "5px" }} variant="h4" fontWeight={"bold"}>
      {children}
    </Typography>
  );
};

export const SubHeader = ({ children }) => {
  return (
    <Typography sx={{ my: "5px" }} variant="h5" fontWeight={"bold"}>
      {children}
    </Typography>
  );
};

export const Section = ({ children }) => {
  return <Box sx={sectionStyle}>{children}</Box>;
};

export const Paragraph = ({ children }) => {
  return (
    <Typography sx={contentStyle} variant="h6">
      {children}
    </Typography>
  );
};
export const BoldHeadedListItem = ({ header, children }) => {
  return (
    <>
      <Typography variant={"span"} sx={{ color: "black" }}>
        • <strong>{header}</strong>
      </Typography>
      : {children}
      <br />
      <br />
    </>
  );
};

export const CustomListItem = ({ children }) => {
  return (
    <>
      <Typography sx={{ my: "5px" }} variant={"inherit"}>
        {children}
      </Typography>
    </>
  );
};

export const BoldedSubHeaderCategory = ({ header, children }) => {
  return (
    <>
    <br/>
      <Typography variant={"span"} sx={{ color: "black" }}>
        <strong>{header}.</strong>
      </Typography>&nbsp;&nbsp;
      {children}
      <br />
    </>
  );
};

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  my: "2%",
};
const contentStyle = { color: "grey.600" };
