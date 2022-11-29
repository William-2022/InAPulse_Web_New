import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Box, useMediaQuery, Typography } from "@mui/material";

import Button from "../general/Button";
import useQuotation from "../../hooks/useQuotation";
import EstimateFlexRow from "../EstimateFlexRow";
import Title from "../general/Title";
import Body from "../general/Body";

const CalculatorModal = ({ open, handleClose,  business }) => {
  const { quotation } = useQuotation();

  const isSmdUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  let navigate = useNavigate();
 
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmdUp ? "50%" : "88%",
    overflowY: "auto",
    maxWidth: 500,
    minHeight: 500,
    maxHeight: "98vh",
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };

  const {
    pickupFullAddress,
    dropFullAddress,
    totalChargeAmount,
    deliveryChargeAmount,
    subTotalChargeAmount,
    salesTaxChargeAmount,
    discountAmount,
  } = quotation;

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Title id="modal-modal-title">Your Delivery Quote!</Title>

        {Boolean(pickupFullAddress) && (
          <>
            <Body mt={2} fontWeight={"bold"} component="h6">
              Delivery Info
            </Body>
            <Box
              sx={{
                px: 2,
                py: 3,
                mt: 2,
                borderColor: "secondary",
                borderStyle: "solid",
                borderRadius: 2,
                borderWidth: 1,
              }}
            >
              <Body variant={"h6"}>From</Body>
              <Body starting={18}>{pickupFullAddress}</Body>
              <Body mt={2} variant={"h6"}>
                To
              </Body>
              <Body starting={18}>{dropFullAddress}</Body>
            </Box>
          </>
        )}
        <Body mt={2} fontWeight={"bold"} component="h6">
          Pricing Details
        </Body>
        <Box
          sx={{
            px: 2,
            py: 3,
            mt: 2,
            borderColor: "secondary",
            borderStyle: "solid",
            borderRadius: 2,
            borderWidth: 1,
          }}
        >
          <EstimateFlexRow
            label={"Delivery Fee"}
            price={deliveryChargeAmount}
          />
          <EstimateFlexRow label={"Subtotal"} price={subTotalChargeAmount} />
          {Boolean(discountAmount) && (
            <EstimateFlexRow minus label={"Discount"} price={discountAmount} />
          )}
          <EstimateFlexRow label={"Tax"} price={salesTaxChargeAmount} />
          <EstimateFlexRow bold label={"Total"} price={totalChargeAmount} />
        </Box>
        {business && (
          <>
            <Typography mt={3} color="warning.main" textAlign={"center"}>
              {
                "Business Delivery app is on the way! Meanwhile, please call the following number for order assistance:"
              }
            </Typography>
            <Typography mb={3} color="warning.main" textAlign={"center"}>
              +1 (647) 881-6028
            </Typography>
          </>
        )}
        <Typography sx={{ m: 2 }} textAlign="center" color="red" fontWeight="bold">
          Sign up to get your first free delivery !
        </Typography>
        <Box sx={{ display: "flex",justifyContent:"space-around", gap: "10px", mt: 3 }}>
          {/* <Button  onClick={() => navigate("/SignUp")}>
            {business ? "Ok" : "Continue"}
          </Button> */}
          <Button  variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CalculatorModal;
