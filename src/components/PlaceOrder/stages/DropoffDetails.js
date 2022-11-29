import React, { useEffect, useState } from "react";
import { Typography, TextField, Grid, Divider } from "@mui/material";

import GoogleAutoComplete from "../../Calculator/GoogleAutoComplete";
import SavedAddressSelection from "../SavedAddressSelection";
import UseOrder from "../../../hooks/useOrder";

const DropoffDetails = ({ setIsCurrentStageValid }) => {
  const { order, coverage, setParamOrder } = UseOrder();
  const [error, setError] = useState("");

  const handleSavedAddressSelect = (selectedAddress) => {
    console.log(selectedAddress);
    const {
      address,
      address2,
      city,
      province,
      latitude,
      longitude,
      contactName,
      contactPhone,
    } = selectedAddress;

    setParamOrder("dropFullAddress", `${address} , ${city}, ${province}`);
    setParamOrder("dropAddress2", address2);
    setParamOrder("dropLat", latitude);
    setParamOrder("dropLong", longitude);
    setParamOrder("dropPersonName", contactName);
    setParamOrder("dropPersonPhone", contactPhone);
  };

  const handleSavedAddressClear = () => {
    setParamOrder("dropFullAddress", ``);
    setParamOrder("dropAddress2", "");
    setParamOrder("dropLat", undefined);
    setParamOrder("dropLong", undefined);
    setParamOrder("dropPersonName", "");
    setParamOrder("dropPersonPhone", "");
  };

  const {
    pickupFullAddress,
    dropFullAddress,
    dropAddress2,
    dropLat,
    dropPersonName,
    dropPersonPhone,
  } = order;
  const isValid =
    Boolean(dropFullAddress) &&
    Boolean(dropLat) &&
    Boolean(dropPersonName) &&
    dropPersonPhone?.length === 12 &&
    dropFullAddress !== pickupFullAddress;

  useEffect(() => {
    setIsCurrentStageValid(isValid);
    if (dropFullAddress === pickupFullAddress && dropFullAddress) {
      setError("Pickup and Dropoff address cannot be the same");
    }else{
      setError("")
    }
  }, [isValid, setIsCurrentStageValid, dropFullAddress, pickupFullAddress]);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SavedAddressSelection
            handleSelect={handleSavedAddressSelect}
            handleClear={handleSavedAddressClear}
          />
          <Divider sx={{ my: "20px" }}>Or</Divider>
          <Typography htmlFor="dropLocation" mb={1}>
            Drop Location*
          </Typography>
          <GoogleAutoComplete
            value={dropFullAddress}
            coverage={coverage}
            handleChange={(address, lat, lng) => {
              setParamOrder("dropFullAddress", address);
              setParamOrder("dropLat", lat);
              setParamOrder("dropLong", lng);
            }}
            name={"drop address"}
            placeholder={"eg. 5650 Yonge Street, North York"}
          />
          <Typography htmlFor="dropLocation" mb={1}>
            Unit (optional)
          </Typography>
          <TextField
            fullWidth
            value={dropAddress2}
            color="secondary"
            type="text"
            name="unit"
            onChange={(e) => setParamOrder("dropAddress2", e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography htmlFor="ContactName" mb={1}>
            Contact Name*
          </Typography>
          <TextField
            fullWidth
            required
            value={dropPersonName}
            type="text"
            name="ContactName"
            onChange={(e) => setParamOrder("dropPersonName", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography htmlFor="PhoneNumber" mb={1}>
            Phone*
          </Typography>
          <TextField
            fullWidth
            required
            value={dropPersonPhone}
            type="tel"
            inputProps={{ maxLength: 12 }}
            name="PhoneNumber"
            onChange={(e) => {
              let value = e.target.value;
              if (value <= 4) {
                value = "+1";
              }
              setParamOrder("dropPersonPhone", value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography color="error">{error}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DropoffDetails;
