import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router-dom";
import { Divider, List, ListItem } from "@mui/material";
import NavLinkItem from "../NavLinkItem/NavLinkItem";

export default function AppHeader() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Link to={"/"}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Rick and Morty
            </Typography>
          </Link>
          <Divider />
          <List sx={{ display: "flex", marginLeft: "auto" }}>
            <NavLinkItem text={"Characters"} destination={"/characters"} />
            <NavLinkItem text={"Episodes"} destination={"/episodes"} />
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
