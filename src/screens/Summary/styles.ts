
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(100)}px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    margin-top: 50px;
`
