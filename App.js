import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigation />
                <StatusBar style="auto" />
            </AuthProvider>
        </NavigationContainer>
    );
}
