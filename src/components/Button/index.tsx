import { Wrapper, Title } from "./styles"
import { IButton } from "../../interfaces/button";

export function Button({ title }: IButton){
    return (
       <Wrapper>
            <Title>{title}</Title>
       </Wrapper>
    )
}