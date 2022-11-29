import React, { useState } from "react";
import { TextField, Typography,useMediaQuery } from "@mui/material";
import { Stack } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import "./GoogleAutoComplete.css";


/***
 * MUST BE MOUNTED AFTER THE COVERAGE IS LOADED OR THE COVERAGE WILL ALWAYS BE AT ITS INITIAL STATE
 * due to useplacewidget will initialize the onclick listenter when this component is mounted
 *
 */

const GoogleAutoComplete = ({
  value,
  handleChange,
  coverage,
  name,
  label,
  placeholder,
  direction
}) => {
  const [error, setError] = useState("");
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDImAROf3jn2icvHwfc-aZV3jjpKoy81j8",
    onPlaceSelected: (place) => {
      let cityComponent = place.address_components.filter(
        (comp) => comp.types[0] === "locality"
      )[0];
      let city = cityComponent.long_name;

      if (coverage.includes(city)) {
        setError("");
        handleChange(
          place.formatted_address,
          place.geometry.location.lat(),
          place.geometry.location.lng(),
          place.address_components
        );
      } else {
        setError("city is not in our coverage area");
        handleChange("");
      }
    },
    inputAutocompleteValue: "country",

    options: {
      types: ["address"],
      fields: ["formatted_address", "address_components", "geometry.location"],
      componentRestrictions: { country: "ca" },
    },
  });

  const finalLabel = error;

  return (
    <>
      <Typography
        sx={{ my: "2px" }}
        variant="h6"
        fontWeight={"bold"}
      >
        {label}
      </Typography>
      <Stack direction="row" alignItems="center" sx={{marginBottom:(sm &&xs)?"1%" : "3%"}}>
        {/* <Box
            component={"img"}
            sx={{
              width: 30,
              height: 30,
              marginRight: "10px",
            }}
            alt="pin"
            src={bluepin}
          /> */}

        <TextField
          required
          error={Boolean(error)}
          label={finalLabel}
          placeholder={placeholder}
          sx={{
            paddingLeft:!(sm &&xs)?"4%" : null,
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main !important",
              borderLeftColor: "tranparent !important",
              borderWidth: "1px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
              borderWidth: "2px",
            },
          }}
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          inputRef={ref}
          type="input"
        />
      </Stack>
    </>
  );
};

export default GoogleAutoComplete;
