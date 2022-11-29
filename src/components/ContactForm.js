import React from "react";
import * as yup from "yup";

import * as Valid from "../helpers/Validation";
import { sendSupportEmail } from "../apis/quote";
import Form from "../helpers/Form";
import Card from "./general/Card";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  // Inputs used for this form
  const inputs = [
    { label: "First Name", key: "firstName", half: true },
    { label: "Last Name", key: "lastName", half: true },
    { label: "Email", key: "email", type: "email" },
    { label: "Message", key: "message", multiline: true, rows: 8 },
  ];

  // Validation used for this form
  const validation = yup.object().shape({
    ...Valid.firstName,
    ...Valid.lastName,
    ...Valid.email,
    ...Valid.message,
  });

  const onSubmitHandler = async (values) => {
    try {
      await sendSupportEmail({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        message: values.message,
      });

      // Returns 200 to show appropriate message
      return {
        status: 200,
        message: "Message Sent. Thank you for your interest!",
      };
    } catch (error) {
      //console.log(error);
      return;
    }
  };

  return (
    <Card>
      <Form
        validationSchema={validation}
        inputs={inputs}
        onSubmit={onSubmitHandler}
        initialValues={initial}
      />
    </Card>
  );
}
