import React, { useState } from "react";
import {
  CircularProgress,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

import GoogleAutoComplete from "./GoogleAutoComplete";
import { getUnAuthedOrderEstimate } from "../../apis/quote";
import {
  orderEstimate,
  getCustomerOrderPromotion,
  getBusinessEstimate,
} from "../../apis/order";
import CustomButton from "../general/Button";
import useQuotation from "../../hooks/useQuotation";
import UseOrder from "../../hooks/useOrder";

const CalculatorForm = ({
  formData,
  setFormData,
  setOpen,
  handleClearAddresses,
  authed,
  business,
  direction,
}) => {
  const { pickupLat, pickupLng, dropLat, dropLng } = formData;
  const { setQuotation, handleClearQuotation } = useQuotation();
  const { coverage, businessCoverage } = UseOrder();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  
  


  const handleSubmit = () => {
    setError(false);
    setIsLoading(true);
 
    if (authed) {
      getCustomerOrderPromotion()
        .then((res) => res.payload.discoutCode)
        .then((code) =>
          orderEstimate({
            pickupFullAddress: formData.pickup,
            dropFullAddress: formData.dropOff,
            discountCode: code,
          })
        )
        .then((res) => {
          setQuotation({
            ...res.payload,
            pickupLat,
            pickupLng,
            dropLat,
            dropLng,
          });
          setOpen(true);
          //console.log(res.payload);
        })
        .catch((err) => {
          //console.log(err.response.data);
          if (err.response.status === 400) {
            setError("At least one of the addresses you entered is invalid.");
          } else {
            setError(
              "oops, looks like something went wrong. Please try again later"
            );
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }

    getUnAuthedOrderEstimate({
      pickupFullAddress: formData.pickup,
      dropFullAddress: formData.dropOff,
    })
      .then((res) => {
        setQuotation({
          ...res.payload,
          pickupLat,
          pickupLng,
          dropLat,
          dropLng,
        });
        setOpen(true);
        //console.log(res.payload);
      })
      .catch((err) => {
        //console.log(err.response.data);
        if (err.response.status === 400) {
          setError("At least one of the addresses you entered is invalid.");
        } else {
          setError(
            "Oops, looks like something went wrong. Please try again later"
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  return Boolean(coverage.length && businessCoverage?.length) ? (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection:   sm && md && direction ?  "row":"column",
          width: sm && !authed ? "80%" : "100%",
          maxWidth: 800,
          // mx: "auto",
        }}
      >
        <GoogleAutoComplete
          value={formData.pickup}
          coverage={business ? businessCoverage : coverage}
          handleChange={(address, lat, lng) =>
            setFormData((prev) => {
              return {
                ...prev,
                pickup: address,
                pickupLat: lat,
                pickupLng: lng,
              };
            })
          }
          name={"pickup"}
          placeholder={"Pickup Location"}
          
        />
        <GoogleAutoComplete
          value={formData.dropOff}
          coverage={business ? businessCoverage : coverage}
          error={error}
          handleChange={(address, lat, lng) =>
            setFormData((prev) => {
              return {
                ...prev,
                dropOff: address,
                dropLat: lat,
                dropLng: lng,
              };
            })
          }
          name={"dropoff"}
          placeholder={"Dropoff Location"}
          
        />
        <Typography mb={1} color="error" variant="subtitle1">
          {error}
        </Typography>
          
        <Button
        fontWeight={"bold"}
          className="calculator-button"
          disabled={!Boolean(pickupLat && dropLat)}
          onClick={handleSubmit}
          loading={isLoading}
          variant="contained"
          sx={{
            alignSelf: md && !business && !authed ? null : "center",
            px:lg?0  : md? 0 : sm? "12%" : xs ? "2%" : null ,
            width: direction?" 130px" : "290px" ,
            height: lg?1 : md? 0.9 : sm? "12%" : "8%" ,
            py:lg?2  : md? 2.1 : sm ? "2%" : null  ,
            textTransform: "none",
            borderRadius:sm && md &&  direction? "0 50px 50px 0" : "50px",
            fontSize:lg?14: md?11 : sm?10 : 13 ,
          }}
        >
          Get a quote
        </Button>
      </Box>
      <Button
        sx={{
          alignSelf: md && !business && !authed ? null : "center",
          fontSize: xl?"20px" :lg?"19px": md?"18px" : sm?"16px" : "13px",
          textTransform: "none",
          width: "fit-content",
          // m: "auto",
          textDecoration: "underline",
          marginLeft: (!direction && sm && xs)? "1%":null,
          paddingTop: xs ? "4%" : null,
        }}
        onClick={() => {
          handleClearQuotation();
          handleClearAddresses();
        }}
      >
        Clear Addresses
      </Button>
    </>
  ) : (
    <Box
      sx={{
        height: "290px",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        size={"100px"}
        sx={{ "& .MuiCircularProgress-svg": { color: "primary" } }}
      />
    </Box>
  );
};

export default CalculatorForm;
