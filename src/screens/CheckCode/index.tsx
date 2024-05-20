import React, { useEffect, useRef, useState } from "react";

import { Wrapper, Title, TitleInput, Input, ButtonSendCode, TextSendCode, WrapperInput, TitleBold  } from "./styles"
import { Header } from "../../components/Header";
import { Alert, TextInput } from "react-native"
import { userAuth } from "src/services/user.service";
import { useRoute } from "@react-navigation/native";

export function CheckCode({ navigation }){
    const [code, setCode] = useState(["", "", "", "", ""]);
	const inputs = useRef<TextInput[] | null[]>([
		null,
		null,
		null,
		null,
		null,
	]);

    const route = useRoute();
    const params = route.params as any;

    const handleAlert = (error: string) => {
        Alert.alert('Dado Incorreto', error, [
            {text: 'Tentar Novamente'},
          ]);
    }

    function censorEmail(email) {
        const atIndex = email.indexOf('@');
        if (atIndex < 4) {
            const censurado = '****' + email.slice(2);
            return censurado;
        } else {
            const censurado = '****' + email.slice(2);
            return censurado;
        }    
    }

    const handleKeyPress = (event: any, index: number) => {
		if (
			event.nativeEvent.key === "Backspace" &&
			code[index] === "" &&
			index > 0
		) {
			inputs.current[0]?.focus();
			setCode(["", "", "", "", ""]);
		}
	};

    const handleInputChange = (text: string, index: number) => {
		const newCodes = [...code];

		if (/^[0-9]$/.test(text)) {
			newCodes[index] = text;
			setCode(newCodes);

			if (index < 5) {
				inputs.current[index + 1]?.focus();
			}
		} else if (text === "") {
			newCodes[index] = "";
			setCode(newCodes);
		}
	};

    const handleCodeValid = async () => {
		const newCode = code.join("");
        try {
            const response = await userAuth().validateRecoveryCode({
                email: params?.email,
                tokenRecuperarSenha: newCode
            })

            if(!response.error){
                navigation.navigate("changePassword", { email: params?.email, code: newCode })
            }

        } catch (error) {
            handleAlert(error)
        }
	};

    const handleRequestRecovery = async () => {
		try {
			const response = await userAuth().requestRecovery({
                email: params?.email
            });

            if (!response.error){
                navigation.navigate("changePassword")
            }
		} catch(error) {
			Alert.alert('Requisição invalida', error, [
                {text: 'Tente Novamente'},
              ]);
		}
	};

	useEffect(() => {
		const newCode = code.join("");
		if (newCode.length > 4) {
			handleCodeValid();
		}
	}, [code]);

    return (
        <Wrapper>
            <Header
                title="Esqueci a senha"
                backButton={true}
                onPress={() => navigation.goBack()}
            />
            <Title>Verifique o código</Title>
            <TitleInput>Verifique o código que enviamos para o email <TitleBold>{censorEmail(params?.email)}</TitleBold></TitleInput>
            <WrapperInput>
                {code.map((item, index) => (
                    <Input 
                        placeholder="0" 
                        keyboardType="number-pad" 
                        style={{ textAlign: 'center' }}
                        key={index}
                        value={item}
                        maxLength={1}
                        autoFocus={index === 0}   
                        onKeyPress={(event: any) =>
                            handleKeyPress(event, index)
                        }
                        onChangeText={(text: any) =>
                            handleInputChange(text, index)
                        }
                        ref={(input: any) =>
                            (inputs.current[index] = input!)
                        }
                        isNull={item == ""}
                    />
                ))}
           </WrapperInput>
            <ButtonSendCode onPress={handleRequestRecovery}>
                <TextSendCode>Reenviar código</TextSendCode>
            </ButtonSendCode>
        </Wrapper>
    )
}