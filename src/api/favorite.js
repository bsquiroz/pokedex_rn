import AsynStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export const getPokemonFavorite = async () => {
    try {
        const response = await AsynStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
    } catch (error) {
        throw error;
    }
};

export const AddPokemonFavorite = async (id) => {
    try {
        const favorites = await getPokemonFavorite();
        favorites.push(id);
        await AsynStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
};

export const isPokekomFav = async (id) => {
    try {
        const response = await getPokemonFavorite();
        return includes(response, id);
    } catch (error) {
        throw error;
    }
};

export const deletePoke = async (id) => {
    try {
        const favorites = await getPokemonFavorite();
        // const newFavorites = favorites.filter((poke) => poke !== id);
        const newFavorites = pull(favorites, id);
        await AsynStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify(newFavorites)
        );
    } catch (error) {
        throw error;
    }
};
