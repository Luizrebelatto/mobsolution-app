import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";

export default function AuthRoutes(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>
    )
}