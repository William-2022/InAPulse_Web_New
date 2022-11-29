import React, { useState } from "react";
import useQuotation from "../../hooks/useQuotation";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Title from "../general/Title";
import CalculatorForm from "./CalculatorForm";
// import CustomButton from "../general/Button";
import CalculatorModal from "./CalculatorModal";
// import getBusinessDeliveryOrderPrice from "../../helpers/businessBulkCalculator";
import EstimateFlexRow from "../EstimateFlexRow";

const BusinessCalculator = ({ bgColor }) => {
  const { quotation } = useQuotation();
  const mdup = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [formData, setFormData] = useState({
    pickup: quotation.pickupFullAddress,
    dropOff: quotation.dropFullAddress,
    pickupLat: quotation.pickupLat,
    pickupLng: quotation.pickupLng,
    dropLat: quotation.dropLat,
    dropLng: quotation.dropLng,
  });
  const [open, setOpen] = useState(false);

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
  // const [numOfOrder, setNumOfOrder] = useState(2);

  // const handleNumOfOrderChange = (e) => {
  //   if (e.target.value <= 20 && e.target.value >= 0) {
  //     setNumOfOrder(e.target.value);
  //   }
  // };

  // const handleSubmit = () => {
  //   if (numOfOrder > 1) {
  //     const deliveryChargeAmount = getBusinessDeliveryOrderPrice(numOfOrder);
  //     const subTotalChargeAmount = deliveryChargeAmount;
  //     const salesTaxChargeAmount = deliveryChargeAmount * 0.13;
  //     const totalChargeAmount = subTotalChargeAmount + salesTaxChargeAmount;

  //     setQuotation({
  //       pickup: "",
  //       dropOff: "",
  //       pickupLat: 0,
  //       pickupLng: 0,
  //       dropLat: 0,
  //       dropLng: 0,
  //       deliveryChargeAmount,
  //       subTotalChargeAmount,
  //       salesTaxChargeAmount,
  //       totalChargeAmount,
  //     });
  //     setOpen(true);
  //   }
  // };

  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        gap: "20px",
        px: 3,
        py: 8,
      }}
      bgcolor={bgColor}
    >
      <Title sx={{ fontSize: "38px" }} title="Multiple Destinations" center />
      <Typography my={3} variant="h6" color="grey.500">
        Get a discounted price when delivering to multiple destinations all at
        once!
      </Typography>{" "}
      <Typography my={2} variant="h5" fontWeight="bold">
        Order Discount Chart
      </Typography>
      <Box
        sx={{
          width: mdup ? "50%" : "90%",
          border: "5px solid black",
          p: 2,
          borderRadius: 2,
        }}
      >
        <EstimateFlexRow
          label="5-9 destinations "
          price={10}
          unitFix={0}
          unit="% Off"
          moneySign={false}
        />
        <EstimateFlexRow
          label="10-14 destinations "
          price={15}
          unitFix={0}
          unit="% Off"
          moneySign={false}
        />
        <EstimateFlexRow
          label="15+ destinations "
          price={20}
          unitFix={0}
          unit="% Off"
          moneySign={false}
        />
      </Box>
      {/* <TextField
        label="Number of Addresses"
        sx={{
          my: 5,
          width: mdup?"30%":"80%",
        }}
        type="number"
        value={numOfOrder}
        onChange={handleNumOfOrderChange}
      ></TextField>
      <CustomButton
        className="calculator-button"
        disabled={numOfOrder < 2}
        onClick={handleSubmit}
        sx={{ mt: 3, mx: "auto" }}
      >
        Get quote
      </CustomButton> */}
      <Divider
        sx={{
          width: "80%",
          my:2,
          "&::before,&::after": {
            borderColor: "black",
          },
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Or
        </Typography>
      </Divider>
      <CalculatorModal
        open={open}
        handleClose={handleClose}
        handleContinue={handleClose}
        business
      />
      <Title sx={{ fontSize: "38px" }} title="Single Destination" center />
      <Typography my={3} variant="h6" color="grey.500">
        Do a quick and swift single destination delivery!
      </Typography>
      <CalculatorForm
        formData={formData}
        setOpen={setOpen}
        handleClearAddresses={handleClearAddresses}
        setFormData={setFormData}
        business
      />
    </Box>
  );
};

export default BusinessCalculator;
