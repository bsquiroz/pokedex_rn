import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export const Favorite = () => {
    return (
        <SafeAreaView style={styles.containerFavorite}>
            <Text>Favoritos</Text>
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
