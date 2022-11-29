import React, { useEffect,useState } from "react";
import { Typography, TextField, Grid, Divider } from "@mui/material";

import GoogleAutoComplete from "../../Calculator/GoogleAutoComplete";
import SavedAddressSelection from "../SavedAddressSelection";
import UseOrder from "../../../hooks/useOrder";

const PickupDetails = ({ setIsCurrentStageValid }) => {
  const { order, coverage, setParamOrder } = UseOrder();
  const [error, setError] = useState("");


  const handleSavedAddressSelect = (selectedAddress) => {
    //console.log(selectedAddress);
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

    setParamOrder("pickupFullAddress", `${address} , ${city}, ${province}`);
    setParamOrder("pickupAddress2", address2);
    setParamOrder("pickupLat", latitude);
    setParamOrder("pickupLong", longitude);
    setParamOrder("pickupPersonName", contactName);
    setParamOrder("pickupPersonPhone", contactPhone);
  };

  const handleSavedAddressClear = () => {
    setParamOrder("pickupFullAddress", ``);
    setParamOrder("pickupAddress2", "");
    setParamOrder("pickupLat", undefined);
    setParamOrder("pickupLong", undefined);
    setParamOrder("pickupPersonName", "");
    setParamOrder("pickupPersonPhone", "");
  };

  const {
    dropFullAddress,
    pickupFullAddress,
    pickupAddress2,
    pickupLat,
    pickupPersonName,
    pickupPersonPhone,
  } = order;
  const isValid =
    Boolean(pickupFullAddress) &&
    Boolean(pickupLat) &&
    Boolean(pickupPersonName) &&
    pickupPersonPhone?.length === 12;

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
          <Divider sx={{my:"20px"}}>Or</Divider>
          <Typography htmlFor="PickupLocation" mb={1}>
            Pickup Location*
          </Typography>
          <GoogleAutoComplete
            value={pickupFullAddress}
            coverage={coverage}
            handleChange={(address, lat, lng) => {
              setParamOrder("pickupFullAddress", address);
              setParamOrder("pickupLat", lat);
              setParamOrder("pickupLong", lng);
            }}
            name={"pickup address"}
            placeholder={"eg. 5650 Yonge Street, North York"}
          />
          <Typography htmlFor="PickupLocation" mb={1}>
            Unit (optional)
          </Typography>
          <TextField
            fullWidth
            value={pickupAddress2}
            color="secondary"
            type="text"
            name="unit"
            onChange={(e) => setParamOrder("pickupAddress2", e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography htmlFor="ContactName" mb={1}>
            Contact Name*
          </Typography>
          <TextField
            fullWidth
            required
            value={pickupPersonName}
            type="text"
            name="ContactName"
            onChange={(e) => setParamOrder("pickupPersonName", e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography htmlFor="PhoneNumber" mb={1}>
            Phone*
          </Typography>
          <TextField
            fullWidth
            required
            value={pickupPersonPhone}
            type="tel"
            inputProps={{ maxLength: 12 }}
            name="PhoneNumber"
            onChange={(e) => {
              let value = e.target.value;
              if (value <= 4) {
                value = "+1";
              }
              setParamOrder("pickupPersonPhone", value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography color={"error"}>{error}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PickupDetails;
