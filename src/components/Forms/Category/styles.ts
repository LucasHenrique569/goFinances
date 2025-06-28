
import styled, { css } from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: ${({ theme }) => theme.borderRadius.medium}px;
    padding: 16px 18px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CategoryText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.textLight};

`

export const Icon = styled(Feather)`
    font-size: ${ ({theme}) => theme.fontSize.medium}px;
    font-family: ${ ({theme}) => theme.fonts.regular};
`
