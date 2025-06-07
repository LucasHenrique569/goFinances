
import { 
    Container,
    TransactionTitle,
    Amount,
    Footer,
    Icon,
    Title,
    Date,
} from "./styles"

export interface TransactionProps {
    type: 'positive' | 'negative'
    transactionTitle: string
    amount: string
    icon: string
    title: string
    date: string
}

interface Props {
    data: TransactionProps
}

export function Transaction({ data }: Props){
    
    return(
        <Container>
            <TransactionTitle>{data.transactionTitle}</TransactionTitle>
            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}
            </Amount>

            <Footer>
                <Icon name={data.icon}/>
                <Title>{data.title}</Title>           
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}