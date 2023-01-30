import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Container>
          <Link to={`characters`}>Characters</Link>
        </Container>
      </main>
    </>
  );
}

export default App;
