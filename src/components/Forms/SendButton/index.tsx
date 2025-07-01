
import { Button, ButtonTitle } from "./styles";

interface Props {
    onPress: () => void;
}

export function SendNewTransactionButton({ onPress }: Props){
    return (
        <Button onPress={onPress}>
            <ButtonTitle>Enviar</ButtonTitle>
        </Button>
    );
}