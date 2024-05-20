import React, { useEffect, useState } from "react";
import {Picker} from '@react-native-picker/picker';
import { Wrapper } from "./styles"
import { content } from "src/services/content.service";
import { FilterTheme } from "src/utils/enum";
import { CardTheme } from "../../components/CardTheme";
import { Alert } from "react-native";

export function Information(){
    const [contentTheme, setContentTheme] = useState<any[]>([])
    const [selectedTheme, setSelectedTheme] = useState("")

    const getGeneralView = async () => {
		try {
			const response = await content().contentByTheme({
                idUsuario: 8,
                ordenacao: selectedTheme
            })
            const data = decodeURIComponent(response.data)
            setContentTheme(JSON.parse(data).listaEstatisticasTemas)
            return response.data
		} catch(error) {
			Alert.alert('Requisição invalida', error, [
                {text: 'Tente Novamente'},
              ]);
		}
	};

    useEffect(() => {
        getGeneralView()
    },[selectedTheme])
   
    return (
        <Wrapper contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
            <Picker
                placeholder="Ordernar"
                style={{ width: 300, height: 36 }}
                selectedValue={selectedTheme}
                onValueChange={(itemValue) =>
                    setSelectedTheme(itemValue)
                                }>
                <Picker.Item label="a_z" value={FilterTheme.a_z} />
                <Picker.Item label="z_a" value={FilterTheme.a_z} />
                <Picker.Item label="Tema mais dominado" value={FilterTheme.most_dominated_theme} />
                <Picker.Item label="Tema menos dominado" value={FilterTheme.most_dominated_theme} />
                <Picker.Item label="Tema mais respondido" value={FilterTheme.most_answered_theme} />
                <Picker.Item label="Tema menos respondido" value={FilterTheme.least_answered_theme} />
            </Picker>
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