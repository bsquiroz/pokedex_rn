import React from "react";
import {
    FlatList,
    StyleSheet,
    ActivityIndicator,
    Platform,
} from "react-native";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemon, loadPokemons, nextPokemons }) => {
    const loadMore = () => {
        loadPokemons();
    };

    return (
        <FlatList
            data={pokemon}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard poke={item} />}
            contentContainerStyle={styles.containerPokemonList}
            onEndReached={nextPokemons && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                nextPokemons && (
                    <ActivityIndicator
                        size="large"
                        style={styles.spinner}
                        color="AEAEAE"
                    />
                )
            }
        />
    );
};

const styles = StyleSheet.create({
    containerPokemonList: {},
    spinner: {
        marginTop: Platform.OS === "android" ? 60 : 0,
        marginBottom: 60,
    },
});
