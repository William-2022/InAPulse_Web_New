import * as React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useAuth from "../hooks/useAuth";
import Button from "./general/Button";
import { useNavigate } from "react-router-dom";

export default function ConfirmCode({ visible, setVisible, values }) {
  const { confirmSignUpCode, reSendConfirmationCode, signIn } = useAuth();
  const [code, setCode] = useState({ value: "", isValid: true });
  const [hasError, setHasError] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async () => {
    let isCodeValid = code.value?.length === 6;

    if (!isCodeValid) {
      setCode((old) => ({ value: old.value, isValid: isCodeValid }));
      return;
    }

    try {
      await confirmSignUpCode(values.email, code.value);
      signIn(values.email, values.password);
      navigate("/");
    } catch (error) {
      if (error.name === "CodeMismatchException")
        setHasError("Code does not match one sent!");
      if (error.name === "ExpiredCodeException") {
        setHasError("This code has expired a new one has been sent to you!");
        reSendConfirmationCode(values.email);
      }
      //console.error(error);
    }
  };

  return (
    <Dialog open={visible} fullWidth>
      <DialogTitle sx={{ py: 4, px: 5 }}>
        <Typography variant="h4">Verification Code</Typography>
      </DialogTitle>
      <DialogContent sx={{ px: 5 }}>
        <DialogContentText mb={2}>
          <Typography fontSize={18}>
            Please enter the verification code that was sent to you.
          </Typography>
        </DialogContentText>
        <TextField
          autoFocus
          id="confirmCode"
          label="Verification code"
          type="numeric"
          inputProps={{
            maxLength: 6,
          }}
          fullWidth
          error={!code.isValid || hasError}
          helperText={
            !code.isValid ? "Code must be a numeric 6 digits" : hasError || " "
          }
          onChange={(e) => setCode({ value: e.target.value, isValid: true })}
        />
      </DialogContent>
      <DialogActions sx={{ py: 4, px: 5 }}>
        <Button color="secondary" variant="outlined" onClick={setVisible}>
          Cancel
        </Button>
        <Button onClick={submitHandler}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
