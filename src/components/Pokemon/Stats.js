import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { capitalize, map } from "lodash";
import { getColorOfPokemon } from "../../utils/getColorOfPokemon";

export const Stats = ({ stats, type }) => {
    const barStyles1 = (num) => {
        const color = num > 49 ? "#00ac17" : "#ff3e3e";

        return {
            ...styles.percentBarra,
            backgroundColor: color,
            width: `${num}%`,
        };
    };

    // const barStyles2 = (num) => {
    //     return {
    //         ...styles.percentBarra,
    //         width: `${num}%`,
    //         backgroundColor: getColorOfPokemon(type),
    //     };
    // };
    return (
        <View style={styles.content}>
            <Text style={styles.titleStats}>Base Stats</Text>
            {map(stats, (item, index) => (
                <View key={index} style={styles.contentStats}>
                    <View style={styles.contentTitleBlock}>
                        <Text style={styles.statName}>
                            {capitalize(item.stat.name)}
                        </Text>
                    </View>
                    <View style={styles.barraInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgBarra}>
                            <View style={barStyles1(item.base_stat)}></View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 40,
    },
    titleStats: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
    },
    contentStats: {
        paddingStart: 20,
        paddingVertical: 5,
        flexDirection: "row",
    },
    contentTitleBlock: {
        width: "40%",
    },
    statName: {
        fontSize: 15,
        color: "#6b6b6b",
    },
    barraInfo: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
    },
    number: {
        width: "12%",
        fontSize: 12,
    },
    bgBarra: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    percentBarra: {
        height: 5,
        borderRadius: 20,
    },
});
