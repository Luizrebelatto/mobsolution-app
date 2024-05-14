import React from "react";
import { Wrapper, Title, WrapperButtons } from "./styles"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input"

export function Login({ navigation }){
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
            />

            <Input
                placeholder="Insira sua senha"
                title="Senha"
                keyBoardType="default"
            />
            <WrapperButtons>
                <Button
                    title="Entrar"
                    isTransparent={false}
                    onPress={() => navigation.navigate("forgotPassword")}
                />
                <Button
                    title="Esqueci a senha"
                    isTransparent={true}
                    onPress={() => console.log("Esqueci a senha")}
                />
            </WrapperButtons>
        </Wrapper>
    )
}