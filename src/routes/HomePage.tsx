import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container spacing={1} sx={{ mt: 3, mb: 3 }}>
      <Grid item xs={6}>
        <Link to={"characters"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
            alt="Characters"
          />
          <p>Characters</p>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to={"episodes"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
            alt="Episodes"
          />
          <p>Episodes</p>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HomePage;
