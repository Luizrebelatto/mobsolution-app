import { Wrapper, Title, TitleInput, Input, TitleReq } from "./styles"
import { Button } from "../../components/Button";

export function ChangePassword(){
    return (
        <Wrapper>
            <Title>Redefina sua Senha</Title>
            <TitleInput>Sua nova senha deve ser diferente de senhas utilizadas previamente</TitleInput>
            <Input 
                placeholder="Insira seu email"
                keyboardType="email-address"
            />

            <TitleReq>Pré-Requisitos</TitleReq>
            <Button
                title="Redifinir senha"
                isTransparent={false}
            />
        </Wrapper>
    )
}