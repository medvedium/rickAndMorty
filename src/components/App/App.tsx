import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default App;
