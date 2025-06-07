import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionProps {
    type: 'positive' | 'negative'
}

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: ${ ({theme}) => theme.borderRadius.large}px;
    padding: 15px 23px;
    padding-bottom: 0px;
    margin-right: ${ ({theme}) => theme.spacing.small};
    display: flex;
    gap: 30px;
    margin-left: 23px;
    margin-bottom: 10px;
`


export const TransactionTitle = styled.Text`
    font-weight: bold;
`

export const Amount = styled.Text<TransactionProps>`
    color: ${({theme, type}) =>
        type === 'positive' ? theme.colors.success : theme.colors.attention};
    font-size: ${ ({theme}) => theme.fontSize.medium}px;
    font-family: ${ ({theme}) => theme.fonts.medium};
`

export const Footer = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-bottom: ${RFValue(10)}px;
`

export const Icon = styled(Feather)`
    font-size: ${ ({theme}) => theme.fontSize.medium}px;
    font-family: ${ ({theme}) => theme.fonts.regular}; 
`

export const Title = styled.Text`
    font-size: ${ ({theme}) => theme.fontSize.small}px;
    font-family: ${ ({theme}) => theme.fonts.regular};
`

export const Date = styled.Text`
    font-size: ${ ({theme}) => theme.fontSize.small}px;
    font-family: ${ ({theme}) => theme.fonts.regular};
`
