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