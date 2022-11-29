import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import Body from "../general/Body";
import Button from "../general/Button";
import { orderCancel } from "../../apis/order";
import UseOrder from "../../hooks/useOrder";

function CancelOrder({ open, onDismiss, id, fetchOrderDetails }) {
  const [reason, setReason] = useState({
    value: "",
    comment: "",
    isValid: true,
  });
  const { fetchOrderList } = UseOrder();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const reasons = [
    "Want to change the payment method",
    "Change of mind",
    "Decided for an alternative item",
    "Pickup time is too long",
    "Price is too high",
    "Other",
  ];

  const submitCancel = async () => {
    setIsLoading(true);

    if (!reason.value) {
      setReason((old) => ({ ...old, isValid: false }));
      setIsLoading(false);
      return;
    }

    // Formats the data for the request
    let obj = {
      reason: `${reason.value}${
        reason.comment === "" ? "" : ` - ${reason.comment.trim()}`
      }`,
    };

    try {
      await orderCancel(id, obj);
      await fetchOrderDetails(id);
      await fetchOrderList();
      onDismiss();
    } catch (error) {
      setServerError(true);
    }
    setIsLoading(false);
  };

  const changeHandler = (e) => {
    setServerError(false);
    setReason((old) => ({
      ...old,
      [e.target.name]: e.target.value,
      isValid: true,
    }));
  };

  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{
        style: { borderRadius: 15 },
      }}
    >
      <DialogTitle sx={{ p: 3, fontWeight: "bold" }}>
        Sorry that you want to cancel
        <IconButton
          aria-label="close"
          onClick={onDismiss}
          sx={{
            position: "absolute",
            right: 18,
            top: 18,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Body>
          But before you do, please let us know the reason. Every bit of
          feedback helps!
        </Body>
        {serverError && (
          <FormHelperText error={true}>
            Oops. Looks like something went wrong! Please try again.
          </FormHelperText>
        )}
        <FormControl error={!reason.isValid} sx={{ mt: 4 }} fullWidth>
          <InputLabel id="reason-label">Reason</InputLabel>
          <Select
            labelId="cancel-reason-label"
            id="cancel-reason"
            name="value"
            value={reason.value}
            onChange={changeHandler}
            input={<OutlinedInput label="Reason" />}
          >
            {reasons.map((reason) => (
              <MenuItem key={reason} value={reason}>
                {reason}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {!reason.isValid && "Reason is required"}
          </FormHelperText>
        </FormControl>
        <TextField
          multiline
          variant="outlined"
          sx={{ mt: 2 }}
          rows={5}
          name="comment"
          onChange={changeHandler}
          label="Comments"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button loading={isLoading} onClick={submitCancel}>
          Cancel Order
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CancelOrder;
