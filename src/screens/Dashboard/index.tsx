import { Text } from "react-native";
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
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";


export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={ { uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f5/Boston_Celtics.png/250px-Boston_Celtics.png' } }/>
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Aluno</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards
            >
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>

        </Container>
    );
}