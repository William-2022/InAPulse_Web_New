import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AlreadyHaveOrder = ({ orderId }) => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      flexDirection="column"
      gap="20px"
      px="15x"
      minHeight="500px"
    >
      <Typography textAlign="center" variant="h4" fontWeight={"bold"}>
        {" "}
        Seems Like You Already Have An Order
      </Typography>
      <Typography variant="h6">
        Please first finished your order then try again
      </Typography>
      <Stack direction={"row"} gap="40px">
        {Boolean(orderId) && (
          <Button
            disableRipple
            sx={buttonStyle}
            onClick={() => navigate(`/OrderDetails/${orderId}`)}
            variant="contained"
          >
            Check Order
          </Button>
        )}
        <Button
          disableRipple
          variant="outlined"
          sx={buttonStyle}
          onClick={() => navigate(`/userpanel`)}
        >
          Dashboard
        </Button>
      </Stack>
    </Box>
  );
};

const buttonStyle = {
  fontWeight: "bold",
  px: "20px",
  py: "15px",
};

export default AlreadyHaveOrder;
