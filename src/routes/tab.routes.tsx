import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MyTabBar from "./tabBarContent";
import { Details } from "src/screens/Details";
import { Information } from "src/screens/Information";

export function TabRoutes(){
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator 
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="details" component={Details} options={{ title: "Visão Geral" }}/>
            <Tab.Screen name="information" component={Information} options={{ title: "Por Tema" }}/>
        </Tab.Navigator>
    )
}