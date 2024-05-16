import React from "react";
import { Wrapper, Title, Line, Quantity, Content } from "./styles"

export function Details(){
    return (
        <Wrapper>
            <Content>
                <Title>Total de questoes respondidas</Title>
                <Quantity>500</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Questões corretas</Title>
                <Quantity>500</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Média de Questões</Title>
                <Quantity>500</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Tema mais dominado</Title>
                <Quantity>500</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Tema mais dominado</Title>
                <Quantity>500</Quantity>
            </Content>
            <Line/>
        </Wrapper>
    )
}