import { useEffect, useState } from "react";
import { getStats } from "./pokemon";
function Stats({ selectedPokemon, setError }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const pokemon = {
      height: selectedPokemon.height / 10,
      weight: selectedPokemon.weight / 10,
      stats: getStats(selectedPokemon),
    };
    setData(pokemon);
  }, [selectedPokemon]);

  return (
    <div>
      {data && (
        <div className="flex flex-col justify-center items-center text-center mt-4">
          <div className="flex justify-center items-center">
            <div className="flex flex-col mx-4 justify-center items-center">
              <span className="font-semibold text-xl"> {data.height}m </span>
              <span className="text-sm">Height</span>
            </div>
            <div className="h-12 w-1 bg-primaryColor"></div>
            <div className="flex flex-col mx-4 justify-center items-center">
              <span className="font-semibold text-xl"> {data.weight}kg </span>
              <span className="text-sm">Weight</span>
            </div>
          </div>
          <div className="font-semibold mt-2 flex justify-center items-center">
            <div>
              {data.stats.map((stat) => (
                <div className={"capitalize flex items-center"} key={stat.name}>
                  {stat.name}:
                </div>
              ))}
            </div>
            <div>
              {data.stats.map((stat, index) => (
                <div
                  className="flex justify-center items-center ml-2 overflow-hidden "
                  key={stat.name}
                >
                  <div className="">{stat.value} </div>
                  <div
                    className="mx-2 w-24 md:w-40 h-1 bg-zinc-500 relative"
                    key={stat.name + stat.value}
                  >
                    <div
                      style={{ width: `${(stat.value / 200) * 100}%` }}
                      className={`h-1 bg-primaryColor`}
                      key={index}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Stats;
