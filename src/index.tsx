import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharactersList from "./components/CharactersList/CharactersList";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import App from "./components/App/App";
import HomePage from "./routes/HomePage";
import Character from "./components/Character/Character";
import EpisodesList from "./components/EpisodesList/EpisodesList";
import Episode from "./components/Episode/Episode";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/characters",
        element: <CharactersList />,
      },
      {
        path: "/characters/:page",
        element: <CharactersList />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
      {
        path: "/episodes",
        element: <EpisodesList />,
      },
      {
        path: "/episodes/:page",
        element: <EpisodesList />,
      },
      {
        path: "/episode/:id",
        element: <Episode />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </Provider>
);
