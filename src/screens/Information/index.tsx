import React from "react";
import { Wrapper, Card, Title, TitleQuestion, Quantity, ContentText } from "./styles"

export function Information(){
    return (
        <Wrapper>
           <Card>
                <Title>Cirurgia</Title>
                <ContentText>
                    <Quantity>0/0</Quantity>
                    <TitleQuestion>Total de questoes respondidas</TitleQuestion>
                </ContentText>
                <ContentText>
                    <Quantity>0/0</Quantity>
                    <TitleQuestion>Respostas Corretas</TitleQuestion>
                </ContentText>
           </Card>
        </Wrapper>
    )
}