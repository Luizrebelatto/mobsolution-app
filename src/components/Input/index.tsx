import React from "react";
import { Container, Title, TextInput } from "./styles";
import Mail from "../../assets/svg/mail.svg"
import Password from "../../assets/svg/password.svg"
import { ITextInput } from "../../interfaces/input";
import theme from "src/Global/theme";

export function Input(data: ITextInput){
    return (
        <>
            <Title>{data.title}</Title>
            <Container>
                {data.keyBoardType == 'default' ? <Password/> : <Mail/>}
                <TextInput 
                    placeholder={data.placeholder} 
                    maxLength={35}
                    keyboardType={data.keyBoardType}
                    secureTextEntry={data.keyBoardType === 'default'}
                    placeholderTextColor={theme.colors.grayLight}
                    value={data.value}
                    onChangeText={data.onChangeText}
                />
            </Container>
      </>
    )
}