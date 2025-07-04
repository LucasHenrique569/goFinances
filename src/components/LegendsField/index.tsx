
import { Text, Container } from './styles'

interface Props {
    category_: string
    value_: number
    color_: string
}
 
export function LegendField({ category_, value_, color_ }: Props){
    return (
        <Container color__={color_}>
            <Text>{category_}</Text>
            <Text>R$ {value_}</Text>
        </Container>
    )
}