import React, { useState, useEffect } from "react";
import { Typography, TextField, Autocomplete } from "@mui/material";
import useApi from "../../hooks/useApi";
import { useMemo } from "react";

const SavedAddressSelection = ({ handleSelect,handleClear }) => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const { getAddressList } = useApi();

  const labelList = useMemo(
    () =>
      savedAddresses.map((address) => {
        const modaddress = address;
        modaddress.label = address.name;

        return modaddress;
      }),
    [savedAddresses]
  );

  const handleChange = (_,value) => {
    if (value){
      handleSelect(value);
    }else{
      handleClear()
    }
  };

  useEffect(() => {
    getAddressList()
      .then((res) => {
        setSavedAddresses(res.payload);
      })
      .catch((err) => console.log(err));
  }, [getAddressList]);

  return (
    <>
      <Typography htmlFor="PickupLocation" mb={1}>
        Select from Your Saved Addresses
      </Typography>
      <Autocomplete
        disablePortal
        sx={{ width: "100%" }}
        options={labelList}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
};

export default SavedAddressSelection;
