import styled from "styled-components/native";

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grayMedium};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: #E3E8EF;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Quantity = styled.Text`
    font-size: 14px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.grayDark};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;