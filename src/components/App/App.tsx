import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import { useGetCharactersQuery } from "../../store/api";

function App() {
  const { data, isSuccess } = useGetCharactersQuery(``);

  console.log(isSuccess);
  console.log(data);

  return (
    <>
      <AppHeader />
      <main>
        {isSuccess &&
          data.map((item: any, index: number) => {
            return (
              <div key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            );
          })}
      </main>
    </>
  );
}

export default App;
