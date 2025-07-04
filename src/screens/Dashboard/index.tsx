
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
import { Transaction, TransactionProps } from "../../components/Transaction";
import { useEffect, useState } from "react";

import { ActivityIndicator } from 'react-native';

import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig?.extra?.API_URL;

interface ApiTransaction {
    id: string;
    tipo_da_transacao: 'Entrada' | 'Saída';
    titulo: string;
    valor: number;
    categoria: string;
    data_da_transacao: string;
}

export function Dashboard(){
    const [transactions, setTransactions] = useState<ApiTransaction[]>([]);
    const [loading, setLoading] = useState(true);

    const [totalEntryTransactions, setTotalEntryTransactions] = useState(0);
    const [totalExitTransactions, setTotalExitTransactions] = useState(0);

    const [lastEntryDateTransaction, setLastEntryDateTransaction] = useState('');
    const [lastExitDateTransaction, setLastExitDateTransaction] = useState('');

    // Buscar lista de transações cadastradas
    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes`);
                const data = await response.json();
                setTransactions(data);
            } catch (err) {
                console.error('Erro ao carregar transações: ', err);
            } finally {
                setLoading(false);
            }
        };

        loadTransactions();
    }, []);

    // Buscar total de transações de entrada
    useEffect(() => {
        const getTotalEntryTransactions = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes/entradas`)
                const data = await response.json();

                if (data.valor_total_de_entradas !== null){
                    setTotalEntryTransactions(data.valor_total_de_entradas)
                }
            } catch (err) {
                console.error('Erro ao buscar total de transações de entrada: ', err)
            }
        }

        getTotalEntryTransactions()
    }, []);

    // Buscar total de transações de saída
    useEffect(() => {
        const getTotalExitTransactions = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes/saidas`)
                const data = await response.json()

                if(data.valor_total_de_saidas !== null){
                    setTotalExitTransactions(data.valor_total_de_saidas)
                }
            } catch (err) {
                console.error('Erro ao buscar total de transações de saída: ', err)
            }
        }

        getTotalExitTransactions()
    }, [])

    // Busca a data da última transação de entrada no mês e ano atuais
    useEffect(() => {
        const getLastEntryDateTransaction = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes/entradas/data`)
                const data = await response.json()

                if(data.data_mais_recente !== null){
                    setLastEntryDateTransaction(formatDate(data.data_mais_recente))
                }
            } catch (err) {
                console.error('Erro ao buscar data da última transação de entrada: ', err)
            }
        }

        getLastEntryDateTransaction()
    }, [])

    // Busca a data da última transação de saída no mês e ano atuais
    useEffect(() => {
        const getLastExitDateTransaction = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes/saidas/data`)
                const data = await response.json()

                if(data.data_mais_recente !== null){
                    setLastExitDateTransaction(formatDate(data.data_mais_recente))
                }
            } catch (err) {
                console.error('Erro ao buscar data da última transação de saída: ', err)
            }
        }

        getLastExitDateTransaction()
    }, [])


    if(loading){
        return <ActivityIndicator size='large' color='#0000FF' />;
    }

    function formatDate(utcDate) {
        return new Intl.DateTimeFormat('pt-BR').format(new Date(utcDate));
    }

    const createTransaction = ({ item }) => {

        const formatedData: TransactionProps = {
            type: item.tipo_da_transacao === 'Entrada' ? 'positive' : 'negative',
            transactionTitle: item.titulo,
            amount: `R$ ${item.valor}`,
            icon: 'dollar-sign',
            title: item.categoria,
            date: `${formatDate(item.data_da_transacao)}`,
        }

        return (
            <Transaction data={formatedData} /> 
        );
    };


    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={ require('../../assets/images/foto_de_perfil_comprimida.jpg') }/>
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
                    amount={`R$ ${totalEntryTransactions}`}
                    lastTransaction={`Última entrada em ${lastEntryDateTransaction}`}
                />

                <HighlightCard 
                    type='down'
                    title='Saídas'
                    amount={`R$ ${totalExitTransactions}`}
                    lastTransaction={`Última saída em ${lastExitDateTransaction}`}
                />

                <HighlightCard 
                    type='total'
                    title='Total'
                    amount={`R$ ${totalEntryTransactions - totalExitTransactions}`}
                    lastTransaction={`Última entrada em ${lastEntryDateTransaction}`}
                />
            </HighlightCards>

            <Transactions>
                <Text>Listagem</Text>

                <TransactionList 
                    data={transactions}
                    renderItem={createTransaction}
                />

            </Transactions>
            
        </Container>
    );
}