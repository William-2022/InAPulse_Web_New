import React from "react";
import { Box, Grid, useMediaQuery, Tooltip, Typography } from "@mui/material";
import downloadHandler from "../../helpers/downloadHandler";

import { appStoreImg, googlePlayImg, phoneAppImg } from "../../images";
import Title from "../general/Title";

function DownloadBanner() {
  const md = useMediaQuery((theme) => theme.breakpoints.down("md"));

  

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "secondary.main",
        justifyContent: "center",
        py: 4,
        px: 3,
      }}
    >
      <Grid
        container
        item
        xs={12}
        md={10}
        xl={8}
        sx={{
          "> div": {
            display: "flex",
            justifyContent: md ? "center" : undefined,
            alignItems: "center",
          },
        }}
      >
        <Grid item xs={12} md={10}>
          <Box>
            <Title secondary dark>
              Download the <span>In A Pulse</span> app today!
            </Title>
            <Box mt={3}>
              <Tooltip
                placement="top"
                arrow
                title={
                  <Typography fontSize="16px">
                    Click to download from google
                  </Typography>
                }
              >
                <Box
                  component="img"
                  sx={{
                    width: md ? "20%" : "33%",
                    minWidth: 200,
                    mr: 2,
                    cursor: "pointer",
                  }}
                  alt="google play"
                  src={googlePlayImg}
                  onClick={() => downloadHandler("google")}
                />
              </Tooltip>
              <Tooltip
                placement="top"
                arrow
                title={
                  <Typography fontSize="16px">
                    Click to download from apple
                  </Typography>
                }
              >
                <Box
                  component="img"
                  sx={{
                    width: md ? "20%" : "33%",
                    minWidth: 200,
                    cursor: "pointer",
                  }}
                  alt="app play"
                  src={appStoreImg}
                  onClick={() => downloadHandler("apple")}
                />
              </Tooltip>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box
            component="img"
            src={phoneAppImg}
            sx={{ height: 350, display: md ? "none" : "flex" }}
            alt="In a pulse app image"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DownloadBanner;
