import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favorite } from "../screen/Favorite";
import { Pokemon } from "../screen/Pokemon";

const Stack = createStackNavigator();

export const FavoriteNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorite"
                component={Favorite}
                options={{ title: "Favoritos" }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{ title: "Favoritos", headerTransparent: true }}
            />
        </Stack.Navigator>
    );
};
