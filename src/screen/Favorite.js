import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { getPokemonFavorite } from "../api/favorite";
import { getPokemonId } from "../api/pokemon";
import { NoLogged } from "../components/NoLogged";
import { PokemonList } from "../components/PokemonList";
import useAuth from "../hooks/useAuth";

export const Favorite = () => {
    const [pokemons, setPokemons] = useState([]);
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getPokemonFavorite();
                    const pokemonsArray = [];

                    for await (const pokemon of response) {
                        const pokemonDetails = await getPokemonId(pokemon);

                        pokemonsArray.push({
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            type: pokemonDetails.types[0].type.name,
                            order: pokemonDetails.order,
                            imagen: pokemonDetails.sprites.other[
                                "official-artwork"
                            ].front_default,
                        });
                    }
                    setPokemons(pokemonsArray);
                })();
            }
        }, [auth])
    );

    return auth ? (
        <SafeAreaView>
            <PokemonList pokemon={pokemons} />
        </SafeAreaView>
    ) : (
        <SafeAreaView style={styles.containerFavorite}>
            <NoLogged />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerFavorite: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
