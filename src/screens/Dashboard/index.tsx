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
} from "./styles";

import { Feather } from '@expo/vector-icons'

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

                    <Feather name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    );
}