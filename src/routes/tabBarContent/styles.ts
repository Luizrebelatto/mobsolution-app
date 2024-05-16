import styled from "styled-components/native";

export const Title = styled.Text`
    font-size: 16px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme, disabled }) => !disabled ? theme.colors.grayLight : theme.colors.cyanBlue};
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme, disabled }) => !disabled ? theme.colors.background : theme.colors.cyanBlue};
`;

export const HeaderTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
`;