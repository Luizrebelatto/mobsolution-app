import React, { useState } from "react";
import { Wrapper, Title, TitleInput, TitleReq, WrapperButton } from "./styles"
import { Button } from "src/components/Button";
import { Header } from "src/components/Header";
import { Input } from "src/components/Input";
import { RequirementPassword } from "src/components/RequirementPassword";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import { isHasALetter, isHasNumber, isHasSpecialCharacter } from "../../utils/validFields";
import { userAuth } from "src/services/user.service";
import { getItemStorage } from "src/utils/storageSave";

export function ChangePassword({ navigation }){
    const [password, setPassword] = useState("")
    const [passwordIsValid, setPasswordIsValid] = useState(false)

    function handleGetPassword(value: string){
        setPassword(value)
        if(value.length >= 8 && isHasNumber(value) && isHasALetter(value) && isHasSpecialCharacter(value)){
            setPasswordIsValid(true)
        }
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

    const handleChangePassword = async () => {
		try {
			const response = await userAuth().changePassword({
                email: "generico1MobSolution@gmail.com",
                tokenRecuperarSenha: "12345",
                novaSenha: password
            })
            if(!response.error){
                navigation.navigate("success")
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
                <Title>Redefina sua Senha</Title>
                <TitleInput>Sua nova senha deve ser diferente de senhas utilizadas previamente</TitleInput>
                <Input
                    placeholder="Insira sua nova senha"
                    keyBoardType="default"
                    value={password}
                    onChangeText={(text: string) => handleGetPassword(text)}
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

            <WrapperButton>
                <Button
                    title="Redefinir senha"
                    isTransparent={false}
                    onPress={handleChangePassword}
                    isEnabled={false}
                />
            </WrapperButton>
        </KeyboardAvoidingView>
    )
}