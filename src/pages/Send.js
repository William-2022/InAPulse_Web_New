import React from "react";
import { Typography, Grid, Box } from "@mui/material";

export default function WhatToSend() {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          height: "300px",
          bgcolor: "card.main",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            alignItems: "center",
            fontFamily: "Noto Sans SC, Helvetica, arial, sans-serif",
            fontWeight: "bold",
            marginRight: "2em",
            marginLeft: "2em",
          }}
        >
          ITEMS PROHIBITED FROM PACKAGE DELIVERY
        </Typography>
      </Box>
      <Box sx={{ width: "100%", minHeight: "75vh" }}>
        <Typography
          variant="h6"
          sx={{ marginLeft: "4em", marginTop: "4em", marginRight: "4em" }}
        >
          Customer is prohibited to use In A Pulse Delivery services for any
          items which are illegal to carry or transport, or maybe be potentially
          dangerous or hazardous to In A Pulse Delivery or the public. In A
          Pulse does not deliver any dangerous goods, controlled or regulated
          substances or products. This includes, but is not limited to:
        </Typography>

        <Box sx={{ marginLeft: "5em", maxWidth: "12" }}>
          <br />
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>1.</b> Human or animals remains in any form;
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>2.</b> Live animals;
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>3.</b> Cash, coins, bonds, stocks, or other negotiable
            securities;
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>4.</b> Jewelry, gold, or any other precious metal other than
            costume jewelry;
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>5.</b> Weapons and ammunition;
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>6.</b> Cannabinoids;
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em" }}
          >
            <b>7.</b> Any substance defined as dangerous by the Transportation
            of Dangerous Goods Act, SC.1992, c34;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>a.</b> Explosives, including explosives within the meaning of the
            Explosives Act;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>b.</b> Gases: compressed, deeply refrigerated, liquefied or
            dissolved under pressure;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>c.</b> Flammable and combustible liquids;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>d.</b> Flammable solids; substances liable to spontaneous
            combustion; substances that on contact with water emit flammable
            gases;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>e.</b> Oxidizing substances; organic peroxides;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>f.</b> Poisonous (toxic) and infectious substances;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>g.</b> Nuclear substances, within the meaning if the Nuclear
            Safety and Control Act;
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>h.</b> Corrosives; and
          </Typography>
          <Typography
            sx={{
              marginLeft: "2em",
              fontSize: 20,
              marginRight: "1em",
              marginTop: ".25em",
            }}
          >
            <b>i.</b> Miscellaneous products, substances, or organisms
            considered by the Governor in Council to be dangerous to life,
            health, property, or the environment when handled, offered for
            transport or transported and prescribed to be included.
          </Typography>
          <Typography
            sx={{ fontSize: 20, marginRight: "1em", marginTop: ".25em", marginBottom:'3em'}}
          >
            <b>8.</b> Any item prohibited by law in the originating or
            destination jurisdiction, or any other jurisdiction through which
            the item may travel.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
