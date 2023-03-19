import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem } from "@mui/material";

interface INavLinkItemProps {
  destination: string;
  text: string;
}

const NavLinkItem = ({ destination, text }: INavLinkItemProps) => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <ListItem disablePadding sx={{ margin: "10px" }}>
      <NavLink
        to={destination}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {text}
      </NavLink>
    </ListItem>
  );
};

export default NavLinkItem;
