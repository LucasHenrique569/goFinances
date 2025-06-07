
import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Text,
    TransactionList,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { Transaction } from "../../components/Transaction";

export function Dashboard(){
    const data = [{
        type: 'positive',
        transactionTitle:"Desenvolvimento de Site",
        amount:"R$ 12.0000",
        icon: "dollar-sign",
        title: "Compra",
        date: "25/12/2025"
    },
    {
        type: 'negative',
        transactionTitle:"Desenvolvimento de App",
        amount:"R$ 20.0000",
        icon: "dollar-sign",
        title: "Venda",
        date: "25/12/2025"
    },
    {
        type: 'positive',
        transactionTitle:"Desenvolvimento full-stack",
        amount:"R$ 20.0000",
        icon: "dollar-sign",
        title: "Venda",
        date: "25/12/2025"
    },
    {
        type: 'positive',
        transactionTitle:"Desenvolvimento full-stack",
        amount:"R$ 20.0000",
        icon: "dollar-sign",
        title: "Venda",
        date: "25/12/2025"
    },
    ]

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={ { uri: 'https://avatars.githubusercontent.com/u/188273989?s=400&u=ac39839d3f84862e5623729de5989c801d7b00e2&v=4' } }/>
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Aluno</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type='up'
                    title='Entradas'
                    amount='R$ 17.000,00'
                    lastTransaction='Última entrada em 16 de Junho'
                />

                <HighlightCard 
                    type='down'
                    title='Saídas'
                    amount='R$ 12.000,00'
                    lastTransaction='Última saída em 10 de Junho'
                />

                <HighlightCard 
                    type='total'
                    title='Total'
                    amount='R$ 7.000,00'
                    lastTransaction='De 1 a 16 de Junho'
                />
            </HighlightCards>

            <Transactions>
                <Text>Listagem</Text>

                <TransactionList 
                    data={data}
                    renderItem={({item}) => <Transaction data={item} /> }
                />

            </Transactions>
            
        </Container>
    );
}