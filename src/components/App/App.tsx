import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
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
        <Link to={"https://github.com/medvedium"}>
          <Typography>&copy;&nbsp;Andreev Alexey</Typography>
        </Link>
      </footer>
    </>
  );
}

export default App;
