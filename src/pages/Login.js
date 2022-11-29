import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import useAuth from "../hooks/useAuth";
import { loginValidation } from "../helpers/Validation";
import Auth, { ACTIONS } from "./Auth";
import TextLink from "../components/general/TextLink";

export default function Login() {
  const { signIn } = useAuth();
  const [show, setShow] = useState(false);
  const [needsConfirm, setNeedsConfirm] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  let Validation = yup.object().shape({
    ...loginValidation,
  });

  let inputs = [
    { label: "Email", key: "email", type: "email" },
    {
      label: "Password",
      key: "password",
      type: show ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => setShow((old) => !old)}>
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
  ];

  const stepHandler = () => {
    setNeedsConfirm(true);
  };

  return (
    <Auth
      initialValues={initialValues}
      inputs={inputs}
      onSubmit={signIn}
      validationSchema={Validation}
      title="Welcome!"
      body={
        <TextLink label="Dont have an account yet?" link="/SignUp">
          Sign Up
        </TextLink>
      }
      action={ACTIONS.login}
      nextStep={stepHandler}
      showConfirm={needsConfirm}
    >
      {!needsConfirm && (
        <TextLink label="Forgot your password?" link="/ForgotPassword">
          Reset password
        </TextLink>
      )}
    </Auth>
  );
}
