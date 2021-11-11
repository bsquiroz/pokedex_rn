import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { getPokemonFavorite } from "../../api/favorite";
import useAuth from "../../hooks/useAuth";

export const UserData = () => {
    const [totalPokemon, setTotalPokemon] = useState(0);
    const { logout, auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getPokemonFavorite();
                setTotalPokemon(response.length);
            })();
        }, [])
    );

    return (
        <View style={styles.contentUserData}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text
                    style={styles.title}
                >{`${auth.firtsName} ${auth.lastName}`}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItenMenu
                    title={"Nombre"}
                    text={`${auth.firtsName} ${auth.lastName}`}
                />
                <ItenMenu title={"Nombre de usuario"} text={auth.username} />
                <ItenMenu title={"Email"} text={auth.email} />
                <ItenMenu
                    title={"Total de favoritos"}
                    text={totalPokemon}
                    func
                />
            </View>
            <Button title="Cerrar sesión" onPress={() => logout()} />
        </View>
    );
};

function ItenMenu({ title, text, func }) {
    const navigation = useNavigation();
    const goToFavorites = () => {
        navigation.navigate("favorite");
    };
    return (
        <View style={styles.itenMenu}>
            <Text style={styles.itenMenuTitle}>{title}: </Text>
            {func ? (
                <>
                    <Text>{text}</Text>
                    <Button title="ver los favoritos" onPress={goToFavorites} />
                </>
            ) : (
                <Text>{text}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    contentUserData: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    titleBlock: { marginBottom: 30 },
    title: { fontWeight: "bold", fontSize: 22 },
    dataContent: {
        marginBottom: 20,
    },
    itenMenu: {
        flexDirection: "row",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#cfcfcf",
        alignItems: "center",
    },
    itenMenuTitle: {
        fontWeight: "bold",
        paddingRight: 10,
        width: 120,
    },
});
