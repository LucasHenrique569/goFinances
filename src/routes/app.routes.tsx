import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";

import { useTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();
    return (
        <Navigator 
            id={undefined}
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
            }}
        >
            <Screen 
                name="Listagem"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="task-alt"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    )
}
