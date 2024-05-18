import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { ForgotPassword } from "src/screens/ForgotPassword";
import { ChangePassword } from "src/screens/ChangePassword";
import { Success } from "src/screens/Success";
import { TabRoutes } from "./tab.routes";
import { CheckCode } from "src/screens/CheckCode";

export default function AuthRoutes(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="forgotPassword" component={ForgotPassword}/>
            <Stack.Screen name="changePassword" component={ChangePassword}/>
            <Stack.Screen name="success" component={Success}/>
            <Stack.Screen name="checkCode" component={CheckCode}/>
            <Stack.Screen name="tabRoutes" component={TabRoutes}/>
        </Stack.Navigator>
    )
}