import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";

import visa from "../../images/UserProfile/visa.png";
import mastercard from "../../images/UserProfile/mastercard.png";

const PaymentCard = ({ expiry, number, brand }) => {
  const mdUpBp = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const cardMap = {
    visa,
    mastercard,
  };

  return (
    <Stack
      spacing={3}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Card
        sx={{
          bgcolor: "#191970",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: 7,
          width: mdUpBp ? "100%" : "50%",
          height: "13em",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "50%" }}
          image={cardMap[brand]}
          alt="card logo"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography
              variant="subtitle1"
              component="div"
              fontWeight="bold"
              fontSize="0.9em"
            >
              ******{number}
            </Typography>
            <Typography fontSize="0.9em" fontWeight="bold">
              Expires {expiry}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Stack>
  );
};

export default PaymentCard;
