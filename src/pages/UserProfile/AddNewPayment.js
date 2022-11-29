import {
  Box,
  Stack,
  FormLabel,
  Input,
  Button,
  Modal,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { createPaymentMethod } from "../../apis/payment";

const AddNewPayment = ({ isOpen, handleClose, getPaymentMethods }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleExpMonth = (e) => {
    setExpiryMonth(e.target.value);
  };

  const handleExpYear = (e) => {
    setExpiryYear(e.target.value);
  };

  const handleSecurityCode = (e) => {
    setSecurityCode(e.target.value);
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleAddPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const paymentInfo = {
        number: cardNumber,
        expMonth: expiryMonth,
        expYear: expiryYear,
        cvc: securityCode,
      };
      //console.log(paymentInfo);

      await createPaymentMethod(paymentInfo).then((res) => {
        //console.log("Payment method added!");
        // refresh paymentmethod list in parent
        getPaymentMethods();
        // closes popup
        handleClose();
      });
    } catch (error) {
      setError("Invalid Credential");
      console.error(error.response.data);
    }
    setIsLoading(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          borderRadius: "10px",
          p: 4,
        }}
      >
        <Stack direction="column" alignItems="center" justifyContent="center">
          <form onSubmit={handleAddPayment}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Add A Payment Method
            </Typography>
            <br />
            <InputGroup
              label="Card Number"
              placeholder="4242 4242 4242"
              onChange={handleCardNumber}
              value={cardNumber}
            />
            <br />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <InputGroup
                label="Expiration month"
                placeholder="MM"
                onChange={handleExpMonth}
                value={expiryMonth}
              />
              <InputGroup
                label="Expiration year"
                placeholder="YYYY"
                onChange={handleExpYear}
                value={expiryYear}
              />
              <InputGroup
                label="Security code"
                placeholder="0309"
                onChange={handleSecurityCode}
                value={securityCode}
              />
            </Stack>
            <Typography sx={{ height: "20px" }} color="error">
              {error}
            </Typography>
            <Stack
              sx={{
                my: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                disableRipple
                disabled={isLoading}
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  width: "16em",
                  bgcolor: "primary.main",
                }}
              >
                Add
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddNewPayment;

const InputGroup = ({ label, value, onChange, placeholder }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "350px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormLabel sx={{ marginRight: "auto" }}>{label || "Label"}</FormLabel>
      <Input
        fullWidth
        type="text"
        value={value}
        onChange={onChange}
        disableUnderline
        placeholder={placeholder}
        sx={{
          border: 1,
          borderRadius: 1,
          paddingX: "0.6rem",
          paddingY: "0.3rem",
          borderColor: "#aaa",
        }}
      />
    </Box>
  );
};
