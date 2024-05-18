import React from "react";
import * as S from "./styles";
import { ProgressBar } from "../ProgressBar";
import { ICard } from "../../interfaces/card"

export function CardTheme(data: ICard){
    return (
      <S.Card>
        <S.Title>{data.title}</S.Title>
        <S.ContentText>
            <S.Quantity>{`${data.questionsAnswered}/${data.questionsTotal}`}</S.Quantity>
            <S.TitleQuestion>Total de questoes respondidas</S.TitleQuestion>
        </S.ContentText>
        <ProgressBar
            numberProgress={data.progressQuestions}
        />
        <S.ContentText>
            <S.Quantity>{`${data.rightQuestions}/${data.questionsTotal}`}</S.Quantity>
            <S.TitleQuestion>Respostas Corretas</S.TitleQuestion>
        </S.ContentText>
        <ProgressBar
            numberProgress={data.progressQuestionsCorrect}
        />
      </S.Card>
    )
}



