import styled from "styled-components/native";
import { IRequirementText } from "../../interfaces/requirements";

export const Wrapper = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const Instructions = styled.Text<IRequirementText>`
    font-size: 14px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, isValid }) => isValid ? theme.colors.success : theme.colors.error};
    margin-left: 4px;
`;