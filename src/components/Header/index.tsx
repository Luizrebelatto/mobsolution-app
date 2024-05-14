import { Wrapper, Title } from "./styles";
import { IHeader } from "../../interfaces/header";
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header({ title, backButton, onPress }: IHeader){
    const insets = useSafeAreaInsets().top

    return (
       <Wrapper style={{ marginTop: insets + 10 }}>
            {backButton ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>X</Text>
                    <Title>{title}</Title>
                </View>
            ) : 
                <Title>{title}</Title>
            }
       </Wrapper>
    )
}