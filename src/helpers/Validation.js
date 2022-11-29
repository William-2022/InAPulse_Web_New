import * as yup from "yup";

export const name = {
  name: yup
    .string("Please enter your full name")
    .required("Full name is required"),
};

export const firstName = {
  firstName: yup
    .string("Please enter your first name")
    .required("Last name is required"),
};

export const lastName = {
  lastName: yup
    .string("Please enter your last name")
    .required("Last name is required"),
};


export const email = {
  email: yup
    .string("Please enter you email")
    .email("Please enter a valid email")
    .required("Email is required"),
};

export const phone = {
  phone: yup
    .string()
    .max(12, "Phone number cannot exceed 12 characters")
    .matches(/(\+)[0-9]{11}/g, "Please enter a valid phone")
    .required("Phone number is required"),
};

export const password = {
  password: yup
    .string("Please enter your password")
    .min(8, "Password should be at least 8 characters long")
    .required("Password is required"),
};

export const confirmPassword = {
  confirmPassword: yup
    .string("Please enter your password again")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
};

export const code = {
  code: yup
    .number()
    .typeError("Code must be numeric")
    .max(999999, "Verification code cannot be longer than 6 digits")
    .required("Verification Code is required"),
};

export const message = {
  message: yup
    .string("Please enter your message")
    .required("Message is required"),
};

export const signUpValidation = {
  ...name,
  ...email,
  ...phone,
  ...password,
  ...confirmPassword,
};

export const loginValidation = {
  ...email,
  ...password,
};
