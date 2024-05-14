import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Wrapper, Title, Content } from "./styles";
import { IHeader } from "../../interfaces/header";
import Arrow from "../../assets/arrowLeft.svg";

export function Header({ title, backButton, onPress }: IHeader){
    const insets = useSafeAreaInsets().top

    return (
       <Wrapper style={{ marginTop: insets + 10 }}>
            {backButton ? (
                <Content>
                    <Arrow/>
                    <Title>{title}</Title>
                </Content>
            ) : 
                <Title>{title}</Title>
            }
       </Wrapper>
    )
}