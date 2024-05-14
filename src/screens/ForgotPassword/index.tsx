import React from "react";

import { Wrapper, Title, TitleInput } from "./styles"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";

import { KeyboardAvoidingView, Platform, View } from "react-native"

export function ForgotPassword({ navigation }){
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
                <Title>Esqueceu a senha?</Title>
                <TitleInput>Insira seu e-mail para enviarmos um código de redefinição de senha</TitleInput>
                <Input
                    keyBoardType="email-address"
                    placeholder="Insira seu email"
                />
            </Wrapper>
            <View style={{ marginBottom: 24, paddingLeft: 16, paddingRight: 16 }}>
                <Button
                    title="Enviar código"
                    isTransparent={false}
                    onPress={() => navigation.navigate("changePassword")}
                />
            </View>
        </KeyboardAvoidingView>
    )
}