import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthedNavbar from "./AuthNav/AuthedNavbar";
import { Box } from "@mui/material";

const ProtectedRoute = ({ user, isLoading, redirectPath = "/Login" ,xs,md,lg}) => {
  if (!user && !isLoading) {
    window.alert("user not logged in!");
    return <Navigate to={redirectPath} replace />;
  }
 // console.log(user+ isLoading+nlrg+lg)
  const style={
    height: lg ?"68vh" : md ? "70vh"  :"70vh",
    width:lg ?"80%" : md ? "100%"  :"96%",
    margin:lg ?"0 20%": md ? "0 1% 0 22%" :"0 2%"
  }
  //console.log(lg+"=LG")
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
      <AuthedNavbar user={user} />
      <Box sx={style} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProtectedRoute;
