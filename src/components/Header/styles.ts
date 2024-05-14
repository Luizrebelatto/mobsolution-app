import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: 18px;
    line-height: 30px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.neutral};
    text-align: center;
    width: 100%;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;