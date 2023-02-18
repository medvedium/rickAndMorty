import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

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
            <ListItem disablePadding sx={{ margin: "10px" }}>
              <Link to={"/characters"}>Characters</Link>
            </ListItem>
            <ListItem disablePadding sx={{ margin: "10px" }}>
              <Link to={"/episodes"}>Episodes</Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
