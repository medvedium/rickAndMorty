import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to={"characters"}>Characters</Link>
      <Link to={"episodes"}>Episodes</Link>
    </>
  );
};

export default HomePage;
