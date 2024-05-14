import { Wrapper, Title, TitleInput, Input } from "./styles"
import { Button } from "../../components/Button";

export function ForgotPassword(){
    return (
        <Wrapper>
            <Title>Esqueceu a senha?</Title>
            <TitleInput>Insira seu e-mail para enviarmos um código de redefinição de senha</TitleInput>
            <Input 
                placeholder="Insira seu email"
                keyboardType="email-address"
            />
            <Button
                title="Enviar código"
                isTransparent={false}
            />
        </Wrapper>
    )
}