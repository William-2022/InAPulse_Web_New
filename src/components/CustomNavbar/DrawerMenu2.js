import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useNavigate, useLocation } from "react-router-dom";
import { Drawer, List,Box } from "@mui/material";
import Image from "../general/Image";
import useAuth from "../../hooks/useAuth";
import DrawerMenuListItem from "./DrawerMenuListItem";
import {authButtonList,userArray} from "../../helpers/authButtonList";
import invertedLogo from "../../images/invertedLogo.png"

const DrawerMenu = ({ menuItems = [] }) => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const newArray = authButtonList.concat(userArray)
  return (
    <>
    <Box
        sx={{ width: "100px", mr: "auto",mt:1, ml: 2, cursor: "pointer" }}
        component={"img"}
        src={invertedLogo}
        onClick={() => {
          window.scroll({ top: 0, behavior: "smooth" });
          navigate("/");
        }}
      />
      <DensityMediumIcon
        onClick={() => setIsOpen(true)}
        sx={{ cursor: "pointer" }}
      />
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <List>
          {user &&
            newArray?.map(({ id, Icon, label, link }) => {
              let active =
                pathname.toLowerCase() === link.toLowerCase() &&
                pathname.toLowerCase() !== "/";

              const onClick = () => {
                if (id === "logout") {
                  signOut();
                }
                navigate(link);
                setIsOpen(false);
              };

              return (
                <DrawerMenuListItem
                  onClick={onClick}
                  key={id}
                  label={label}
                  active={active}
                  Icon={Icon}
                />
              );
            })}
       
        </List>

        <List>
          {menuItems.map((item, hidden) => (
            <div key={item.label}>
              <DrawerMenuListItem
                onClick={() => {
                  navigate(item.link);
                  setIsOpen(false);
                }}
                active={pathname === item.link}
                key={item.label}
                label={item.label}
                Icon={item.Icon}
              />
              <div>
                {item.subItems?.slice(1).map((item) => (
                  <DrawerMenuListItem
                    onClick={() => {
                      navigate(item.link);
                      setIsOpen(false);
                    }}
                    active={pathname === item.link}
                    key={item.label}
                    label={item.label}
                    Icon={item.Icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </List>
      </Drawer>
      
    </>
  );
};

export default DrawerMenu;
