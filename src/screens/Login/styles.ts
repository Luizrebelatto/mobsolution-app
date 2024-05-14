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
    margin-bottom: 9px;
`;

export const WrapperButtons = styled.View`
    margin-top: 32px;
`;