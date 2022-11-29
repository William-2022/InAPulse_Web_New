import { Grid, Typography, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Icon from "../images/Contact";
import Socials from "../components/general/Socials";
import ConfirmCode from "../components/ConfirmCode";
import Form from "../helpers/Form";
import TextLink from "../components/general/TextLink";

export const ACTIONS = {
  login: "Login",
  signUp: "Sign Up",
  resetRequest: "Reset",
  resetSubmit: "Submit",
  confirm: "Confirm",
};

export default function Auth({
  initialValues,
  inputs,
  onSubmit,
  validationSchema,
  action,
  title,
  body,
  email,
  nextStep,
}) {
  const navigate = useNavigate();
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState();
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmitHandler = async (values) => {
    // LOGIN
    if (action === ACTIONS.login) {
      await onSubmit(values.email, values.password)
        .then((res) => navigate("/userpanel"))
        .catch((err) => {
          // If the user needs to enter their confirmation code
          if (err.message === "User is not confirmed.") {
            setConfirmation({
              email: values.email,
              password: values.password,
            });
            setShowConfirm(true);
          } else {
            setError(err.message);
          }
        });
    }
    // CONFIRM EMAIL
    else if (action === ACTIONS.confirm) {
      await onSubmit(values.email, values.code)
        .then((res) => navigate("/"))
        .catch((err) => setError(err.message));
    }
    // SIGNUP
    else if (action === ACTIONS.signUp) {
      await onSubmit(values.email, values.password, values.name, values.phone)
        .then((res) => navigate("/Login"))
        .catch((err) => setError(err.message));
    }
    // REQUEST PASSWORD RESET
    else if (action === ACTIONS.resetRequest) {
      try {
        await onSubmit(values.email);
        nextStep(values.email);
        setError();
        return { status: 200, msg: "An email has been sent to you!" };
      } catch (error) {
        setError(error.message);
        return;
      }
    }
    // SUBMIT PASSWORD RESET
    else if (action === ACTIONS.resetSubmit) {
      const { code, password } = values;
      await onSubmit(email, code, password)
        .then(() => navigate("/Login"))
        .catch((err) => setError(err.message));
    }
  };

  return (
    <>
      <Grid
        container
        item
        sm={12}
        md={10}
        lg={8}
        sx={{
          m: "0 auto",
          alignItems: "center",
          height: "100%",
        }}
        px={3}
      >
        <Grid
          item
          container
          xs={12}
          md={6}
          pt={5}
          pr={md ? 3 : 0}
          pb={md ? 30 : 0}
          justifyContent="center"
          alignItems="center"
        >
          <Stack maxWidth={450} width="100%">
            <Typography
              variant={sm ? "h3" : "h4"}
              sx={{ textAlign: !md ? "center" : "left" }}
            >
              {title}
            </Typography>
            <Typography
              component={"div"}
              sx={{
                fontSize: 18,
                mt: 3,
                textAlign: !md ? "center" : "left",
              }}
            >
              {body}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={6}
          sx={{
            py: 5,
            my: 5,
            mx: "auto",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: md ? "500px !important" : undefined,
          }}
        >
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitHandler}
            action={action}
            inputs={inputs}
            serverError={error}
          >
            {action === ACTIONS.login && (
              <TextLink
                ml="auto"
                mb={3}
                label="Forgot your password?"
                link={"/ForgotPassword"}
              >
                Reset
              </TextLink>
            )}
          </Form>

          {action !== ACTIONS.resetRequest && action !== ACTIONS.resetSubmit && (
            <Stack direction="row" spacing={4} mt={5}>
              <Socials icon={Icon.google} route="google" />
              <Socials icon={Icon.facebook} route="facebook" />
              <Socials icon={Icon.apple} route="apple" />
            </Stack>
          )}
        </Grid>
      </Grid>
      <ConfirmCode
        visible={showConfirm}
        values={confirmation}
        setVisible={() => setShowConfirm(false)}
      />
    </>
  );
}
