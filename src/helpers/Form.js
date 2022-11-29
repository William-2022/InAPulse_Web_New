import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Alert, Box, Snackbar, TextField, Typography } from "@mui/material";
import Button from "../components/general/Button";

const initalAlert = { open: false, msg: "", type: "" };

export const Form = ({
  initialValues,
  validationSchema,
  onSubmit,
  action,
  children,
  serverError,
  inputs,
  disableToast,
}) => {
  const [alert, setAlert] = useState(initalAlert);
  const [isLoading, setIsLoading] = useState(false);
  const style = { mx: "auto", mt: 3, borderRadius: null};
  const style2 = { mx: "null",p:"1% 6%", mt: null, borderRadius: "50px",fontSize: 14 };
  return (
    <>
      {disableToast ? (
        ""
      ) : (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={alert.open}
          style={{ marginTop: 80 }}
          autoHideDuration={6000}
          onClose={() => setAlert(initalAlert)}
        >
          <Alert severity={alert.type || "success"}>{alert.msg}</Alert>
        </Snackbar>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          let res = await onSubmit(values);
          setIsLoading(false);

          if (res?.status === 200) {
            setAlert({
              open: true,
              msg: res.message || "Successfully Sent!",
              type: "success",
            });
            resetForm();
            return;
          }
          setAlert({
            open: true,
            msg: "Oops! Something went wrong. Please try again",
            type: "error",
          });
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <FormikForm style={{ width: "100%" }}>
            <Typography color="error">{serverError}</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {inputs.map(
                ({ key, label, type = "text", max, half, ...other }, index) => {
                  let value = values[key];

                  if (key === "phone") {
                    value = "+1" + value.slice(2);
                  }
                  return (
                    <TextField
                      key={index}
                      inputProps={{
                        maxLength: max,
                      }}
                      fullWidth
                      label={label}
                      sx={{ mt: 2, flexBasis: half ? "88%" : "100%" }}
                      id={key}
                      name={key}
                      type={type}
                      max={max}
                      error={Boolean(touched[key] && errors[key])}
                      helperText={(touched[key] && errors[key]) || " "}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={value}
                      {...other}
                    />
                  );
                }
              )}
              {children}
            </Box>
            <Box width="100%" sx={{ display: "flex" }}>
              <Button
                sx={disableToast ? style2 : style}
                loading={isLoading}
                type="submit"
                // onClick={handleSubmit}
              >
                {action || "Submit"}
              </Button>
            </Box>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default Form;
