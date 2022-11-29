import {
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import OrderTimeline from "../components/Account/OrderTimeline";
import Calculator from "../components/Calculator/Calculator";
import Title from "../components/general/Title";
import useAuth from "../hooks/useAuth";
import UseOrder from "../hooks/useOrder";
import InParentLoader from "../components/InParentLoader";
import { useNavigate } from "react-router-dom";
import OrderHistory from "./Account/OrderHistory";

const UserPanel = () => {
  const { user } = useAuth();
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const mdBreakPoint = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const small = useMediaQuery((theme) => theme.breakpoints.between('xs', 'sm'));

  const { activeOrder, coverage } = UseOrder();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const minSectionHeight = activeOrder
    ? "600px"
    : mdBreakPoint
    ? "550px"
    : null;

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: small ? 350 : 600,
    height: 390,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box>
      <Box display={"flex"}>
        <Box paddingTop="1%">
           <Title highlight={user?.attributes.name} title="Welcome back, " fontWeight="700" fontSize="44px"></Title>
        </Box>
      </Box>
      <Box sx={{paddingTop:"1%"}}>
        <Button
          disableRipple
          variant="contained"
          sx={{
            py: 1,
            borderRadius: "50px",
            fontSize: 16,
          }}
          onClick={() => setIsOpen(true)}
        >
          Get Quote
        </Button>
        <Modal
          onClose={() => setIsOpen(false)}
          open={isOpen}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={style}>
            <Title title="Get a" highlight="Quote" center />
            <Calculator
              topMargin={"10%"}
              authed
              bgColor="transparent"
              direction=""
            />
          </Box>
        </Modal>
        <Button
          disableRipple
          variant="contained"
          sx={{
            marginLeft:"2%",
            py: 1,
            borderRadius: "50px",
            fontSize: 16,
          }}
          onClick={() => navigate("/placeanorder")}
        >
          Place an order
        </Button>
      </Box>
      <Box my="10px">
        <Box>
          <Box
            sx={{
              marginTop:"1%",
              borderStyle: "solid",
              borderwidth: "1px",
              borderColor: "grey.400",
              borderRadius: 3,
              minHeight: minSectionHeight,
              py: sm && xs ? 0 : 4,
              px: 2,
              maxHeight: sm && xs ? "49%" : "100%",
            }}
          >
            <Typography variant="h4" fontWeight={"bold"} textAlign="center">
              Active Orders
            </Typography>
            <Box sx={sectionStyle}>
              {Boolean(activeOrder) ? (
                <Box width="80%">
                  <Title title="Current Order" />
                  <OrderTimeline
                    title=""
                    vertical
                    timeline={{
                      createdAt: activeOrder.createdAt,
                      ...activeOrder.DeliveryOrderDatetime,
                    }}
                    current={activeOrder.status}
                  />
                </Box>
              ) : (
                <Box display="flex" flexDirection={"column"}>
                  <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    textAlign="center"
                    paddingTop="10%"
                  >
                    You don't have any active orders now!
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserPanel;
