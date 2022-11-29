import { useState, useEffect } from "react";
import moment from "moment";
import {
  TextField,
  Button,
  Typography,
  Fade,
  Modal,
  Box,
  Backdrop,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import UseOrder from "../../hooks/useOrder";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Scheduler = ({ open, handleClose }) => {
  const { order, setParamOrder } = UseOrder();
  const [date, setDate] = useState(
    order.scheduledAt
      ? new Date(order.scheduledAt)
      : new Date(moment().add(5, "minutes"))
  );
  const [error, setError] = useState("");

  useEffect(() => {
    setDate(
      order.scheduledAt
        ? new Date(order.scheduledAt)
        : new Date(moment().add(5, "minutes"))
    );
  }, [order.scheduledAt, open]);

  const handleChange = (selectedDate) => {
    setError("");
    setDate(selectedDate);
  };

  const handleConfirm = () => {
    if (date >= new Date()) {
      const isoString = date.toISOString();
      setParamOrder("scheduledAt", isoString);
      handleClose();
    } else {
      setError("Please select a future time.");
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h5" fontWeight="bold">
            Pick A Scheduled Time
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Our working hours is from 8am - 8pm Monday to Sunday.
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              minDate={new Date()}
              maxDate={new Date(moment().add(1, "months"))}
              minTime={new Date(0, 0, 0, 8)}
              maxTime={new Date(0, 0, 0, 20)}
              value={date}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField sx={{ my: "20px" }} {...params} />
              )}
            />
          </LocalizationProvider>
          <Typography my="10px" textAlign="right" color="error">
            {error}
          </Typography>
          <Box display="flex" gap="10px">
            <Button
              variant="contained"
              sx={{ ml: "auto" }}
              onClick={handleConfirm}
            >
              Confirm
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Scheduler;
