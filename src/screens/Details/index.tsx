import React, { useEffect, useState } from "react";
import { Wrapper, Title, Line, Quantity, Content } from "./styles"
import { content } from "src/services/content.service";
import { Alert } from "react-native"

export function Details(){
    const [generalContent, setGeneralContent] = useState<any>()

    const getGeneralView = async () => {
		try {
			const response = await content().generalView({
                id: 8
            })
            setGeneralContent(JSON.parse(decodeURIComponent(response.data)))
            return response.data
		} catch(error) {
			Alert.alert('Requisição invalida', error, [
                {text: 'Tente Novamente'},
              ]);
		}
	};

    useEffect(() => {
        getGeneralView()
    },[])

    return (
        <Wrapper>
            <Content>
                <Title>Total de questoes respondidas</Title>
                <Quantity>{generalContent?.qtdRespondidas}</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Questões corretas</Title>
                <Quantity>{generalContent?.qtdAcertos}</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Média de Questões</Title>
                <Quantity>
                    {parseInt(((generalContent?.qtdAcertos * 100)/generalContent?.qtdRespondidas),10)}%
                </Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Tema mais dominado</Title>
                <Quantity>{generalContent?.temaDominado?.nome}</Quantity>
            </Content>
            <Line/>
            <Content>
                <Title>Tema mais dominado</Title>
                <Quantity>{generalContent?.temaMenosDominado?.nome}</Quantity>
            </Content>
            <Line/>
        </Wrapper>
    )
}