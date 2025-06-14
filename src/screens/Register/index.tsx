import React from "react";
import { Container, Header, Title, Form, Transactions } from "./styles";
import { Input } from "../../components/Forms/Input";
import { TransactionButton } from "../../components/Forms/TransactionButton";
import { CategoryButton } from "../../components/Forms/Category";

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input 
                    placeholder="Nome"
                />

                <Input 
                    placeholder="Valor"
                />

                <Transactions>
                    <TransactionButton 
                        type='up'
                        textType="Entrada"
                    />

                    <TransactionButton
                        type='down'
                        textType="Saída"
                    />
                </Transactions>

                <CategoryButton />
            </Form>
        </Container>
    )
}
