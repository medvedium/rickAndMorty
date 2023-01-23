import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import CharactersList from "../CharactersList/CharactersList";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Container>
          <CharactersList />
        </Container>
      </main>
    </>
  );
}

export default App;
