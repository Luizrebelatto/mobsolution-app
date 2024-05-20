import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import { TabRoutes } from "./tab.routes";
import { useRecoilValue } from "recoil";
import { userLogged } from "../utils/state";

export default function Routes(){
    const isLogged = useRecoilValue(userLogged);

	let user = false;
	if (isLogged !== null && isLogged !== undefined) {
        user = true
    }

    return(
        <NavigationContainer >
            {user ? <TabRoutes /> : <AuthRoutes/>}
        </NavigationContainer>
    )
}