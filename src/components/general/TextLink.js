import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function TextLink({ label, link, children, onClick, sx, fontSize, ...other }) {
  const navigate = useNavigate();

  return (
    <Box fontSize={fontSize} sx={sx} {...other}>
      {label}
      <Box
        component={'a'}
        fontSize={fontSize}
        onClick={() => onClick || navigate(link)}
        sx={{
          fontWeight: "bold",
          ml: 1,
          color: "primary.main",
          display: "inline-block",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        underline="none"
      >
        {children}
      </Box>
    </Box>
  );
}

export default TextLink;
