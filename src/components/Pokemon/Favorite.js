import React, { useEffect, useState } from "react";
import IconLine from "react-native-vector-icons/FontAwesome5";
import IconFill from "react-native-vector-icons/FontAwesome";
import {
    AddPokemonFavorite,
    isPokekomFav,
    deletePoke,
} from "../../api/favorite";

export const Favorite = ({ idPoke }) => {
    const [isFav, setIsFav] = useState(false);
    const [auxChange, setAuxChange] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokekomFav(idPoke);
                setIsFav(response);
            } catch (error) {
                throw error;
            }
        })();
    }, [idPoke, auxChange]);

    const Icon = isFav ? IconFill : IconLine;

    const addFavorite = async () => {
        await AddPokemonFavorite(idPoke);
        setAuxChange(!auxChange);
    };

    const removeFavorite = async () => {
        await deletePoke(idPoke);
        setAuxChange(!auxChange);
    };

    return (
        <Icon
            name="heart"
            color="#fff"
            size={30}
            onPress={isFav ? removeFavorite : addFavorite}
            style={{ marginRight: 20 }}
        />
    );
};
