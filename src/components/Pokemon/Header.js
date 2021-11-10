import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import { capitalize } from "lodash";
import { getColorOfPokemon } from "../../utils/getColorOfPokemon";

export const Header = ({ name, order, image, type }) => {
    const bgHeader = {
        backgroundColor: getColorOfPokemon(type),
        ...styles.bg,
    };

    return (
        <>
            <View style={bgHeader} />
            <SafeAreaView style={styles.content}>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>{capitalize(name)}</Text>
                    <Text style={styles.order}>
                        # {`${order}`.padStart(3, 0)}
                    </Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.img} />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomStartRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    headerTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff",
    },
    order: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },
    img: {
        width: 250,
        height: 300,
        resizeMode: "contain",
        top: 40,
    },
});
