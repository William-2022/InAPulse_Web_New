import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "../general/Button";

const DrawerMenuListItem = ({
  active,
  onClick,
  icon,
  label,
  Icon,
  subItems,
}) => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();
  let route = location.pathname;
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = (link) => {
    navigate(link);
    setOpen(!open);
  };
  return (
    <ListItem
      className="drawerList"
      sx={{
        mt: "auto",
        color: active ? "primary.main" : "rgba(127,127,127)",

        "&:hover .drawerIcon ": {
          color: "primary.main",
        },
        borderBottom: (label==="Log out")
          ? "1px solid grey"
          : "0px",
        "&:hover .MuiListItemButton-root ": {
          color: "primary.main",
        },
        "&:hover": {
          borderBottom: "1px solid #F28721",
        },
      }}
      onClick={onClick}
      key={"signout"}
    >
      {
        <ListItemIcon>
          {
            <Icon
              className="drawerIcon"
              sx={{
                color: active ? "primary.main" : "rgba(200,200,200)",
              }}
            />
          }
        </ListItemIcon>
      }
      <ListItemButton onClick={handleClick} disableRipple>
        <ListItemText primary={label} />
        {subItems != null
          ? subItems.map((item) => (
              <Box className="drawerList">
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <ListItemButton
                    onClick={() => handleClose(item.link)}
                    variant="text"
                    value={route ? item.link : null}
                    key={item?.link}
                    label={item?.label}
                    component={Link}
                    to={item?.link}
                  >
                    {item.label}
                  </ListItemButton>
                </Collapse>
              </Box>
            ))
          : // show arrow menu and handle the state
            console.log()}
      </ListItemButton>
      {subItems != null ? (
        open ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )
      ) : (
        console.log()
      )}
    </ListItem>
  );
};

export default DrawerMenuListItem;
