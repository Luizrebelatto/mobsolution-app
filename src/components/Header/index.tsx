import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TouchableOpacity } from "react-native"
import { Wrapper, Title, Content } from "./styles";
import { IHeader } from "../../interfaces/header";
import Arrow from "../../assets/svg/arrowLeft.svg";

export function Header({ title, backButton, onPress }: IHeader){
    const insets = useSafeAreaInsets().top

    return (
       <Wrapper style={{ marginTop: insets + 10 }}>
            {backButton ? (
                <Content>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={onPress}
                    >
                        <Arrow/>
                    </TouchableOpacity>
                    <Title>{title}</Title>
                </Content>
            ) : 
                <Title>{title}</Title>
            }
       </Wrapper>
    )
}