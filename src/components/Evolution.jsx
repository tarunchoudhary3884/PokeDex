import { image_url } from "../config";
import { getEvolution } from "./pokemon";
import { useState, useEffect } from "react";
import Loader from "./Loader";

function Evolution({ selectedPokemon, setError }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      try {
        const speciesResponse = await fetch(selectedPokemon.species.url);
        const speciesData = await speciesResponse.json();
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();

        const pokemon = {
          evolution: getEvolution(evolutionData.chain),
        };

        setData(pokemon);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedPokemon]);

  return (
    <div className="h-full">
      {isLoading && (
        <div className="flex flex-col justify-center items-center mt-4 gap-2">
          <div className="flex justify-center items-center border-2 p-2 border-black h-20">
            <Loader />
          </div>
          <div className="flex justify-center items-center border-2 p-2 border-black h-20">
            <Loader />
          </div>
          <div className="flex justify-center items-center border-2 p-2 border-black h-20">
            <Loader />
          </div>
        </div>
      )}
      {data && (
        <div className="h-full overflow-y-auto scrollbar scrollbar-thumb-primaryColor scrollbar-track-black scroll-smooth">
          <div className="flex flex-wrap justify-center items-center w-full">
            {data.evolution.length === 1 ? (
              <div className="flex justify-center items-center">
                This pokemon does not evolve.
              </div>
            ) : (
              data.evolution.map((evolves) => (
                <div
                  key={evolves.pokemonId}
                  className="capitalize my-2 mx-1 flex justify-center items-center text-sm font-semibold w-64 h-36 bg-primaryColor"
                >
                  <div className="w-24 h-24">
                    <img
                      src={`${image_url}${evolves.pokemonId}.png`}
                      alt={`${evolves.pokemonName}`}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div>{evolves.pokemonName}</div>
                    <div>ID: {evolves.pokemonId}</div>
                    {evolves.levelUp.map((level) => (
                      <div key={level.key} className="flex">
                        <div className="mr-2">{level.key}:</div>
                        <div className="mr-2">
                          {level.value || level.subValue}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Evolution;
