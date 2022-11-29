import { KeyboardArrowDown } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";

function ListItemGroup({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen((old) => !old)}
        sx={{
          px: 3,
          pt: 2.5,
          pb: open ? 0 : 2.5,
          "&:hover, &:focus": {
            "& svg": { opacity: open ? 1 : 0 },
          },
        }}
      >
        <ListItemText primary={label} />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.2s",
          }}
        />
      </ListItemButton>
      {open &&
        items?.map(({ label, icon, id }) => (
          <ListItemButton
            key={label}
            sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
          >
            {icon && <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>}
            <ListItemText
              primary={label}
              primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
            />
          </ListItemButton>
        ))}
    </>
  );
}

export default ListItemGroup;
