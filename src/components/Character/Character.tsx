import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CHARACTER } from "../../apollo/query";
import Loader from "../Loader/Loader";

const Character = () => {
  const params = useParams();
  const id = params.id && Number(params.id);

  const {
    loading,
    error,
    data: character,
  } = useQuery(CHARACTER, { variables: { id: id } });

  const person: any = character?.character;

  if (loading) return <Loader />;
  if (error) return <h2>Ошибка загрузки данных</h2>;
  return (
    <div>
      <img src={character.character.image} alt={character.character.name} />
      <h1>{character.character.name}</h1>
      <p>{character.character.gender}</p>
      <p>{character.character.id}</p>
      <p>{character.character.status}</p>
      <p>{character.character.species}</p>
      <p>{character.character.type}</p>
      <p>{character.character.created}</p>
      <p>Episodes:</p>
      <ol>
        {person &&
          person?.episode.map((item: any, index: number) => (
            <li key={item.id} style={{ margin: "5px" }}>
              <Link to={`/episode/${item.id}`}>
                <span style={{ fontSize: "12px", color: "#aaa", marginRight: "8px" }}>
                  {item.episode}
                </span>
                {item.name}
              </Link>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Character;
