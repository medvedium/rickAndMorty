import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { EPISODE } from "../../apollo/query";
import Loader from "../Loader/Loader";

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
      <h1>{episode.episode.name}</h1>
      <p>{episode.episode.episode}</p>
      <p>{episode.episode.air_date}</p>
      <p>Characters in episode:</p>
      <ul>
        {episode.episode.characters.map((item: any) => {
          return (
            <li>
              <Link to={`/character/${item.id}`}>
                <p>{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Episode;
