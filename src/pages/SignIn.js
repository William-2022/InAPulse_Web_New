import { Box, Button, FormLabel, Grid, Input, Typography, Alert, TextField } from "@mui/material";
import google from "../images/google_icon.svg";
import facebook from "../images/facebook_icon.png";
import React, { useState } from "react";
import Image from "../components/general/Image";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ConfirmCode from "../components/ConfirmCode";
import NewPassword from "../components/NewPassword";

import { Formik } from "formik";
import * as yup from "yup";


export default function SignIn() {

  const { signIn, forgetPasswordRequest, facebookSignIn, googleSignIn } = useAuth();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
 
  const [isUserNotConfirmedError, setIsUserNotConfirmedError] = useState(false);
  const [isUserNotAuthorizedError, setIsUserNotAuthorizedError] = useState(false);
  const [isUserNotFoundError, setIsUserNotFoundError] = useState(false);
  const [isPasswordRequestSent, setIsPasswordRequestSent] = useState(false);
  const [isPasswordForgotten, setIsPasswordForgotten] = useState(false);



  const handleSignInEmail = (e) => {
    setSignInEmail(e.target.value)
  }

  const handleSignInPassword = (e) => {
    setSignInPassword(e.target.value)
  }

  const forgotPassword =  async (e) => {
    e.preventDefault();

    try {
      forgetPasswordRequest(signInEmail)
      setIsPasswordRequestSent(true);
      setIsPasswordForgotten(true);
    } catch(error) {
      //console.error(error)
    }
  }

  // signs in, if user not confirmed -> opens confirmation code dialog
  const handleSignIn =  async (e) => {
    e.preventDefault();
  
    try {
    await signIn(signInEmail, signInPassword).then((res) => {navigate("/")});
    //console.log("I have signed in! ")
    }
    catch(error) {
      error.name === "UserNotConfirmedException" ? setIsUserNotConfirmedError(true) : console.error(error);
      error.name === "NotAuthorizedException" ? setIsUserNotAuthorizedError(true) : console.error(error);
      error.name === "UserNotFoundException" ? setIsUserNotFoundError(true) : console.error(error);
    }
   
  }

  const handleFacebookSignIn =  async (e) => {
    e.preventDefault();

    try {
      await facebookSignIn()
    } catch (error) { 
      //console.error(error)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
    } catch (error) {
      console.error(error)
    }
  }

  // acts as default state for ConfirmCode dialog
  const isOpen = true;


  let navigate = useNavigate()

  const initialValues = {
    email: "",
    password: ""
  }


  return (
    <Box sx={{ paddingY: "4rem", paddingBottom: "10rem" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "700", fontSize: "1.8rem" }}
      >
        Login to In A Pulse
      </Typography>

      <Grid
        container
        flexDirection="column"
        alignItems="center"
        rowGap={7}
        sx={{ marginTop: "3rem" }}
      >
        <Grid item container columnGap={2} justifyContent="center">
          <Typography sx={{ pt: "2px" }}>New to us?</Typography>
          <Button
            disableRipple
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              pt: 0,
            }}
            onClick={() => navigate('/SignUp')}
          >
            Sign Up
          </Button>
        </Grid>

      <Formik 
        initialValues={{ ...initialValues }}
        validationSchema={yup.object().shape({
          username: yup.string().email().required("username is required"),
          password: yup.string().required("Password is required")
        })}
        onSubmit={(values) => {
          signIn(values.username, values.password).then((res) => {navigate("/"); console.log("I have signed in!")});
          
        }}>

          {({
            errors, 
            handleBlur, 
            handleChange, 
            handleSubmit,
            touched, 
            values
          }) => (


          <Grid
          container
          component="form"
          flexDirection="column"
          alignItems="center"
          xs={8}
          sm={5}
          md={4}
          rowGap={5}
          >
          <TextField label="Email" id="email" name="email" error={Boolean(touched.email && errors.email)} required helperText={touched.email && errors.email} onBlur={handleBlur} onChange={handleChange} type="text" value={values.email} />
          <TextField label="Password" id="password" name="password" error={Boolean(touched.password && errors.password)} required helperText={touched.password && errors.password} onBlur={handleBlur} onChange={handleChange} type="text" value={values.password}  password />
          <Button sx={{ width: "70%" }} variant="contained">
            LOGIN
          </Button>

          {isUserNotConfirmedError && <ConfirmCode isOpen={isOpen} setIsUserNotConfirmedError={setIsUserNotConfirmedError}/>}
          {isPasswordForgotten && <NewPassword isOpen={isOpen} setSignInPassword={setSignInPassword} signInPassword={signInPassword}/> }
          {isUserNotAuthorizedError && <Alert severity="warning">Incorrect username and/or password. Please try again.</Alert>}
          {isUserNotFoundError && <Alert severity="warning">User does not exist. Please create a new account.</Alert>}
          {isPasswordRequestSent && <Alert severity="info">Email sent! Please check your email for instructions to reset your password.</Alert>}
        </Grid>

          )}
        </Formik>
        
        <Button
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            pt: 0,
          }} type="submit"
          onClick={forgotPassword}
        >
          Forgot Password ?
        </Button>

        <Grid container justifyContent="center" rowGap={1} columnGap={10}>
          <Button sx={{ fontSize: '0.95rem', textTransform: 'none' }} onClick={handleGoogleSignIn}>
            <SocialLoginButton label="Login With Google" icon={google}  />
          </Button>
          <Button  sx={{ fontSize: '0.95rem', textTransform: 'none', border: 'none', }} onClick={handleFacebookSignIn}>
            <SocialLoginButton label="Login With Facebook" icon={facebook}  />
          </Button>
        </Grid>
      </Grid>
   
    </Box>
  );
}

const InputGroup = ({ password, label, value, onChange }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "350px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FormLabel sx={{ marginRight: "auto" }}>{label || "Label"}</FormLabel>
      <Input
        {...(password && { type: "password" })}
        value={value}
        onChange={onChange}
        fullWidth
        disableUnderline={true}
        sx={{
          border: 1,
          borderRadius: 2,
          paddingX: "0.6rem",
          paddingY: "0.3rem",
          borderColor: "#aaa",

          "&.Mui-focused": { borderColor: "primary.main" },
        }}
      />
    </Box>
  );
};



const SocialLoginButton = ({ label, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey.300",
        width:"200px",
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        cursor: "pointer",
        borderRadius: 2,
        transition: "0.2s",
        ":hover": {
          backgroundColor: "rgba(242,135,33,0.3)",
        },
      }}
    >
      <Image src={icon} sx={{ width: "30px" }} />
      <Typography sx={{ color: "black", marginLeft: "0.7rem" }}>
        {label}
      </Typography>
    </Box>
  );
};



