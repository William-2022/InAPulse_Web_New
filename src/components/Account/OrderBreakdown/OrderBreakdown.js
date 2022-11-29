import { Box, useMediaQuery } from "@mui/material";
import React from "react";

import { formatPhone } from "../../../helpers/formatter";
import Body from "../../general/Body";
import Section from "../../general/Section";
import SpacedText from "../../general/SpacedText";

function OrderBreakdown({ order }) {
  const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const {
    DeliveryOrderAddress: address,
    DeliveryOrderContact: contact,
    DeliveryPartner: partner,
    DeliveryOrderPrice: price,
    DeliveryOrderTipPayment: tip,
  } = order;

  const priceList = [
    {
      label: "Delivery Fee",
      value: price.deliveryChargeAmount.toFixed(2),
    },
    {
      label: "Discount",
      value: price.discountAmount.toFixed(2),
      color: "green",
      hidden: !price?.discountAmount,
    },
    {
      label: "Tip",
      value: tip?.totalAmount.toFixed(2),
      hidden: !tip?.totalAmount,
    },
    {
      label: "Subtotal",
      value: price.subTotalChargeAmount.toFixed(2),
    },
    {
      label: `Taxes (${price.salesTaxRate * 100}%)`,
      value: price.salesTaxChargeAmount.toFixed(2),
    },
    {
      label: "Total",
      value: price.totalChargeAmount.toFixed(2),
      bold: true,
    },
  ];

  const style = {
    py: 0,
    mb: 0,
    noCenter: true,
    sx: {
      px: sm ? "5%" : 0,
      flexBasis: sm ? "100%" : "50%",
      minWidth: 225,
    },
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Section subtitle={"Sender"} accordion={sm} {...style}>
        <Body mt={2} mb={4}>
          {contact.pickupName} <br /> {formatPhone(contact.pickupPhone)}
          <br />
          <br />
          {address.pickupAddress2 && `${address.pickupAddress2} - `}
          {address.pickupAddress} <br />
          {`${address.pickupCity} ${address.pickupProvince}`}
        </Body>
      </Section>

      <Section subtitle={"Receiver"} accordion={sm} {...style}>
        <Body mt={2} mb={4}>
          {contact.dropName}
          <br />
          {formatPhone(contact.dropPhone)}
          <br />
          <br />
          {address.dropAddress2 && `${address.dropAddress2} - `}
          {address.dropAddress}
          <br />
          {`${address.dropCity} ${address.dropProvince}`}
        </Body>
      </Section>
      <Section subtitle={"Driver"} accordion={sm} {...style}>
        <Body mt={2} mb={4}>
          {partner?.name || "No Driver Assigned"}
          <br />
          {partner &&
            partner?.DeliveryPartnerVehicles[0] &&
            `${partner?.DeliveryPartnerVehicles[0].make} ${partner?.DeliveryPartnerVehicles[0].model}, ${partner?.DeliveryPartnerVehicles[0].color}`}
        </Body>
      </Section>

      <Section subtitle={"Payment"} accordion={sm} {...style}>
        {priceList.map(({ label, value, hidden, ...other }, index) => {
          if (hidden) return null;
          return (
            <SpacedText
              key={index}
              mb={1}
              title={label}
              value={`$${value}`}
              {...other}
            />
          );
        })}
      </Section>
    </Box>
  );
}

export default OrderBreakdown;
