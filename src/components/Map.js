import React from "react";
import { Box } from "@mui/system";

export default function Map() {
  return (
    <Box>
      <iframe
        title="companyMap"
        className="content"
        style={{ width: "100%", height: "40em", border: "none" }}
        src="https://maps.google.com/maps?q=5650%20Yonge%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </Box>
  );
}
