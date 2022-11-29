import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

import useQuotation from "../../hooks/useQuotation";
import CalculatorForm from "./CalculatorForm";
import CalculatorModal from "./CalculatorModal";
import Title from "../general/Title";
import UseOrder from "../../hooks/useOrder";
import { useNavigate } from "react-router-dom";

export default function Calculator({
  bgColor = "background.primary",
  title="",
  authed,
  direction,topMargin
}) {
  const { quotation } = useQuotation();
  const { setParamOrder } = UseOrder();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    pickup: quotation.pickupFullAddress,
    dropOff: quotation.dropFullAddress,
    pickupLat: quotation.pickupLat,
    pickupLng: quotation.pickupLng,
    dropLat: quotation.dropLat,
    dropLng: quotation.dropLng,
  });

  const md=useMediaQuery(theme=>theme.breakpoints.up("md"))

  const navigate = useNavigate();

  const handleClearAddresses = () => {
    setFormData({
      pickup: "",
      dropOff: "",
      pickupLat: 0,
      pickupLng: 0,
      dropLat: 0,
      dropLng: 0,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleContinue = () => {
    setParamOrder("pickupFullAddress", quotation.pickupFullAddress);
    setParamOrder("dropFullAddress", quotation.dropFullAddress);
    setParamOrder("pickupLat", quotation.pickupLat);
    setParamOrder("pickupLong", quotation.pickupLng);
    setParamOrder("dropLat", quotation.dropLat);
    setParamOrder("dropLong", quotation.dropLng);
    setOpen(false);
    navigate("/PlaceAnOrder");
  };
  return (
    <Box
      sx={{
        display: "flex",
        width:"100%",
        flexDirection: "column",
        alignItems: md ? null:"center",
        justifyItems: "center",
        gap: "1px",
        pr:3,
        py:2,
      }}
      bgcolor={bgColor}
    >
      <Title sx={{fontSize:"38px"}} title={title}  />
      <CalculatorForm
        authed={authed}
        formData={formData}
        setOpen={setOpen}
        handleClearAddresses={handleClearAddresses}
        setFormData={setFormData}
        direction={direction}
      />
      <CalculatorModal
        open={open}
        handleClose={handleClose}
        handleContinue={handleContinue}
      />
    </Box>
  );
}
