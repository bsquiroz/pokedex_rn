import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Acount } from "../screen/Acount";

const Stack = createStackNavigator();

export const AcountNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Acount"
                component={Acount}
                options={{ title: "Mi cuenta" }}
            />
        </Stack.Navigator>
    );
};
