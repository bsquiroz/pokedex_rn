import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";

export const NoLogged = () => {
    const navigation = useNavigation();

    const handleLogged = () => {
        navigation.navigate("acount");
    };

    return (
        <>
            <Text>No estas logueado</Text>
            <Button title="Clic para loguearte" onPress={handleLogged} />
        </>
    );
};
