// import { Box } from "@mui/system";
import {
  Stack,
  useMediaQuery,
  Avatar,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";
import AuthButton from "./AuthButton";
import { useNavigate } from "react-router-dom";
import { authButtonList, userArray } from "../../helpers/authButtonList";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";

const AuthedNavbar = ({ user }) => {
  const overSmBreakPoint = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xs = useMediaQuery((theme) => theme.breakpoints.between("xs", "sm"));

  const navStyle = {
    position: "fixed",
    height: "750px",
    minHeight: "100%",
    maxWidth: "20%",
    paddingLeft: "2%",
    py: "20px",
    backgroundColor: "card.navy",
  };
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { pathname } = useLocation();

  if (!overSmBreakPoint) return <></>;
  return (
    <Stack sx={navStyle} direction="column" spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia>
          <Avatar alt={user?.attributes?.name}>
            {user?.attributes?.name[0]}
          </Avatar>
        </CardMedia>
        <CardContent sx={{ color: "white" }}>
          <Typography fontWeight="bold">{user?.attributes?.name}</Typography>
          <Typography>{user?.attributes?.email}</Typography>
        </CardContent>
        <Divider sx={{ bgcolor: "white"}} />
      </Box>
      <Divider sx={{ bgcolor: "white" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10%",
        }}
      >
        {authButtonList.map(({ id, Icon, label, link }) => {
          const active = pathname.toLowerCase() === link.toLowerCase();

          const onClick = () => {
            if (id === "logout") {
              signOut();
            }
            navigate(link);
          };
          return (
            <AuthButton
              active={active}
              key={id}
              Icon={Icon}
              title={label.toUpperCase()}
              onClick={onClick}
            />
          );
        })}

<Box sx={{width:"100%"}}><Divider sx={{ bgcolor: "white"}} /></Box>

        <Typography
          textAlign={"center"}
          fontWeight="bold"
          sx={{
            paddingLeft: "5%",
            color: "white",
            fontSize: "20px",
          }}
        >
          My Account
        </Typography>
        
        {userArray.map(({ id, Icon, label, link }) => {
          const active = pathname.toLowerCase() === link.toLowerCase();

          const onClick = () => {
            if (id === "logout") {
              signOut();
            }
            navigate(link);
          };
          return (
            <AuthButton
              active={active}
              key={id}
              Icon={Icon}
              title={label.toUpperCase()}
              onClick={onClick}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default AuthedNavbar;
