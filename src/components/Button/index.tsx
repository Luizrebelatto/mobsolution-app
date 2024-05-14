import React from "react";
import { Wrapper, Title } from "./styles"
import { IButton } from "../../interfaces/button";

export function Button({ title, isTransparent, onPress }: IButton){
    return (
       <Wrapper isTransparent={isTransparent} onPress={onPress}>
            <Title isTransparent={isTransparent}>{title}</Title>
       </Wrapper>
    )
}