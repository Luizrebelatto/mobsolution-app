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
    color: ${({ theme }) => theme.colors.grayDark}
`;

export const TitleInput = styled.Text`
    font-size: 14px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.darkCyanBlue};
    margin-bottom: 4px;
    margin-top: 9px;
`;

export const Input = styled.TextInput`
    height: 48px;
    width: 100%;
    border: 1.5px solid ${({ theme }) => theme.colors.graySoft};
    border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
    height: 48px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blueMedium};
    padding: 12px 20px 12px 20px;
    border-radius: 4px;
    margin-top: 32px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
    height: 48px;
    width: 100%;
    background-color: transparent;
    padding: 12px 20px 12px 20px;
    border-radius: 4px;
    margin-top: 8px;
`;

export const ButtonTextPassword = styled.Text`
    font-size: 16px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.darkCyanBlue};
    text-align: center;
`;