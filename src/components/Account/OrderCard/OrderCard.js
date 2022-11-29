import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { orderDisplayText } from "../../../helpers/OrderStatus";
import Body from "../../general/Body";
import Button from "../../general/Button";
import Card from "../../general/Card";
import Title from "../../general/Title";

function OrderCard({ order, width = "450px" }) {
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const { DeliveryOrderPayment, DeliveryPackages, DeliveryOrderAddress } =
    order;

  const bodyStyle = { starting: 18, end: 16 };

  return (
    <Card
      className="orderCard"
      outline
      sx={{
        alignItems: "center",
        width: sm ? width: "100%",
        boxSizing: "border-box",
        minHeight: "550px",
      }}
    >
      <Title>${DeliveryOrderPayment.totalAmount}</Title>
      <Body mt={2} {...bodyStyle}>
        Order #{order.orderNumber}
      </Body>
      <Row label="Item" {...bodyStyle}>
        {DeliveryPackages[0].description}
      </Row>
      <Row label="Pickup" {...bodyStyle}>
        {(DeliveryOrderAddress.pickupAddress2
          ? DeliveryOrderAddress.pickupAddress2 + " - "
          : "") +
          DeliveryOrderAddress.pickupAddress +
          ", " +
          DeliveryOrderAddress.pickupCity}
      </Row>
      <Row label="Drop off" {...bodyStyle}>
        {(DeliveryOrderAddress.dropAddress2
          ? DeliveryOrderAddress.dropAddress2 + " - "
          : "") +
          DeliveryOrderAddress.dropAddress +
          ", " +
          DeliveryOrderAddress.dropCity}
      </Row>
      <Box sx={{ my: 3, display: "flex" }}>
        <Box
          component="img"
          alt={order.status + "-icon"}
          sx={{ height: 30, pr: 2 }}
          src={orderDisplayText[order.status].icon}
        />
        <Body {...bodyStyle}>{orderDisplayText[order.status].label}</Body>
      </Box>
      <Button
        sx={{ mt: 2 }}
        onClick={() => navigate("/OrderDetails/" + order.id)}
      >
        Order Details
      </Button>
    </Card>
  );
}

export default OrderCard;

const Row = ({ label, ...props }) => (
  <Box
    mt={2}
    sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
  >
    <Body width="30%" textAlign="right" {...props}>
      <b>{label}</b>
    </Body>
    <Body {...props} width="65%" textAlign="left" textTransform="capitalize">
      {props.children}
    </Body>
  </Box>
);
