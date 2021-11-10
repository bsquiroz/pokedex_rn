import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Text, StyleSheet, ScrollView } from "react-native";
import { getPokemonId } from "../api/pokemon";
import { Header } from "../components/Pokemon/Header";
import { Stats } from "../components/Pokemon/Stats";
import { Type } from "../components/Pokemon/Type";

export const Pokemon = ({ route, navigation }) => {
    const id = route.params.id;

    const [currentPokemon, setCurrentPokemon] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    color="#000"
                    size={30}
                    style={{ marginLeft: 20 }}
                    onPress={navigation.goBack}
                />
            ),
        });
    }, [id]);

    useEffect(() => {
        (async () => {
            await loadPokemon();
        })();
    }, [id]);

    const loadPokemon = async () => {
        try {
            const response = await getPokemonId(id);
            setCurrentPokemon(response);
        } catch (error) {
            console.error(error);
        }
    };

    if (!currentPokemon) return null;

    return (
        <ScrollView>
            <Header
                name={currentPokemon.name}
                order={currentPokemon.order}
                image={
                    currentPokemon.sprites.other["official-artwork"]
                        .front_default
                }
                type={currentPokemon.types[0].type.name}
            />
            <Type types={currentPokemon.types} />
            <Stats
                stats={currentPokemon.stats}
                type={currentPokemon.types[0].type.name}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerPokemon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});