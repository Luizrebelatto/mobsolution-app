import React from "react";
import { Container, Title, TextInput } from "./styles";
import Mail from "../../assets/mail.svg"
import Password from "../../assets/password.svg"
import { ITextInput } from "../../interfaces/input";
import theme from "src/Global/theme";

export function Input({ placeholder, title, keyBoardType }: ITextInput){
    return (
        <>
            <Title>{title}</Title>
            <Container>
                {keyBoardType == 'default' ? <Password/> : <Mail/>}
                <TextInput 
                    placeholder={placeholder} 
                    numberOfLines={35}
                    keyboardType={keyBoardType}
                    secureTextEntry={keyBoardType === 'default'}
                    placeholderTextColor={theme.colors.grayLight}
                />
            </Container>
      </>
    )
}