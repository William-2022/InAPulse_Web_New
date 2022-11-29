import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { AppBar, Box, Tabs, Tab, useMediaQuery, Menu } from "@mui/material";
import { Login } from "@mui/icons-material";
import unAuthedButtonList from "../../helpers/unAuthedButtonList";

import DrawerMenu2 from "./DrawerMenu2";

import useAuth from "../../hooks/useAuth";
import UserCard from "../UserCard";
import Button from "../general/Button";

const CustomNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(HTMLButtonElement | null);
  const [selectedButton, setSelectedButton] = useState(null);

  const lgBreakPoint = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let navigate = useNavigate();
  const location = useLocation();
  let route = location.pathname;
  const { user } = useAuth();
  let pages = unAuthedButtonList;
  let drawerPages = [...pages];
  if (!user) {
    drawerPages.push({ label: "Login", link: "/Login", Icon: Login });
  }

  if (pages.findIndex(({ link }) => link === location?.pathname) === -1) {
    route = null;
  }
  const handleHome = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  const handleClick = (event, tab) => {
    if (tab?.subItems) {
      setAnchorEl(event.currentTarget);
      setSelectedButton(tab);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const tabNav = (
    <>
      <Button
        variant="text"
        disableRipple
        sx={{ mr: "auto", ml: "50px" }}
        onClick={handleHome}
      >
        <img src="/logo.png" alt="logo" style={{ width: "180px" }} />
      </Button>
      <Tabs
        value={route}
        sx={{ mx: "auto" }}
        selectionFollowsFocus={false}
        TabIndicatorProps={{
          sx: {
            display: "none",
          },
        }}
        textColor="secondary"
      >
        {pages.map((tab) => {
          const textTab = (label) => (
            <Button
              sx={{
                textTransform: "none",
                fontSize: 16,
                fontWeight: "light",
                color: "secondary.dark",
                "&:hover": {
                  cursor: "pointer",
                  color: "primary.light",
                  bgcolor: "background.main",
                },
              }}
              anchororigin={{
                horizontal: "left",
              }}
              aria-describedby={id}
              variant="text"
              onClick={(e) => handleClick(e, tab)}
              onMouseOver={(e) => handleClick(e, tab)}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              fullWidth
            >
              {label}
            </Button>
          );

          return (
            <Tab
              disableRipple
              value={route ? tab.link : null}
              key={tab?.link}
              sx={{ height: 20 }}
              label={textTab(tab?.label)}
              component={Link}
              to={tab?.link}
              onClose={handleClose}
            />
          );
        })}
        <Menu
          // id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{}}
          MenuListProps={{ onMouseLeave: handleClose }}
          anchorOrigin={{
            horizontal: "left",
          }}
        >
          {selectedButton?.subItems.map((item) => (
            <Button
              onClick={handleClose}
              variant="text"
              value={route ? item.link : null}
              key={item?.link}
              label={item?.label}
              component={Link}
              to={item?.link}
              sx={{
                color: "secondary.dark",
                display: "flex",
                flexDirection: "row",
                maxWidth: "8vw",
                fontSize: 12,

                "&:hover": {
                  cursor: "pointer",
                  color: "primary.light",
                  bgcolor: "background.main",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Menu>
      </Tabs>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={1}
        position="static"
        sx={{
          bgcolor: "#FFF",
          zIndex: 50,
          color: " #253C5B",
          position: "fixed",
          textAlign: "left",
          height: "8vh",
          py: 3,
          display: "flex",
          justifyContent: "center",
          pl: "1.5vw",
          pr: "4vw",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {lgBreakPoint ? tabNav : <DrawerMenu2 menuItems={drawerPages} />}
          {user && lgBreakPoint && <UserCard />}
          {!user && lgBreakPoint && (
            <>
              <Button
                disableRipple
                variant="text"
                color="secondary"
                sx={{
                  textTransform: "none",
                  px: 0,
                  fontSize: 16,
                }}
                onClick={() => navigate("Login")}
              >
                Login
              </Button>

              <Button
                disableRipple
                variant="contained"
                sx={{
                  px: lgBreakPoint ? 4 : 0,
                  py: 1,
                  borderRadius: "50px",
                  fontSize: 16,
                }}
                onClick={() => navigate("/SignUp")}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </AppBar>
    </Box>
  );
};

export default CustomNavbar;
