import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

export const UserData = () => {
    const { logout, auth } = useAuth();

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
                    text={"Todavia ninguno"}
                />
            </View>
            <Button title="Cerrar sesión" onPress={() => logout()} />
        </View>
    );
};

function ItenMenu({ title, text }) {
    return (
        <View style={styles.itenMenu}>
            <Text style={styles.itenMenuTitle}>{title}: </Text>
            <Text>{text}</Text>
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
    },
    itenMenuTitle: {
        fontWeight: "bold",
        paddingRight: 10,
        width: 120,
    },
});
