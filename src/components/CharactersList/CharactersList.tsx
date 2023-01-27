import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../../apollo/query";
import Loader from "../Loader/Loader";
import CharacterCard from "../CharacterCard/CharacterCard";
import { Grid, Pagination, Stack } from "@mui/material";

const CharactersList = () => {
  const [page, setPage] = useState<number>(1);
  const {
    loading,
    error,
    data: characters,
  } = useQuery(ALL_CHARACTERS, { variables: { page: page } });
  let data = [];
  if (characters) data = characters.characters.results;
  const currentPage = characters?.characters.info?.next
    ? characters?.characters.info?.next - 1
    : characters?.characters.info?.prev + 1;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
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
          defaultPage={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default CharactersList;
