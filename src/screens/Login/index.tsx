import React, { useState } from "react";
import { Wrapper, Title, WrapperButtons } from "./styles"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import { userAuth } from "src/services/user.service";
import { Alert } from "react-native";
import { useRecoilState } from "recoil"
import { userLogged } from "../../utils/state"

export function Login({ navigation }){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, setUserIsLogged] = useRecoilState(userLogged);

    const handleLoginUser = async () => {
		try {
			const response = await userAuth().login({
                login: email,
                senha: password
            });

            if (response.error){
                handleAlert(response.mensagem.split("+").join(" "))
            } else {
                setUserIsLogged(true)
            }
		} catch(error) {
			Alert.alert('Requisição invalida', error, [
                {text: 'Tentar Novamente'},
              ]);
		}
	};

    const handleAlert = (error: string) => {
        Alert.alert('Dados Incorretos', error, [
            {text: 'Tentar Novamente'},
          ]);
    }

    return (
        <Wrapper>
            <Header
                title="Login"
                backButton={false}
            />
            <Title>Bem-vindo(a) de volta!</Title>
            <Input
                placeholder="Insira seu email"
                title="Email"
                keyBoardType="email-address"
                value={email}
                onChangeText={(value) => setEmail(value)}
            />

            <Input
                placeholder="Insira sua senha"
                title="Senha"
                keyBoardType="default"
                value={password}
                onChangeText={(value) => setPassword(value)}
            />
            <WrapperButtons>
                <Button
                    title="Entrar"
                    isTransparent={false}
                    onPress={handleLoginUser}
                />
                <Button
                    title="Esqueci a senha"
                    isTransparent={true}
                    onPress={()=> navigation.navigate("forgotPassword")}
                />
            </WrapperButtons>
        </Wrapper>
    )
}