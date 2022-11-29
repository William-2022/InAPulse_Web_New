import React from "react";
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";

const AuthButton = ({ Icon, title, active, onClick }) => {
  const overMdBreakPoint = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box
      className="authButton"
      sx={{
        color: active ? "primary.main" : "white",
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          margin: "auto",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        <Icon sx={{ fontSize: overMdBreakPoint ? "25px" : "15px" }} />
        <Typography
          fontSize={overMdBreakPoint ? null : "13px"}
          textAlign={"center"}
          fontWeight="bold"
          sx={{
            paddingLeft:"5%"
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthButton;
