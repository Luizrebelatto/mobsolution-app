import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Wrapper, Title } from "./styles";

export function HeaderTab(){
    const insets = useSafeAreaInsets().top
    return (
       <Wrapper>
           <Title style={{ marginTop: insets + 10, marginBottom: 10 }}>Minhas estatisticas</Title>
       </Wrapper>
    )
}