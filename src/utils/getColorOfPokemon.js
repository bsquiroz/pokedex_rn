import { POKEMON_TYPE_COLORS } from "./constants";

export const getColorOfPokemon = (type) =>
    POKEMON_TYPE_COLORS[type.toLowerCase()];
