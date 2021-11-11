import React from "react";

import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FavoriteNav } from "./FavoriteNav";
import { PokedexNav } from "./PokedexNav";
import { AcountNav } from "./AcountNav";

const tab = createBottomTabNavigator();

const renderPokeBall = () => {
    return (
        <Image
            source={require("../assets/pokeball.png")}
            style={{ width: 75, height: 75, top: -17 }}
        />
    );
};

export const Navigation = () => {
    return (
        <tab.Navigator initialRouteName="pokedex">
            <tab.Screen
                name="favorite"
                component={FavoriteNav}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }}
            />
            <tab.Screen
                name="pokedex"
                component={PokedexNav}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeBall(),
                }}
            />
            <tab.Screen
                name="acount"
                component={AcountNav}
                options={{
                    tabBarLabel: "Cuenta",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
        </tab.Navigator>
    );
};
