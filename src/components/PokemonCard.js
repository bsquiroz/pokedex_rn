import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import { getColorOfPokemon } from "../utils/getColorOfPokemon";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";

export const PokemonCard = ({ poke }) => {
    const navigation = useNavigation();
    const styleCard = {
        backgroundColor: getColorOfPokemon(poke.type),
        ...styles.card,
    };

    const goToPokemon = (id) => {
        navigation.navigate("Pokemon", { id: id });
    };

    return (
        <TouchableWithoutFeedback onPress={() => goToPokemon(poke.id)}>
            <View style={styleCard}>
                <Image source={{ uri: poke.imagen }} style={styles.image} />
                <Text>#{poke.order < 10 ? `0${poke.order}` : poke.order}</Text>
                <Text style={styles.name}>{capitalize(poke.name)}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 130,
        minHeight: 130,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 10,
    },

    image: {
        width: 90,
        height: 90,
    },

    name: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
