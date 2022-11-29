import * as React from "react";
import { Alert } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useAuth from "../hooks/useAuth";

export default function NewPassword({
  isOpen,
  setSignInPassword,
  signInPassword,
}) {
  const { reSendConfirmationCode, forgetPasswordSubmit } = useAuth();

  const [open, setOpen] = useState(isOpen);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const [isCodeNotCorrect, setIsCodeNotCorrect] = useState(false);
  const [isCodeExpired, setIsCodeExpired] = useState(false);

  const handleEmailConfirmation = (e) => {
    setVerifyEmail(e.target.value);
  };

  const handleCodeConfirmation = (e) => {
    setVerifyCode(e.target.value);
  };

  const handleNewCode = () => {
    reSendConfirmationCode(verifyEmail);
  };

  const handleNewPassword = (e) => {
    setSignInPassword(() => e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const verifyNewPassword = async (e) => {
    e.preventDefault();

    try {
      await forgetPasswordSubmit(verifyEmail, verifyCode, signInPassword);
      handleClose();
    } catch (error) {
      error.name === "CodeMismatchException"
        ? setIsCodeNotCorrect(true)
        : window.alert(error);
      error.name === "ExpiredCodeException"
        ? setIsCodeExpired(true)
        : window.alert(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a new password</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="confirmEmail"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={handleEmailConfirmation}
        />
        <DialogContentText>Verify your email address</DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="confirmCode"
          label="Confirmation code"
          type="string"
          fullWidth
          variant="standard"
          onChange={handleCodeConfirmation}
        />
        <DialogContentText>Verify your confirmation code</DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="confirmCode"
          label="New password"
          type="string"
          fullWidth
          variant="standard"
          onChange={handleNewPassword}
        />
        <DialogContentText>Enter a new password</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {isCodeExpired && <Button onClick={handleNewCode}>Re-send code</Button>}
        <Button onClick={verifyNewPassword}>Submit</Button>
      </DialogActions>

      {isCodeNotCorrect && (
        <Alert severity="warning">
          Invalid verification code. Please check your email and try again.{" "}
        </Alert>
      )}
      {isCodeExpired && (
        <Alert severity="warning">
          Code has expired. Please request a new code and try again.
        </Alert>
      )}
    </Dialog>
  );
}
