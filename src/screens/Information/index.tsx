import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles"
import { content } from "src/services/content.service";
import { FilterTheme } from "src/utils/enum";

import { CardTheme } from "../../components/CardTheme";

export function Information(){
    const [contentTheme, setContentTheme] = useState<any[]>([])

    const getGeneralView = async () => {
		try {
			const response = await content().contentByTheme({
                idUsuario: 8,
                ordenacao: FilterTheme.a_z
            })
            const data = decodeURIComponent(response.data)
            console.log("LINHA 90: ", JSON.parse(data).listaEstatisticasTemas)
            setContentTheme(JSON.parse(data).listaEstatisticasTemas)
            return response.data
		} catch {
			console.log("error")
		}
	};

    useEffect(() => {
        getGeneralView()
    },[])

    return (
        <Wrapper contentContainerStyle={{ paddingBottom: 30 }}>
            {[0,0,0,0,0,0,].map((element, index) => (
                <CardTheme
                    title="Tema"
                    progressQuestions={50}
                    progressQuestionsCorrect={80}
                    questionsAnswered={30}
                    questionsTotal={100}
                    rightQuestions={50}
                    key={index}
                />
            ))}
        </Wrapper>
    )
}