import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, useMediaQuery } from "@mui/material";
import React from "react";

import Card from "./Card";

function ImageViewer({ open, dismiss, src }) {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Modal open={open} onClose={dismiss}>
      <Card
        noMin
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: !md ? "95%" : undefined,
          p: 0,
          overflow: "hidden",
          transform: "translate(-50%, -50%)",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={dismiss}
          sx={{
            position: "absolute",
            right: 18,
            top: 18,
            bgcolor: "primary.main",
            color: "background.main",
          }}
        >
          <Close />
        </IconButton>
        <Box
          component="img"
          alt="delivery-image"
          sx={{
            width: "100%",
            objectFit: "contain",
            borderRadius: 2,
            mx: "auto",
            maxHeight:'80vh'
          }}
          src={src}
        />
      </Card>
    </Modal>
  );
}

export default ImageViewer;
