import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    width: 80%;
    height: 48px;
    margin-left: 8px;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: 24px;
`;

export const Title = styled.Text`
    font-size: 14px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-bottom: 4px;
    margin-top: 9px;
`;

export const Container = styled.View`
    border: 1.5px solid ${({ theme }) => theme.colors.graySoft};
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
`;