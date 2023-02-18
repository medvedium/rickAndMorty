import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <AppHeader />
      <main style={{ flexGrow: "1" }}>
        <Container sx={{ paddingTop: "80px" }}>
          <Outlet />
        </Container>
      </main>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
          backgroundColor: "#1976d2",
          color: "#ffffff",
        }}
      >
        <Typography>&copy;&nbsp;Andreev Alexey</Typography>
      </footer>
    </>
  );
}

export default App;
