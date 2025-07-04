
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface LegendColor {
    color__: string
}

export const Container = styled.View<LegendColor>`
    background-color: ${ ({theme}) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: ${ ({theme}) => theme.borderRadius.medium}px;
    margin: 0 auto;
    padding: ${RFValue(15)}px ${RFValue(20)}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(10)}px;

    border-left-width: 5px;
    border-left-color: ${({color__}) => color__};
    border-left-style: solid;
`

export const Text = styled.Text`
    font-size: ${ ({theme}) => theme.fontSize.small}px;
    font-family: ${ ({theme}) => theme.fonts.bold}
`