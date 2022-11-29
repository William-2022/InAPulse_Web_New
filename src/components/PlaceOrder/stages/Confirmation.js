import React, { useState, useEffect } from "react";
import { Typography, Box, Checkbox } from "@mui/material";
import UseOrder from "../../../hooks/useOrder";
import SectionHeader from "../SectionHeader";
import { Link } from "react-router-dom";
import moment from "moment";

const Confirmation = ({ handletoStage, setIsCurrentStageValid }) => {
  const { order } = UseOrder();
  const [agree, setAgree] = useState(false);
  const {
    pickupFullAddress,
    pickupPersonName,
    pickupPersonPhone,
    pickupAddress2,
    dropLat,
    pickupLat,
    dropFullAddress,
    dropPersonName,
    dropPersonPhone,
    dropAddress2,
    packageDescription,
    scheduledAt,
  } = order;
  const isValid =
    // pickup
    Boolean(pickupFullAddress) &&
    Boolean(pickupLat) &&
    Boolean(pickupPersonName) &&
    pickupPersonPhone?.length === 12 &&
    // drop off
    Boolean(dropFullAddress) &&
    Boolean(dropLat) &&
    Boolean(dropPersonName) &&
    dropPersonPhone?.length === 12 &&
    dropFullAddress !== pickupFullAddress &&
    // package description
    Boolean(packageDescription) &&
    //either asap or scheduled time is larger than current time
    (!scheduledAt || new Date(scheduledAt) >= new Date()) &&
    // checkbox
    agree;
  useEffect(() => {
    setIsCurrentStageValid(isValid);
  }, [isValid, setIsCurrentStageValid]);
  return (
    <Box sx={{ width: "80%", "&>section": { my: "20px" } }}>
      <Box id="details" component={"section"}>
        <SectionHeader
          title="Delivery Details"
          onClick={() => handletoStage(0)}
        />
        <Typography>{`Item Type: ${packageDescription}`}</Typography>
      </Box>
      <Box id="pickup" component={"section"}>
        <SectionHeader
          title="Pickup Details"
          onClick={() => handletoStage(1)}
        />
        <Typography>{pickupFullAddress}</Typography>
        <Typography>{pickupAddress2 ? pickupAddress2 : " - "}</Typography>
        <Typography>{pickupPersonName}</Typography>
        <Typography>{pickupPersonPhone}</Typography>
      </Box>
      <Box id="dropoff" component={"section"}>
        <SectionHeader
          title="Dropoff Details"
          onClick={() => handletoStage(2)}
        />
        <Typography>{dropFullAddress}</Typography>
        <Typography>{dropAddress2 ? dropAddress2 : " - "}</Typography>
        <Typography>{dropPersonName}</Typography>
        <Typography>{dropPersonPhone}</Typography>
      </Box>
      
      <Box id="time" component={"section"}>
        <SectionHeader title="Delivery Time" onClick={() => handletoStage(3)} />
        <Typography>{`Time: ${
          scheduledAt
            ? moment(new Date(scheduledAt)).format("dddd, MMMM Do YYYY, h:mm a")
            : "ASAP"
        }`}</Typography>
      </Box>
      <Box id="checkbox" component={"section"}>
        <Typography
          sx={{
            "& a": {
              color: "primary.main",
              fontWeight: "bold",
            },
          }}
        >
          <Checkbox value={agree} onChange={() => setAgree((prev) => !prev)} />I
          accept this order doesn’t contain any illegal/resticted items, if
          illegal/restricted items are found by our delivery partner, they may
          report it to the law enforcement authorities. See Our &nbsp;
          <Link to="/Send" target="_blank" rel="noopener noreferrer">
            {"Package Guideline"}
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default Confirmation;
