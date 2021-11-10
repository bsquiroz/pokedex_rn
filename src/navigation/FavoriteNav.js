import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Favorite } from "../screen/Favorite";

const Stack = createStackNavigator();

export const FavoriteNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorite"
                component={Favorite}
                options={{ title: "Favoritos" }}
            />
        </Stack.Navigator>
    );
};
