import React from "react";

import { Wrapper, Title, TitleInput, Input, ButtonSendCode, TextSendCode } from "./styles"
import { Header } from "../../components/Header";
import { View } from "react-native"

export function CheckCode({ navigation }){
    return (
            <Wrapper>
                <Header
                    title="Esqueci a senha"
                    backButton={true}
                />
                <Title>Verifique o código</Title>
                <TitleInput>Verifique o código que enviamos para o email ****luiz@gmail.com</TitleInput>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    {[0,0,0,0,0].map((item, index)=> (
                        <Input 
                            placeholder="0" 
                            keyboardType="number-pad" 
                            style={{ textAlign: 'center' }}
                            key={index}
                        />
                    ))}
               </View>
               <ButtonSendCode onPress={() => navigation.navigate("changePassword")}>
                    <TextSendCode>Reenviar código</TextSendCode>
               </ButtonSendCode>
            </Wrapper>
    )
}