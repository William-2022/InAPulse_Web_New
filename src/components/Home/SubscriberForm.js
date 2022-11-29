import React, { useRef, useState } from "react";
import { useMailChimp, Status } from "../../hooks/useMailChimp";
import * as yup from "yup";
import * as Valid from "../../helpers/Validation";
import Form from "../../helpers/Form";

import {
  Modal,
  CircularProgress,
  Box,
  useMediaQuery,
} from "@mui/material";
import Button from "../general/Button";
const SubscriberForm = () => {
  const { subscribe, status} = useMailChimp(
    "https://inapulse.us21.list-manage.com/subscribe/post?u=7095367b28c33feb4aa8171ca&amp;id=24dc3d0498&amp;f_id=0023c2e1f0"
  );
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  
  const inputSize = sm? true :false 
  const [open, setOpen] = useState(false);
  const initial = {
    email: "",
  };
  const inputs = [
    { label: "Email", key: "email", type: "email",half:inputSize },
  ];

  const onSubmitHandler = async (values) => {
    setOpen(true)
    try {
      await subscribe({
        EMAIL: values.email,
      });
      // Returns 200 to show appropriate message
      return {
        status: 200,
        message: "Message Sent. Thank you for your interest!",
      };
    } catch (error) {
      //console.log(error);
      return;
    }
  };
// Validation used for this form
const validation = yup.object().shape({
  ...Valid.email,
});

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const closeModal = (message) => {
    setTimeout(() => {
      setOpen(false);
    }, 2800);
    return <h2 style={{color:"orange"}}>{message}</h2>;
    
  };

  return (
    <>
      <Form
        validationSchema={validation}
        inputs={inputs}
        onSubmit={onSubmitHandler}
        initialValues={initial}
        disableToast
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {status === Status.loading
            ? <CircularProgress sx={{ width: "50px" }} />
            : status === Status.error
            ? closeModal("Error! Please try again")
            : status === Status.success
            ? closeModal("Subscribed successfully")
            : <CircularProgress sx={{ width: "50px" }} />}
        </Box>
      </Modal>
    </>
  );
};

export default SubscriberForm;
