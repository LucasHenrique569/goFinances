import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: ${ ({theme}) => theme.borderRadius.large}px;
    padding: 20px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: ${ ({theme}) => theme.spacing.small};
    display: flex;
`

export const Header = styled.View`

`

export const TransactionTitle = styled.Text`
    font-weight: bold;
`

export const Amount = styled.Text`

`

export const Footer = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

export const Icon = styled(Feather)`

`

export const Title = styled.Text`

`

export const Date = styled.Text`

`