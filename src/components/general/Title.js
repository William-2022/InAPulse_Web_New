import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Title({
  title,
  highlight,
  center,
  children,
  starting = 44,
  sx,
  color,
  dark,
  fullWidth,
  secondary,newline,
  ...other
}) {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
 

  const sizes = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
  ];

  // Renders the size of the text based on screen
  const renderSize = () => {
    let subtract = 0;
    let value = starting;

    if (lg) {
      return value;
    } else if (md) {
      subtract = 4;
    } else if (xs) {
      subtract = 18;
    }
    else if (sm) {
      subtract = 18;
    }
    // if the value is less than 18 make it 18
    if (value - subtract < 18) {
      return 18;
    }

    return value - subtract;
  };

  return (
    <Typography
      variant={lg ? sizes[0] : md ? sizes[1] : sm ? sizes[2] : sizes[0]}
      fontSize={renderSize()}
      fontWeight="bolder"
      sx={[
        {
          paddingBottom:newline && lg ? "1%" : null,
          color: dark ? "secondary.contrastText" : color ? color : "text.main",
          width: fullWidth ? "100%" : undefined,
          "> span": {
            color: secondary ? "secondary.main" : "primary.main",
          },
        },
        sx,
      ]}
      textAlign={(newline && !sm) || center ? "center" : "left"}
      {...other}
    >
      {title} {highlight &&  <span>{ newline && !sm ? <br/> :null}{highlight}</span>}
      {children}
    </Typography>
  );
}

export default Title;
