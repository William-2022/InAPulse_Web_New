import { Button, Container, Stack, Typography,Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import PaymentCard from "./PaymentCard";
import AddNewPayment from "./AddNewPayment";
import { getPaymentMethodList, deletePaymentMethod } from "../../apis/payment";
import Title from "../../components/general/Title";

const PaymentMethods = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getPaymentMethods();
  }, []);

  const getPaymentMethods = async () => {
    try {
      await getPaymentMethodList().then((res) => {
        setPaymentData(res.payload);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePayment = async (id) => {
    try {
      await deletePaymentMethod(id).then((res) => {
        //console.log("Payment removed!!");
        const newList = paymentData?.filter((item) => item.id !== id);
        setPaymentData(newList);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box  >
     <Title title="Payment" highlight="Methods"/>
      <Container
      sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height:"60vh",
          marginTop:"1%",
          alignSelf: "center",
          bgcolor: "background.paper",
          borderStyle: "solid",
          borderwidth: "1px",
          borderColor: "grey.400",
          borderRadius: 3,
          padding: "10% 25%",
        }}
      >
        {paymentData?.length===0 ? <Typography>You dont have any saved payment method.</Typography> : null }
        <Container>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
            spacing={2}
          >
            {paymentData?.map((payment) => {
              return (
                <React.Fragment key={payment.id}>
                  <PaymentCard
                    key={payment.id}
                    number={payment.last4}
                    expiry={`${payment.expMonth} / ${payment.expYear}`}
                    brand={payment.brand}
                    payment={payment}
                    deletePaymentMethod={deletePaymentMethod}
                  />
                  <Button
                    onClick={() => handleDeletePayment(payment.id)}
                    disableRipple
                    variant="outlined"
                    size="small"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      borderRadius: "5px",
                    }}
                  >
                    Delete payment
                  </Button>
                </React.Fragment>
              );
            })}
          </Stack>
        </Container>

        <Button
          disableRipple
          onClick={() => setIsOpen(true)}
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "0.8rem",
            marginBottom: "5em",
            textAlign: "center",
            mt: "20px",
            py: "15px",
            px: "30px",
            bgcolor: "primary.main",
            color: "white",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#f37d0d",
              transition: "1s",
            },
          }}
        >
          Add new card
        </Button>
        <AddNewPayment
          getPaymentMethods={getPaymentMethods}
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
        />
      </Container>
    </Box>
  );
};

export default PaymentMethods;
