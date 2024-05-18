import styled from "styled-components/native";


export const Wrapper = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
    padding-left: 16px;
    padding-right: 16px;
    flex: 1;
    padding-top: 20px;
`;