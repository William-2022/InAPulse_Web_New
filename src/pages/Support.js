import { Box, Button, Grid, List } from "@mui/material";
import React from "react";

import Title from "../components/general/Title";
import ChatBox from "../components/Support/ChatBox";
import ListItemGroup from "../components/Support/ListItemGroup";
import ResponsiveSection from "../layout/ResponsiveSection";

function Support() {
  const closeTicket = () => {};

  return (
    <ResponsiveSection
      sx={{
        width: "100%",
        flex: 1,
        padding: 0,
        bgcolor: "#1b2033",
        mb: "-20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "80%",
          flex: 1,
        }}
      >
        <Grid item xs={12} md={2} bgcolor="primary.main">
          <List component="nav">
            <ListItemGroup
              label="Ongoing"
              items={[
                { label: "Home", id: 1 },
                { label: "Store", id: 2 },
              ]}
            />
            <ListItemGroup
              label="Completed"
              items={[
                { label: "Home", id: 1 },
                { label: "Store", id: 2 },
              ]}
            />
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          bgcolor="#161924"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box display="flex" px={4} justifyContent="space-between">
            <Title dark my={3}>
              In a Pulse Support
            </Title>
            <Button onClick={closeTicket}>Close Ticket</Button>
          </Box>
          <ChatBox />
        </Grid>
      </Grid>
    </ResponsiveSection>
  );
}

export default Support;
