
import { 
    Container,
    Header,
    TransactionTitle,
    Amount,
    Footer,
    Icon,
    Title,
    Date,
} from "./styles"

export function Transaction(){
    
    return(
        <Container>
            <Header>
                <TransactionTitle>Desenvolvimento de site</TransactionTitle>
                <Amount>R$ 12.000,00</Amount>
            </Header>

            <Footer>
                <Icon> I </Icon>
                <Title>Vendas</Title>
                <Date>13/04/2020</Date>
            </Footer>
        </Container>
    )
}