import React, { useState } from "react";
import * as yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import useAuth from "../hooks/useAuth";
import Auth, { ACTIONS } from "./Auth";
import { signUpValidation } from "../helpers/Validation";
import TextLink from "../components/general/TextLink";

export default function SignUp() {
  const { signUp } = useAuth();
  const [show, setShow] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "+1",
    password: "",
    confirmPassword: "",
  };

  const inputs = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email", type: "email" },
    { label: "Phone", key: "phone", max: 12 },
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
    {
      label: "Confirm Password",
      key: "confirmPassword",
      type: show ? "text" : "password",
    },
  ];

  const Validation = yup.object().shape({
    ...signUpValidation,
  });

  return (
    <Auth
      initialValues={initialValues}
      inputs={inputs}
      onSubmit={signUp}
      validationSchema={Validation}
      title="Join Us Today!"
      body={
        <>
          Become a member of the In A Pulse family and get ready to simplify
          your life.
          <TextLink
            sx={{ mt: '60px' }}
            label="Already have an account?"
            link={"/Login"}
          >
            Login
          </TextLink>
        </>
      }
      action={ACTIONS.signUp}
    />
  );
}
