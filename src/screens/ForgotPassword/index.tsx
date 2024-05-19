import React, { useState } from "react";
import { Wrapper, Title, TitleInput, WrapperButton } from "./styles"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";

import { KeyboardAvoidingView, Platform, Alert } from "react-native"
import { userAuth } from "src/services/user.service";

export function ForgotPassword({ navigation }){
    const [email, setEmail] = useState("");

    const handleAlert = (error: string) => {
        Alert.alert('Dado Incorreto', error, [
            {text: 'Tentar Novamente'},
          ]);
    }

    const handleRequestRecovery = async () => {
		try {
			const response = await userAuth().requestRecovery({
                email: email
            });

            if (response.error){
                handleAlert(response.mensagem.split("+").join(" "))
            } else {
                navigation.navigate("checkCode", { email: email })
            }
		} catch(error) {
			console.log("error: ", error)
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
                    onPress={() => navigation.goBack()}
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
            <WrapperButton>
                <Button
                    title="Enviar código"
                    isTransparent={false}
                    onPress={handleRequestRecovery}
                />
            </WrapperButton>
        </KeyboardAvoidingView>
    )
}