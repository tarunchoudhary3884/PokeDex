import { image_url } from "../config";
function PokemonCard({ pokemon, setSelectedPokemon }) {
  return (
    <div
      className="flex m-2 h-52 w-60 text-lg font-semibold shadow-md border-2 active:bg-primaryColor cursor-pointer capitalize"
      onClick={() => setSelectedPokemon(pokemon)}
    >
      <div className="relative h-52 w-60 pointer-events-none">
        <div className="absolute bottom-12 origin-[25px_50%]  -rotate-90 m-2 p-2 h-14 text-center w-[160px] z-10 pointer-events-none capitalize truncate">
          {pokemon.name}
        </div>
        <div className="absolute bottom-[3px] left-0 p-4 h-14 text-center pt-4 bg-black text-primaryColor z-30 pointer-events-none">
          #{pokemon.id}
        </div>
      </div>
      <img
        loading="lazy"
        src={`${image_url}${pokemon.id}.png`}
        className="object-contain pointer-events-none min-h-48 min-w-48 z-20 bg-primaryColor duration-200 ease-in-out"
        alt={pokemon.name}
      />
    </div>
  );
}
export default PokemonCard;
