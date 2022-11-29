import React from "react";
import * as yup from "yup";

import * as Valid from "../../helpers/Validation";
import { Form } from "../../helpers/Form";
import { sendApplicationEmail } from "../../apis/quote";
import Card from "../general/Card";
import Body from "../general/Body";

const initialValues = {
  name: "",
  email: "",
  phone: "+1",
};

export default function DriverContactForm() {
  // Inputs used for this form
  const inputs = [
    { label: "Full Name", key: "name" },
    { label: "Email", key: "email", type: "email" },
    { label: "Phone", key: "phone", max: 12 },
  ];

  // Validation used for this form
  const validation = yup.object().shape({
    ...Valid.name,
    ...Valid.email,
    ...Valid.phone,
  });

  const onSubmitHandler = async (values) => {
    try {
      await sendApplicationEmail({
        fullName: values.name,
        email: values.email,
        phone: values.phone,
      });

      // Returns 200 to show appropriate message
      return {
        status: 200,
        message: "Application Sent. Thank you for your interest!",
      };
    } catch (error) {
      //console.log(error);
      return;
    }
  };

  return (
    <Card>
      <Form
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={onSubmitHandler}
        inputs={inputs}
      >
        <Body
          variant="caption"
          starting={16}
          sx={{ fontWeight: "bold", mt: 3, mb: 3 }}
        >
          By proceeding, I agree to In A Pulse's{" "}
          <a href="/Terms">Terms and Conditions</a> and acknowledge that I have
          read the <a href="/Privacy">Privacy Policy.</a>
          <br />
          <br />I also agree that In A Pulse or its representatives may contact
          me by email, phone, or SMS (including by automated means) at the email
          address or number I provide, including for marketing purposes.
        </Body>
      </Form>
    </Card>
  );
}
