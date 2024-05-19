import React, { useState } from "react";

import { Wrapper, Title, TitleInput } from "./styles"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";

import { KeyboardAvoidingView, Platform, View } from "react-native"
import { userAuth } from "src/services/user.service";

export function ForgotPassword({ navigation }){
    const [email, setEmail] = useState("");

    const handleRequestRecovery = async () => {
		try {
			const response = await userAuth().requestRecovery({
                email: email
            });
            console.log("Linha 29: ", response.error)
            if (response.error){
                navigation.navigate("checkCode")
            }
            
		} catch {
			console.log("error")
		}
	};

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
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                />
            </Wrapper>
            <View style={{ marginBottom: 24, paddingLeft: 16, paddingRight: 16 }}>
                <Button
                    title="Enviar código"
                    isTransparent={false}
                    onPress={handleRequestRecovery}
                />
            </View>
        </KeyboardAvoidingView>
    )
}