import { Button as MuiButton, CircularProgress } from "@mui/material";
import React from "react";

function Button(props) {
  const {
    variant = "contained",
    sx,
    loading,
    children,
    compact,
    disabled,
    ...others
  } = props;

  return (
    <MuiButton
      variant={variant}
      sx={{
        px: compact ? 0 : 3,
        py: compact ? 0 : 2,
        borderRadius: 3,
        boxShadow: "none",
        fontSize: 18,
        fontWeight: "bold",
        "&:hover": {},
        ...sx,
      }}
      disabled={disabled || loading}
      {...others}
    >
      {loading ? (
        <>
          <CircularProgress
            size={20}
            sx={{ "& .MuiCircularProgress-svg": { color: "white" }, mr: 3 }}
          />
          {children}
        </>
      ) : (
        children
      )}
    </MuiButton>
  );
}

export default Button;
