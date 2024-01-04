import { useEffect, useState } from "react";
import { getSpecies, getTypes, getDescription } from "./pokemon";
import { typeColors } from "../config";
import Loader from "./Loader";

function About({ selectedPokemon, setError }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(null);
        setIsLoading(true);
        const speciesResponse = await fetch(selectedPokemon.species.url);
        const speciesData = await speciesResponse.json();

        const pokemon = {
          types: getTypes(selectedPokemon),
          species: getSpecies(speciesData),
          description: getDescription(speciesData),
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
    <div>
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <Loader />
        </div>
      )}
      {data && (
        <div className="flex flex-col justify-center items-center text-center mt-4">
          <div>
            Species: <span className="font-semibold">{data.species}</span>
          </div>
          <div>Description: {data.description}</div>
          <div>
            Types:{" "}
            {data.types.map((type) => (
              <span
                className={`capitalize ${typeColors[type]} font-semibold`}
                key={type}
              >
                {type}{" "}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
