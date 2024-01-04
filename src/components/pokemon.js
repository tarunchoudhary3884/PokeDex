export function getTypes(pokemonData) {
  return pokemonData.types.map((type) => {
    return type.type.name;
  });
}
export function getStats(pokemonData) {
  return pokemonData.stats.map((stat) => {
    return {
      name: stat.stat.name,
      value: stat.base_stat,
    };
  });
}
export function getSpecies(speciesData) {
  return speciesData.genera.find((genus) => genus.language.name === "en").genus;
}
export function getDescription(speciesData) {
  return speciesData.flavor_text_entries
    .find(
      (flavor_text) =>
        flavor_text.language.name === "en" &&
        flavor_text.version.name === "firered"
    )
    ?.flavor_text?.replace(/\r?\n|\f|\r/g, " ");
}

export function getEvolution(evolutionChain) {
  const evolutionDetails = [];

  function extractEvolutionData(evolutionChain) {
    const levelUp = [];
    evolutionChain?.evolution_details?.forEach((details) => {
      for (const [key, value] of Object.entries(details)) {
        if (
          value !== null &&
          value !== false &&
          value !== "" &&
          key !== "held_item" &&
          key !== "location" &&
          key !== "known_move_type"
        ) {
          if (typeof value === "object") {
            Object.entries(value).forEach(([subKey, subValue]) => {
              subKey !== "url" &&
                subValue !== "use-item" &&
                subValue !== "level-up" &&
                levelUp.push({ key, subValue });
            });
          } else {
            levelUp.push({ key, value });
          }
        }
      }
    });

    return {
      levelUp: levelUp.length > 0 ? levelUp : [],
      pokemonId: evolutionChain.species.url.split("/")[6],
      pokemonName: evolutionChain.species.name,
    };
  }

  function traverseEvolutionChain(evolutionChain) {
    const evolutionData = extractEvolutionData(evolutionChain);
    evolutionDetails.push(evolutionData);

    if (evolutionChain.evolves_to) {
      evolutionChain.evolves_to.forEach(traverseEvolutionChain);
    }
  }

  traverseEvolutionChain(evolutionChain);
  return evolutionDetails;
}
