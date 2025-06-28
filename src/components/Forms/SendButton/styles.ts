import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.medium}px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    margin-top: 100px;
`

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`
