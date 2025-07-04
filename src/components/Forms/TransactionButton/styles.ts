
import styled, { css } from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'up' | 'down' | 'total'
}

interface ButtonProps {
    isActiveOrNot_ : string
    textType_ : string
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 49%;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: ${({ theme }) => theme.borderRadius.medium}px;
    padding: 16px 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;

    ${({ isActiveOrNot_, textType_ }) =>
        isActiveOrNot_ === textType_ &&
        css`
            border: 2px solid #000;    
        `
    }
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${ ({theme}) => theme.fontSize.medium}px;
    font-family: ${ ({theme}) => theme.fonts.regular};
    color: ${ ({theme}) => theme.colors.success};   

    ${
        ({type}) => type === 'up' && css`
            color: ${ ({theme}) => theme.colors.success}; 
        `
    }

    ${
        ({type}) => type === 'down' && css`
            color: ${({theme}) => theme.colors.attention};
        `
    } 
`

export const TransactionType = styled.Text`
    color: ${({ theme }) => theme.colors.textLight};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`
