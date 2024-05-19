import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.blueDark};
    line-height: 38px;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    font-size: 16px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.blueDark};
    line-height: 24px;
    font-weight: 400;
`;

export const WrapperButton = styled.View`
    margin-bottom: 32px;
    padding-left: 16px;
    padding-right: 16px;
`;