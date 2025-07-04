import React, { useState } from "react";
import { Container, Header, Title, Form, Transactions } from "./styles";
import { Input } from "../../components/Forms/Input";
import { TransactionButton } from "../../components/Forms/TransactionButton";
import { CategoryButton } from "../../components/Forms/Category";
import { SendNewTransactionButton } from "../../components/Forms/SendButton";
import { Alert } from "react-native";

import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig?.extra?.API_URL;


export function Register() {
    const [transactionType, setTransactionType] = useState('')
    const [transactionTitle, setTransactionTitle] = useState('')
    const [transactionValue, setTransactionValue] = useState('')
    const [transactionCategory, setTransactionCategory] = useState('')

    // Cadastra uma nova transação
    async function createNewTransaction() {

        // Verifica se tem algum campo do formulário vazio
        if(transactionType !== '' && transactionTitle !== '' && transactionValue !== '' && transactionCategory !== ''){
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        titulo: transactionTitle,
                        valor: transactionValue,
                        tipo_da_transacao: transactionType,
                        categoria: transactionCategory
                    })
                })

                if(response.ok){
                    Alert.alert('Sucesso', 'Nova transação cadastrada com sucesso')
                } else {
                    Alert.alert('Erro', 'Falha ao cadastrar nova transação')
                }

            } catch (err) {
                console.error('Erro ao tentar cadastrar uma nova transação: ', err)
            }
        } else {
            Alert.alert('Preencha todos os campos corretamente !')
        }
        
    }

    // Função que verifica se apenas números e talvez um "." foram digitados no campo "input" de valor no formulário
    const handleChangeValueText = (newValue: string) => {

        const justNumbers = newValue.replace(/[^0-9.]/g, '')
        setTransactionValue(justNumbers)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input 
                    placeholder="Nome"
                    maxLength={100}
                    value={transactionTitle}
                    onChangeText={(newTransactionTitle) => setTransactionTitle(newTransactionTitle)}
                />

                <Input 
                    placeholder="Valor"
                    keyboardType="numeric"
                    value={transactionValue}
                    onChangeText={handleChangeValueText}
                />

                <Transactions>
                    <TransactionButton 
                        type='up'
                        textType="Entrada"
                        onPress={() => {setTransactionType('Entrada')}}
                    />

                    <TransactionButton
                        type='down'
                        textType="Saída"
                        onPress={() => {setTransactionType('Saída')}}
                    />
                </Transactions>

                {/* <CategoryButton /> */}

                <Input
                    placeholder="Categoria"
                    maxLength={50}
                    value={transactionCategory}
                    onChangeText={(newCategory) => {setTransactionCategory(newCategory)}}
                />

                <SendNewTransactionButton 
                    onPress={createNewTransaction}
                />
            </Form>
        </Container>
    )
}
