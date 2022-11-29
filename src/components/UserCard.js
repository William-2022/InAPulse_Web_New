import { Paper, Typography, Box, ListItemIcon } from "@mui/material";
import React, { useRef } from "react";
import useAuth from "../hooks/useAuth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import {authButtonList,userArray} from "../helpers/authButtonList";

const UserCard = () => {
  const { user, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const box = useRef();
  const navigate = useNavigate();
  // const { pathname } = useLocation();

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          py: 0.5,
          px: "15px",
          minWidth: "130px",
          borderRadius: 2,
          border: "2px solid black",
          borderColor: "primary.main",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": { cursor: "pointer" },
        }}
        ref={box}
        onClick={handleOpen}
        elevation={0}
      >
        <Typography sx={{ py: 1 }}>
          <Box component="span">Welcome back </Box>
          <b>{user?.attributes.name.split(" ")[0] || "Default"}!</b>
        </Typography>
        <Box
          sx={{
            pl: 1,
            display: "flex",
            transition: "transform 0.5s",
            transform: open ? "rotateX(180deg)" : "rotateX(0deg)",
          }}
        >
          <KeyboardArrowDown />
        </Box>
        {/* </Box> */}
      </Paper>
      <Menu
        disableScrollLock
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        PaperProps={{ sx: { width: box?.current?.clientWidth || "130px" } }}
        onClose={handleClose}
      >
        {userArray.map(({ id, Icon, label, link }) => {
          // const active = pathname.toLowerCase() === link.toLowerCase();

          const onClick = () => {
            if (id === "logout") {
              signOut();
            }
            navigate(link);
            handleClose();
          };
          return (
            <MenuItem
              sx={{
                // backgroundColor: active ? "grey.100" : null,
                "&:hover": { backgroundColor: "grey.100" },
              }}
              key={id}
              onClick={onClick}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <Typography ml="5px">{label}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default UserCard;
