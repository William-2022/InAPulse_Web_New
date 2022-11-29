import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SubmitStatusModal = ({ open, handleClose, orderid }) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          fontWeight={"bold"}
        >
          Order Submitted !
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Thank you for placing your order.
        </Typography>
        <Box display="flex" mx="10%" mt="30px">
          <Button
            variant="contained"
            onClick={() => navigate(`/orderDetails/${orderid}`)}
            sx={{ width: "140px", height: "50px",fontWeight:500 }}
          >
            check order
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{ ml: "auto", width: "140px", height: "50px",fontWeight:500 }}
          >
            home
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SubmitStatusModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 3,
  textAlign: "center",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
