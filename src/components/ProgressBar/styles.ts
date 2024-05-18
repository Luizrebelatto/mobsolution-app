import styled from "styled-components/native"
import { IProgressBar } from "src/interfaces/progressBar";

export const Progress = styled.View`
    width: 100%;
    height: 12px;
    border-radius: 4px;
    background-color: #E3E8EF;
    margin-bottom: 12px;
    margin-top: 8px;
`;

export const Value = styled.View<IProgressBar>`
    width: ${({ numberProgress }) => numberProgress}%;
    height: 12px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.cyanBlue};
`;