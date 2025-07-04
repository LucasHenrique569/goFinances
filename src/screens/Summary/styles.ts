
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

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

export const Icon = styled(Feather)`
    font-size: ${ ({theme}) => theme.fontSize.xxLarge}px;
    font-family: ${ ({theme}) => theme.fonts.regular}; 
`

export const Text = styled.Text`
    font-size: ${ ({theme}) => theme.fontSize.xLarge}px;
    font-family: ${ ({theme}) => theme.fonts.regular}; 
`

export const Button = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
`

export const FilterContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: ${RFValue(7)}px;
`

export const GraphContainer = styled.View`
    flex: 1;
    padding-top: 0;
    align-items: center;
`

export const LegendList = styled.FlatList`
    width: 100%;
    display: flex;
`
