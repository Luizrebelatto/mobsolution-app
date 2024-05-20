import React from "react";
import { Wrapper, Title } from "./styles"
import { IButton } from "../../interfaces/button";

export function Button({ title, isTransparent, onPress, isDisable }: IButton){
    return (
       <Wrapper isTransparent={isTransparent} onPress={onPress} disabled={isDisable}>
            <Title isTransparent={isTransparent}>{title}</Title>
       </Wrapper>
    )
}