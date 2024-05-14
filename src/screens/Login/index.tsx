import React from "react";
import { Wrapper, Title, TitleInput, Input, WrapperButtons } from "./styles"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export function Login(){
    return (
        <Wrapper>
            <Header
                title="Login"
                backButton={false}
            />
            <Title>Bem-vindo(a) de volta!</Title>
            <TitleInput>Email</TitleInput>
            <Input 
                placeholder="Insira seu email"
                keyboardType="email-address"
            />
           
            <TitleInput>Senha</TitleInput>
            <Input 
                placeholder="Insira sua senha"
            />
            <WrapperButtons>
               
                <Button
                    title="Entrar"
                    isTransparent={false}
                    onPress={() => console.log("Entrar")}
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