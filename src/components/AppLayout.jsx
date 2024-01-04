import { useState, useEffect } from "react";
import PokemonSideWindow from "./PokemonSideWindow";
import PokemonCover from "./PokemonCover";
function AppLayout({ setError }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [selectedPokemon, setSelectedPokemon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-auto">
      <div
        className={`m-2 w-fit min-w-72 sm:w-72 flex flex-col ${
          selectedPokemon && isMobile ? "hidden" : ""
        }`}
      >
        <PokemonSideWindow
          setSelectedPokemon={setSelectedPokemon}
          setError={setError}
        />
      </div>
      {selectedPokemon && (
        <div className=" m-2 p-2 w-full">
          <PokemonCover
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setError={setError}
          />
        </div>
      )}
    </div>
  );
}
export default AppLayout;
