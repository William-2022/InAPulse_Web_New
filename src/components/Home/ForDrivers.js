import React from "react";
import {
  Box,
  useMediaQuery,
  Grid,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import Title from "../general/Title";
import driver from "../../images/V2/driver.jpg";
import { useNavigate } from "react-router-dom";

const ForDrivers = () => {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        height: md && lg && xl ? "60vh" : "37vh",
        margin: lg && md ? "0% 0" : "0 0 15% 0",
        width:"99%"
      }}
    >
      <Grid
        container
        columns={2}
        sx={{ width: md && lg && xl ? "100%" : "95%", padding: "0" }}
      >
        <Grid item lg={1}>
          <Paper
            sx={{
              height: md && lg && xl ? "50%" :"40%",
              width: md && lg && xl ? "50%" : "100%",
              padding: md && lg && xl ? "1.7% 6%" : "7% 6%",
              color: "text.white",
              position: "absolute",
              left: 0,
              backgroundColor: "card.navy",
            }}
          >
            <Title
              title="Looking for an exciting, new career ? Deliver"
              highlight="In A Pulse!"
              textAlign={md && lg && xl ? null : "center"}
              color={"text.white"}
              sx={{ fontSize: 26, mb: 1 }}
            />
            {md && lg && xl ? (
              <>
                <Typography>
                  Want to earn competitive pay, keep 100% of your tips and
                  create your own flexible schedule? Join us by signing up as a
                  delivery driver. Be your own boss and enjoy the flexibility of
                  choosing when, where, and how much money you earn. All you
                  need is a mode of transportation (optional) and a smartphone
                  to start making money.
                </Typography>
                <Typography>
                  <br />
                  It’s that simple!
                </Typography>
              </>
            ) : null}
            <Button
              disableRipple
              variant="contained"
              sx={{
                px: lg ? 4 : 0,
                py: md && lg && xl ? 1 : 1,
                borderRadius: "50px",
                fontSize: md && lg && xl ? 18 : 16,
                width: xl ? "35%" : lg ? "55%" : md ? "60%" : "80%",
                margin: xl
                  ? "5% 0 12% 0"
                  : lg
                  ? "5% 0"
                  : md
                  ? "3% 0"
                  : "7% 9% 0% 9%",
              }}
              onClick={() => navigate("/Careers")}
            >
              Sign UP
            </Button>
          </Paper>
        </Grid>
        <Grid item lg={1}>
          <Paper
            sx={{
              display: md && lg && xl ? null : "none",
              height: "50%",
              width: "50%",
              position: "absolute",
              right: 0,
            }}
          >
            <Box
              sx={{ width: "100%", height: "100%" }}
              component={"img"}
              alt="coveragemap"
              src={driver}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForDrivers;
