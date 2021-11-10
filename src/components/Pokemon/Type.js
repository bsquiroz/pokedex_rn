import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { map, capitalize } from "lodash";
import { getColorOfPokemon } from "../../utils/getColorOfPokemon";

export const Type = ({ types }) => {
    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View
                    key={index}
                    style={{
                        ...styles.pill,
                        backgroundColor: getColorOfPokemon(item.type.name),
                    }}
                >
                    <Text style={styles.titlePill}>
                        {capitalize(item.type.name)}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    titlePill: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
