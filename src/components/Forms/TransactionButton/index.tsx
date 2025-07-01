
import { Button, Icon, TransactionType } from "./styles";

interface Props {
    type: 'up' | 'down';
    textType: string;
    onPress: () => void;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

export function TransactionButton({ type, textType, onPress}: Props) {
    return(
        <Button onPress={onPress}>
            <Icon 
                name={ icon[type] }
                type={ type }
            />
            <TransactionType>{textType}</TransactionType>
        </Button>
    );
}