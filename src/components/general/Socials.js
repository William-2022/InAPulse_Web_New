import { Box } from "@mui/material";
import React from "react";

import useAuth from "../../hooks/useAuth";

function Socials({ icon, route, link, dark }) {
  const { facebookSignIn, googleSignIn, appleSignIn } = useAuth();

  const handleLogin = async () => {
    try {
      if (route === "google") await googleSignIn();
      else if (route === "facebook") await facebookSignIn();
      else if (route === "apple") await appleSignIn();
    } catch (error) {
      //console.error(error);
    }
  };

  const handleClick = () => {
    if (link) window.open(link);
    else handleLogin();
  };

  if (!link && !route) return null;

  return (
    <Box
      component="button"
      onClick={handleClick}
      variant="outlined"
      sx={{
        cursor: "pointer",
        borderRadius: 2,
        backgroundColor: "white",
        p: 2,
        transition: "0.2s",
        ":hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <img
        src={icon}
        alt={"social"}
        style={{
          height: 30,
          width: 30,
          objectFit: "contain",
          filter: dark ? "brightness(0%)" : undefined,
        }}
      />
    </Box>
  );
}

export default Socials;
