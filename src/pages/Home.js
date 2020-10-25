/** @format */

import React from "react";
import SearchForm from "../components/SearchFrom/SearchForm";
import CocktailList from "../components/Cocktail/CocktailList";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
