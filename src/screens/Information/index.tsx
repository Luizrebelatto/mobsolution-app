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
        <Wrapper contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
            {contentTheme?.map((element, index) => (
                <CardTheme
                    title={element?.tema?.nome.split("+").join(" ")}
                    progressQuestions={(element?.qtdRespondidas * 100)/element?.tema?.qtdTotaisQuestoes}
                    progressQuestionsCorrect={(element?.qtdAcertos * 100)/element?.tema?.qtdTotaisQuestoes}
                    questionsAnswered={element?.qtdRespondidas}
                    questionsTotal={element?.tema?.qtdTotaisQuestoes}
                    rightQuestions={element?.qtdAcertos}
                    key={index}
                />
            ))}
        </Wrapper>
    )
}