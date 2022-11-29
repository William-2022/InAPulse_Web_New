import { Typography, Box, Button } from "@mui/material";
import React from "react";

const SectionHeader = ({ title, onClick }) => {
  return (
    <Box display="flex" alignItems={"center"}>
      <Typography variant="h6" fontWeight={"bold"}>{title}</Typography>
      <Button sx={{ml:"auto",fontWeight:"bold"}} onClick={onClick}>EDIT</Button>
    </Box>
  );
};

export default SectionHeader;
