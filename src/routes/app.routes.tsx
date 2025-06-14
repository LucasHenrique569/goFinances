import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator id={undefined}>
            <Screen
                name="Cadastrar"
                component={Register}
            />
            
            <Screen 
                name="Listagem"
                component={Dashboard}
            />

        </Navigator>
    )
}
