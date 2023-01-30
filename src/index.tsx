import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharactersList from "./components/CharactersList/CharactersList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characters",
    element: <CharactersList />,
  },
]);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </Provider>
);
