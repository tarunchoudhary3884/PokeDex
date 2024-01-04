function PokemonListLoader() {
  return (
    <>
      <div className=" bg-zinc-800 shadow h-52 w-60 mx-auto m-2 ml-4">
        <div className="animate-pulse">
          <div className="flex">
            <div className="flex flex-col">
              <div className="h-32 bg-primaryColor rounded w-10 ml-3 mr-2 mt-3"></div>
              <div className="h-10 bg-primaryColor rounded w-10 ml-3 mt-2 pl-2 pb-2"></div>
            </div>
            <div className=" bg-primaryColor h-44 w-40 m-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PokemonListLoader;
