import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { ForgotPassword } from "src/screens/ForgotPassword";
import { ChangePassword } from "src/screens/ChangePassword";

export default function AuthRoutes(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="changePassword" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="forgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="changePassword" component={ChangePassword}/>
        </Stack.Navigator>
    )
}