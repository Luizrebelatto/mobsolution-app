import { Wrapper, Title, TitleInput, Input, Button, ButtonText } from "./styles"

export function ForgotPassword(){
    return (
        <Wrapper>
            <Title>Esqueceu a senha?</Title>
            <TitleInput>Insira seu e-mail para enviarmos um código de redefinição de senha</TitleInput>
            <Input 
                placeholder="Insira seu email"
                keyboardType="email-address"
            />

            <Button>
                <ButtonText>Enviar código</ButtonText>
            </Button>
        </Wrapper>
    )
}