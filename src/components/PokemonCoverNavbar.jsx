import { RiArrowLeftLine } from "react-icons/ri";
function PokemonCoverNavbar({
  activeIndex,
  setActiveIndex,
  setSelectedPokemon,
}) {
  return (
    <div className="flex">
      <div>
        <button
          className="flex items-center justify-center bg-black"
          onClick={() => {
            setSelectedPokemon(null);
          }}
        >
          <RiArrowLeftLine className="h-10 w-8 p-2 text-xl text-primaryColor" />
          <span className="text-white pr-2"> Back</span>
        </button>
      </div>
      <div className="flex">
        <div
          className={`m-2 border-b-4 border-white cursor-pointer ${
            activeIndex === 0 && "font-semibold border-b-primaryColor"
          }`}
          onClick={() => setActiveIndex(0)}
        >
          About
        </div>
        <div
          className={`m-2 border-b-4 border-white cursor-pointer ${
            activeIndex === 1 && "font-semibold border-b-primaryColor"
          }`}
          onClick={() => setActiveIndex(1)}
        >
          Stats
        </div>
        <div
          className={`m-2 border-b-4 border-white cursor-pointer ${
            activeIndex === 2 && "font-semibold border-b-primaryColor"
          }`}
          onClick={() => setActiveIndex(2)}
        >
          Evolution
        </div>
      </div>
    </div>
  );
}
export default PokemonCoverNavbar;
