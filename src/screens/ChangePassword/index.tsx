import React, { useState } from "react";
import { Wrapper, Title, TitleInput, TitleReq } from "./styles"
import { Button } from "src/components/Button";
import { Header } from "src/components/Header";
import { Input } from "src/components/Input";
import { RequirementPassword } from "src/components/RequirementPassword";
import { KeyboardAvoidingView, Platform, View } from "react-native";

export function ChangePassword({ navigation }){
    const [password, setPassword] = useState("")

    function isHasNumber(str) {
        const regex = /\d/;
        return regex.test(str);
    }

    function isHasALetter(str) {
        const regex = /^(?=.*[a-zA-Z]).{1,}$/;
        return regex.test(str);
    }

    function isHasSpecialCharacter(str) {
        const regex = /[!@#$%^&*]/;
        return regex.test(str);
    }

    const requirements = [
        {
            title: "Ser diferente da senha anterior",
            isValid: false
        },
        {
            title: "Conter pelo menos 8 caracteres",
            isValid: password.length >= 8
        },
        {
            title: "Conter pelo menos um número",
            isValid: isHasNumber(password)
        },
        {
            title: "Conter pelo menos uma letra",
            isValid: isHasALetter(password)
        },
        {
            title: "Conter pelo menos um caractere especial(!@#$%ˆ&*)",
            isValid: isHasSpecialCharacter(password)
        }
    ]

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
                    placeholder="Insira sua nova senha"
                    keyBoardType="default"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TitleReq>Pré-requisitos</TitleReq>
                {requirements.map((item, index) => (
                    <RequirementPassword
                        key={index}
                        title={item.title}
                        isValid={item.isValid}
                    />
                ))}
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