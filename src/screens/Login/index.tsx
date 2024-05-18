import React, { useState } from "react";
import { Wrapper, Title, WrapperButtons } from "./styles"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import api from "src/services/api";
import { userAuth } from "src/services/user.service";
import { content } from "src/services/content.service";

export function Login({ navigation }){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const checkAccountStatus = async () => {
		try {
			const response = await userAuth().login({
                login: "generico1MobSolution@gmail.com",
                senha: "generico1",
                tokenAcesso: "b10583a254678158a93da0"
            });
            console.log("LOG LINHA 22: ",  decodeURIComponent(response.data))
		} catch {
			console.log("error")
		}
	};

    
    
    return (
        <Wrapper>
            <Header
                title="Login"
                backButton={false}
            />
            <Title>Bem-vindo(a) de volta!</Title>

            <Input
                placeholder="Insira seu email"
                title="Email"
                keyBoardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Input
                placeholder="Insira sua senha"
                title="Senha"
                keyBoardType="default"
                value={password}
                onChangeText={setPassword}
            />
            <WrapperButtons>
                <Button
                    title="Entrar"
                    isTransparent={false}
                    onPress={()=> navigation.navigate("tabRoutes")}
                />
                <Button
                    title="Esqueci a senha"
                    isTransparent={true}
                    onPress={()=> navigation.navigate("forgotPassword")}
                />
            </WrapperButtons>
        </Wrapper>
    )
}