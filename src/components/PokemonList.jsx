import React, { useEffect, useState } from "react";
import { debounce } from "./debounce";
import { url } from "../config";
import PokemonCard from "./PokemonCard";
import PokemonListLoader from "./PokemonListLoader";

const PokemonList = ({ searchValue, setSelectedPokemon, setError }) => {
  const [next, setNext] = useState(20);
  const [list, setList] = useState(null);
  const [loadedList, setLoadedList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (link) => {
    try {
      const response = await fetch(link);
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error);
    }
  };

  const fetchPokemonList = async (url) => {
    const data = await fetchData(url);
    setList(data.results);
  };

  const fetchAndSetPokemonData = async () => {
    setLoading(true);
    const promises = list
      .slice(loadedList.length, next)
      .map((pokemon) => fetchData(pokemon.url));
    const pokemonData = await Promise.all(promises);
    setLoadedList([...loadedList, ...pokemonData]);
  };

  const renderList = () => {
    setFilteredList(loadedList);
  };

  const handleSearch = async () => {
    if (searchValue === "") {
      renderList();
      setLoading(false);
      return;
    }
    const filteredListFromMainList = list.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue?.toLowerCase())
    );

    const pokemonToFetch = filteredListFromMainList.filter(
      (pokemon) =>
        !loadedList.some((loadedPokemon) => loadedPokemon.name === pokemon.name)
    );

    // Fetch data for Pokémon not in loadedList
    const pokemonData = await fetchSearchInList(pokemonToFetch);

    // Update filteredList with both loaded and fetched Pokémon
    const filteredLoadedList = loadedList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue?.toLowerCase())
    );

    setFilteredList([...filteredLoadedList, ...pokemonData]);
  };

  const fetchSearchInList = async (filteredList) => {
    if (!filteredList) return;
    try {
      const promises = filteredList.map((pokemon) => fetchData(pokemon.url));
      const pokemonData = await Promise.all(promises);
      return pokemonData;
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemonList(url);
  }, []);

  useEffect(() => {
    if (list) fetchAndSetPokemonData();
  }, [list, next]);

  useEffect(() => {
    if (loadedList) handleSearch();
  }, [loadedList, searchValue]);

  const handleScroll = ({
    target: { scrollTop, clientHeight, scrollHeight },
  }) => {
    if (
      clientHeight + scrollTop + 1 >= scrollHeight &&
      next &&
      searchValue === ""
    ) {
      setNext((prev) => prev + 20);
      setLoading(true);
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 300);

  return (
    <div
      className=" h-[calc(100%-58px)] overflow-y-auto w-fit scrollbar scrollbar-thumb-primaryColor scrollbar-track-black scroll-smooth"
      onScroll={debouncedHandleScroll}
    >
      <div className="m-2 flex flex-wrap justify-center items-center">
        {filteredList.length === 0 && loadedList.length > 0 ? (
          <h1>No results found</h1>
        ) : (
          filteredList?.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              setSelectedPokemon={setSelectedPokemon}
            />
          ))
        )}
        {loading && (
          <div className="ml-4">
            <PokemonListLoader />
            <PokemonListLoader />
            <PokemonListLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
