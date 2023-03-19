import React from "react";
import {
  NavLink,
  useParams
} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { EPISODE } from "../../apollo/query";
import Loader from "../Loader/Loader";
import {
  Typography
} from "@mui/material";

const Episode = () => {
  const params = useParams();
  const id = params.id;

  const {
    loading,
    error,
    data: episode,
  } = useQuery(EPISODE, { variables: { id: id } });

  if (loading) return <Loader />;
  if (error) return <h2>Ошибка загрузки данных</h2>;

  return (
    <div>
      <Typography variant="h2">{episode.episode.name}</Typography>
      <Typography variant="h5">{episode.episode.episode}</Typography>
      <Typography variant="h6">Air Date: {episode.episode.air_date}</Typography>
      <Typography variant="h6">Characters in episode:</Typography>
      <ul>
        {episode.episode.characters.map((item: any) => {
          return (
            <li key={item.id}>
              <NavLink to={`/character/${item.id}`} >
                <Typography style={{paddingLeft: '15px'}}> - {item.name}</Typography>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Episode;
