import { useState, useEffect } from "react";
import { image_url } from "../config";
import About from "./About";
import Stats from "./Stats";
import Evolution from "./Evolution";
import PokemonCoverNavbar from "./PokemonCoverNavbar";
function PokemonCover({ selectedPokemon, setSelectedPokemon, setError }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col h-[calc(100%-58px)]">
      <PokemonCoverNavbar
        setSelectedPokemon={setSelectedPokemon}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <div className="h-full">
        <div
          className={`capitalize flex flex-col justify-center items-center ${
            activeIndex === 2 ? "hidden" : ""
          }`}
        >
          <div className="w-48 h-48 sm:w-60 sm:h-60">
            <img
              src={`${image_url}${selectedPokemon.id}.png`}
              alt={`${selectedPokemon.name}`}
              className="object-contain drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="flex justify-center items-center text-2xl font-semibold">
            <div className="text-primaryColor bg-black p-2 w-fit mr-2">
              # {selectedPokemon.id}
            </div>
            {selectedPokemon.name}
          </div>
        </div>

        {activeIndex === 0 && (
          <About selectedPokemon={selectedPokemon} setError={setError} />
        )}
        {activeIndex === 1 && (
          <Stats selectedPokemon={selectedPokemon} setError={setError} />
        )}
        {activeIndex === 2 && (
          <Evolution selectedPokemon={selectedPokemon} setError={setError} />
        )}
      </div>
    </div>
  );
}

export default PokemonCover;
