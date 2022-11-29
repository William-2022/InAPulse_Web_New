import { Box, IconButton } from "@mui/material";
import { ViewList, History } from "@mui/icons-material";

import React from "react";

function QuickActions() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        width: 80,
        py: 3,
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        borderRadius: 3,
        bgcolor: "secondary.main",
      }}
    >
      <IconButton>
        <ViewList />
      </IconButton>
      <IconButton sx={{ my: 3 }}>
        <History size={30} sx={{ color: "background.main" }} />
      </IconButton>
      <IconButton>
        <ViewList size={30} sx={{ color: "background.main" }} />
      </IconButton>
    </Box>
  );
}

export default QuickActions;
