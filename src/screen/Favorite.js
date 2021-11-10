import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { getPokemonFavorite } from "../api/favorite";

export const Favorite = () => {
    const [favorites, setFavorites] = useState(null);

    const handleGetFavorite = () => {
        (async () => {
            const res = await getPokemonFavorite();
            setFavorites(res);
        })();
    };

    console.log(favorites);

    return (
        <SafeAreaView style={styles.containerFavorite}>
            <Text>Favoritos</Text>
            <TouchableOpacity onPress={handleGetFavorite}>
                <Text>Obtener favoritos</Text>
            </TouchableOpacity>
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
