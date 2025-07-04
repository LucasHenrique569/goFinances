
import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Header, Title, Icon, Text, Button, FilterContainer, GraphContainer, LegendList } from "./styles";

import { VictoryPie, VictoryLegend } from 'victory-native';

import { LegendField } from "../../components/LegendsField";

import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig?.extra?.API_URL;


const dates = [
    {'mes': 'Janeiro', 'digito': 1},
    {'mes': 'Fevereiro', 'digito': 2},
    {'mes': 'Março', 'digito': 3},
    {'mes': 'Abril', 'digito': 4},
    {'mes': 'Maio', 'digito': 5},
    {'mes': 'Junho', 'digito': 6},
    {'mes': 'Julho', 'digito': 7},
    {'mes': 'Agosto', 'digito': 8},
    {'mes': 'Setembro', 'digito': 9},
    {'mes': 'Outubro', 'digito': 10},
    {'mes': 'Novembro', 'digito': 11},
    {'mes': 'Dezembro', 'digito': 12}
]

export function Summary(){
    const [year, setYear] = useState<number>(2025);
    const [month, setMonth] = useState<number>(6);
    const [rawData, setRawData] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const [legendData, setLegendData] = useState([]);
    const [colors, setColors] = useState([]);

    // Função que gera dinamicamente cores para o gráfico, com base na quantidade de categorias retornada pela API
    function gerarCoresHSL(qtd) {
        return Array.from({ length: qtd }, (_, i) => {
            const hue = Math.floor((360 / qtd) * i);
            return `hsl(${hue}, 70%, 50%)`;
        });
    }

    // Função que lida com a diminuição da data cada vez que a setinha da esquerda for pressionada
    function handleDecreaseDate(){
        if (month === 1){
            setYear(year - 1)
            setMonth(12)
        } else{
            setMonth(month - 1)
        }
    }

    // Função que lida com o aumento da data cada vez que a setinha da direita for pressionada
    function handleIncreaseDate(){
        if (month === 12) {
            setYear(year + 1)
            setMonth(1)
        } else {
            setMonth(month + 1)
        }
    }

    function arredondar(valor: number, casasDecimais: number): number {
        const fator = Math.pow(10, casasDecimais);
        return Math.round(valor * fator) / fator;
    }

    
    // Busca os dados de transações de entrada com base em um mês e ano especificos, a cada vez que o estado "mês" ou "ano" mudarem
    useEffect(() => {
        async function getSummary() {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/transacoes/resumo?mes=${month}&ano=${year}`)
                const returnedData = await response.json()

                setRawData(returnedData)
            } catch (err) {
                console.error('Erro ao buscar resumo por categoria: ', err)
            }    
        }

        getSummary();
    }, [month, year])


    // Atualiza as informações do gráfico cada vez que os dados brutos mudarem
    useEffect(() => {
        // Calcula o total dos valores de transações de saída com base em cada categoria
        const total_ = rawData.reduce((acc, item) => acc + item.total, 0) || 1;

        // Calcula a porcentagem e o valor de cada categoria
        const graphData_ = rawData.map(item => ({
            x: `${arredondar((item.total / total_) * 100, 2)}%`,
            y: item.total,
        }));

        const colors_ = gerarCoresHSL(rawData.length);
        
        // Atualiza os estados das cores e dos dados que irão compor o gráfico
        setColors(colors_)
        setGraphData(graphData_)
    }, [rawData])


    // Atualiza os dados de cada item da legenda cada vez que o estado das cores mudarem
    useEffect(() => {
        const legendItems = rawData.map((item, index) => ({
            key: `${index}`,
            category: item.categoria,
            value: item.total,
            color: colors[index],
        }));

        setLegendData(legendItems)
    }, [colors])


    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <FilterContainer>
                <Button
                    onPress={handleDecreaseDate}
                >
                    <Icon 
                        name="chevron-left"
                    />
                </Button>

                <Text>{dates[month - 1].mes}, {year}</Text>

                <Button
                    onPress={handleIncreaseDate}
                >
                    <Icon
                        name="chevron-right"
                    />
                </Button>
            </FilterContainer>

            <GraphContainer>
                <VictoryPie
                    data={graphData}
                    colorScale={colors}
                    labels={({ datum }) => datum.x}
                    style={{
                    labels: {
                        fill: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                    },
                    }}
                    // Removendo o buraco central
                    innerRadius={0}
                    labelRadius={80}
                />

                <LegendList
                    data={legendData}
                    keyExtractor={(item) => item.key}
                    contentContainerStyle={{ paddingBottom: 16 }}
                    renderItem={({ item }) => (
                        <LegendField
                            category_={item.category}
                            value_={item.value}
                            color_={item.color}
                        />
                    )}
                />
            </GraphContainer>

        </Container>
    );
}