import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemon";
import { PokemonList } from "../components/PokemonList";

export const Pokedex = () => {
    const [pokemon, setPokemon] = useState([]);
    const [nextPokemons, setNextPokemons] = useState(null);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi(nextPokemons);
            const pokemonsArray = [];

            setNextPokemons(response.next);

            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other["official-artwork"]
                        .front_default,
                });
            }

            setPokemon([...pokemon, ...pokemonsArray]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.containerPokedex}>
            <PokemonList
                nextPokemons={nextPokemons}
                pokemon={pokemon}
                loadPokemons={loadPokemons}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerPokedex: {},
});
