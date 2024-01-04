import PokemonList from "./PokemonList";
import Search from "./Search";
import { useState } from "react";
function PokemonSideWindow({ setSelectedPokemon, setError }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Search setSearchValue={setSearchValue} />
      <PokemonList
        searchValue={searchValue}
        setSelectedPokemon={setSelectedPokemon}
        setError={setError}
      />
    </>
  );
}
export default PokemonSideWindow;
