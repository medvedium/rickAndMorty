import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../../apollo/query";
import Loader from "../Loader/Loader";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Grid, Pagination, Stack } from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

const CharactersList = () => {
  const params = useParams()
  const navigate = useNavigate()
  const page = params.page ? Number(params.page) : 1
  const {
    loading,
    error,
    data: characters,
  } = useQuery(ALL_CHARACTERS, { variables: { page: page } });
  let data = [];
  if (characters) {
    data = characters.characters.results;
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`/characters/${value}`)
  };

  if (loading) return <Loader />;
  if (error) return <h2>Ошибка загрузки данных</h2>;
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3, mb: 3 }}>
        {data?.map((item: any) => (
          <CharacterCard item={item} key={item.id} />
        ))}
      </Grid>
      <Stack spacing={2} sx={{ mt: 3, mb: 3 }}>
        <Pagination
          count={characters?.characters.info?.pages}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default CharactersList;
