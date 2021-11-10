import { API_HOTS } from "../utils/constants";

export const getPokemonsApi = async (nextPokemons) => {
    try {
        const url = `${API_HOTS}/pokemon?limit=20&offset=0`;

        const response = await fetch(nextPokemons || url);
        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};

export const getPokemonDetailsApi = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};

export const getPokemonId = async (id) => {
    const url = `${API_HOTS}/pokemon/${id}`;
    try {
        const response = await fetch(url);
        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
};
