import React from "react";
import { Wrapper, Instructions } from "./styles"
import { IRequirementText } from "../../interfaces/requirements"

import IconError from "../../assets/svg/error.svg";
import IconSuccess from "../../assets/svg/check-green.svg";

export function RequirementPassword(data: IRequirementText){
    return (
      <Wrapper>
        {data.isValid ? <IconSuccess/> : <IconError/>}
        <Instructions isValid={data.isValid}>{data.title}</Instructions>
      </Wrapper>
    )
}