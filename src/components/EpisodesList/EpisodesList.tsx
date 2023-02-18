import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_EPISODES } from "../../apollo/query";
import Loader from "../Loader/Loader";
import { Grid, Pagination, Stack } from "@mui/material";
import CharacterCard from "../CharacterCard/CharacterCard";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const EpisodesList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const page = params.page ? Number(params.page) : 1;
  const {
    loading,
    error,
    data: episodes,
  } = useQuery(ALL_EPISODES, { variables: { page: page } });
  let data = [];
  if (episodes) {
    data = episodes.episodes.results;
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    navigate(`/episodes/${value}`);
  };

  if (loading) return <Loader />;
  if (error) return <h2>Ошибка загрузки данных</h2>;
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 3, mb: 3 }}>
        {data?.map((item: any) => (
          <EpisodeCard item={item} key={item.id} />
        ))}
      </Grid>
      <Stack spacing={2} sx={{ mt: 3, mb: 3 }}>
        <Pagination
          count={episodes?.episodes.info?.pages}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default EpisodesList;
