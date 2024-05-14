import React from "react";
import { Wrapper, Title, TitleInput, TitleReq, Instructions } from "./styles"
import { Button } from "../../components/Button";
import { Header } from "src/components/Header";
import { Input } from "src/components/Input";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import IconError from "../../assets/error.svg";
import IconSuccess from "../../assets/check-green.svg";

export function ChangePassword({ navigation }){
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <Wrapper>
                <Header
                    title="Esqueci a senha"
                    backButton={true}
                />
                <Title>Redefina sua Senha</Title>
                <TitleInput>Sua nova senha deve ser diferente de senhas utilizadas previamente</TitleInput>
                <Input 
                    placeholder="Insira seu email"
                    keyBoardType="email-address"
                />

                <TitleReq>Pré-Requisitos</TitleReq>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <IconSuccess/>
                    <Instructions>Ser diferente da senha anterior</Instructions>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <IconSuccess/>
                    <Instructions>Conter pelo menos 8 caracteres</Instructions>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <IconSuccess/>
                    <Instructions>Conter pelo menos um número</Instructions>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <IconSuccess/>
                    <Instructions>Conter pelo menos uma letra</Instructions>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <IconSuccess/>
                    <Instructions>Conter pelo menos um caractere especial(!@#$%ˆ&*)</Instructions>
                </View>
                
            </Wrapper>

            <View style={{ marginBottom: 24, paddingLeft: 16, paddingRight: 16 }}>
                <Button
                    title="Redefinir senha"
                    isTransparent={false}
                    onPress={() => navigation.navigate("success")}
                />
            </View>
            
        </KeyboardAvoidingView>
    )
}