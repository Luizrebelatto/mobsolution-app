import {  Text } from "react-native";
// import { Wrapper } from "../../Components/Container/styles"
import { Wrapper, Title, TitleInput, Input, Button, ButtonText, ButtonForgotPassword, ButtonTextPassword } from "./styles"

export function Login(){
    return (
        <Wrapper>
            <Title>Bem-vind(a) de volta!</Title>
            <TitleInput>Email</TitleInput>
            <Input 
                placeholder="Insira seu email"
                keyboardType="email-address"
            />

            <TitleInput>Senha</TitleInput>
            <Input 
                placeholder="Insira sua senha"
            />

            <Button>
                <ButtonText>Entrar</ButtonText>
            </Button>

            <ButtonForgotPassword>
                <ButtonTextPassword>Esqueci a senha</ButtonTextPassword>
            </ButtonForgotPassword>
        </Wrapper>
    )
}