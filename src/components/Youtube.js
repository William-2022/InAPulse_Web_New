import React from "react";
import { Box } from "@mui/material";

const Youtube = ({ embedId,width="100%",height="500px" }) => {
  return (
    <Box sx={{ height, width }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
};

export default Youtube;
