import React, { useState } from "react";
import {
  Card,
  Typography,
  Box,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import AddNewAddress from "./AddNewAddress";
import useApi from "../../hooks/useApi";

const AddressCards = ({ name, location, address, updateAddressList }) => {
  const { id } = address;
  const [isOpen, setIsOpen] = useState(false);
  const { deleteAddress } = useApi();

  const handleRemove = async (id) => {
    try {
      await deleteAddress(id).then(() => {
        updateAddressList();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment key={id}>
      <Stack direction="row" spacing={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "3%",
          }}
        >
          <Card
            sx={{
              width: 280,
              borderRadius: "5px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              margin:"2%"
            }}
          >
            <CardContent
              sx={{
                padding:"0"
              }}
            >
              <Typography variant="h6" component="div" fontWeight="bold" >
                {name.toUpperCase()}
              </Typography>
              <Typography variant="h6" component="div" >
                {address.contactName}
                <br />
                {address.contactPhone}
                </Typography>
                <Typography variant="body2">
              <br />
                {location}
              </Typography>
            </CardContent>
            <br />
          </Card>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              width: 285,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0px 7px 0 2px",
            }}
          >
            <Button
              disableRipple
              variant="outlined"
              size="small"
              onClick={() => handleRemove(id)}
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              Delete address
            </Button>

            <Button
              disableRipple
              variant="contained"
              onClick={()=>setIsOpen(true)}
              size="small"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              Update Address
            </Button>
          </Stack>
        </Box>

        <AddNewAddress
          isOpen={isOpen}
          address={address}
          handleClose={() => setIsOpen(false)}
          updateAddressList={updateAddressList}
        />
      </Stack>
    </React.Fragment>
  );
};

export default AddressCards;
