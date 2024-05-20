import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 24px;
    line-height: 36px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.grayDark};
    margin-top: 16px;
`;

export const TitleInput = styled.Text`
    font-size: 14px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.darkCyanBlue};
    margin-bottom: 4px;
    margin-top: 9px;
`;

export const Input = styled.TextInput<{ isNull: boolean }>`
    height: 56px;
    width: 59px;
    border: 1.5px solid ${({ theme, isNull }) => isNull ? theme.colors.graySoft : theme.colors.cyanBlue};
    border-radius: 4px;
    margin-right: 12px;
`;

export const ButtonSendCode = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const TextSendCode = styled.Text`
    font-size: 16px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.blueMedium};
`;

export const WrapperInput = styled.View`
    flex-direction: row;
    margin-top: 16px;
`;

export const TitleBold = styled.Text`
    font-size: 16px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.darkCyanBlue};
    margin-bottom: 4px;
    margin-top: 9px;
    font-weight: bold;
`;