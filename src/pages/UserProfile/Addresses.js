import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import AddressCards from "./AddressCards";
import AddNewAddress from "./AddNewAddress";
import { getAddressList } from "../../apis/address";

const Addresses = () => {
  const [addresses, setAddresses] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const updateAddressList = async () => {
    try {
      await getAddressList().then((res) => {
        //console.log("Address list has been retrieved!");
        setAddresses(res.payload);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateAddressList();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}
      >
        Your saved addresses
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent:"flex-start",
          padding:"0",
         }}
      >
        {addresses?.map((address) => {
          return (
            <AddressCards
              updateAddressList={updateAddressList}
              key={address.id}
              address={address}
              name={address.name}
              location={`
                                    ${address.address}, 
                                    ${address.city}, 
                                    ${address.province}, 
                                    ${address.postalCode}
                                `}
            />
          );
        })}
      </Box>

      <Button
        disableRipple
        onClick={() => setIsOpen(true)}
        sx={{
          width:"18em",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: "0.8rem",
          textAlign: "center",
          py: "15px",
          px:"30px",
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 3,
          marginTop:"1%",
          "&:hover": {
            backgroundColor: "#f37d0d",
            transition: "1s",
          },
        }}
      >
        Add new address
      </Button>
      <AddNewAddress
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        updateAddressList={updateAddressList}
      />
    </Container>
  );
};

export default Addresses;
