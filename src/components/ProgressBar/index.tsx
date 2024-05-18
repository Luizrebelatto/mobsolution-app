import React from "react";
import { Progress, Value } from "./styles";
import { IProgressBar } from "src/interfaces/progressBar";

export function ProgressBar({ numberProgress }: IProgressBar){
    return (
      <Progress>
        <Value numberProgress={numberProgress}/>
      </Progress>
    )
}