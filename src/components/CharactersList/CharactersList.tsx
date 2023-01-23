import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../../apollo/query";
import Loader from "../Loader/Loader";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Grid } from "@mui/material";

const CharactersList = () => {
  const { loading, error, data: characters } = useQuery(ALL_CHARACTERS);
  let data = [];
  console.log(characters);
  if (characters) data = characters.characters.results;

  if (loading) return <Loader />;
  if (error) return <h2>Ошибка загрузки данных</h2>;
  return (
    <Grid container spacing={3} sx={{ mt: 3, mb: 3 }}>
      {data?.map((item: any) => (
        <CharacterCard item={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default CharactersList;
