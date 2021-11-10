import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Pokedex } from "../screen/Pokedex";
import { Pokemon } from "../screen/Pokemon";

const Stack = createStackNavigator();

export const PokedexNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pokedex"
                component={Pokedex}
                options={{ title: "", headerTransparent: true }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{ title: "", headerTransparent: true }}
            />
        </Stack.Navigator>
    );
};
