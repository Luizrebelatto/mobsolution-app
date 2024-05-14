import styled from "styled-components/native";
import { IButton } from "../../interfaces/button";

export const Wrapper = styled.TouchableOpacity<IButton>`
    height: 48px;
    width: 100%;
    background-color: ${({ theme, isTransparent }) => isTransparent ? 'transparent' : theme.colors.blueMedium};
    padding: 12px 20px 12px 20px;
    border-radius: 4px;
`;

export const Title = styled.Text`
    font-size: 16px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme, isTransparent }) => isTransparent ? theme.colors.darkCyanBlue : theme.colors.white};
    text-align: center;
`;