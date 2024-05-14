import React from "react";
import { Wrapper, Title, Description } from "./styles"
import { Button } from "../../components/Button";
import { Header } from "src/components/Header";
import { Input } from "src/components/Input";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import IconCheck from "../../assets/check-blue.svg";

export function Success(){
    return (
        <>
            <Wrapper>
                <IconCheck/>
                <Title>Senha redefinida!</Title>
                <View style={{ flexDirection: "column" }}>
                    <Description>Sua senha foi redefinida com sucesso.</Description>
                    <Description>Clique abaixo para fazer o login</Description>
                </View>
            </Wrapper>
            <View style={{ marginBottom: 32, paddingLeft: 16, paddingRight: 16 }}>
                <Button
                    title="Redefinir senha"
                    isTransparent={false}
                    onPress={() => console.log("s")}
                />
            </View>
        </>
    )
}