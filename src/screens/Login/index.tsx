import { Wrapper, Title, TitleInput, Input } from "./styles"
import { Button } from "../../components/Button";

export function Login(){
    return (
        <Wrapper>
            <Title>Bem-vind(a) de volta!</Title>
            <TitleInput>Email</TitleInput>
            <Input 
                placeholder="Insira seu email"
                keyboardType="email-address"
            />

            <TitleInput>Senha</TitleInput>
            <Input 
                placeholder="Insira sua senha"
            />
            <Button
                title="Entrar"
                isTransparent={false}
            />
            <Button
                title="Esqueci a senha"
                isTransparent={true}
            />
        </Wrapper>
    )
}