import styled from "styled-components/native";


export const Wrapper = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    padding-top: 20px;
`;

export const Card = styled.View`
    width: 100%;
    height: 160px;
    border-radius: 4px;
    padding: 12px 16px 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.graySoft};
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.medium};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayDark};
`;

export const TitleQuestion = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: 20px;
    color: ${({ theme }) => theme.colors.grayMedium};
`;

export const Quantity = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayDark};
    margin-right: 2px;
`;

export const ContentText = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
`;