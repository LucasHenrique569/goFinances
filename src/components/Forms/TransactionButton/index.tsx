
import { Button, Icon, TransactionType } from "./styles";

interface Props {
    type: 'up' | 'down';
    textType: string;
    onPress: () => void;
    isActiveOrNot: string
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

export function TransactionButton({ type, textType, onPress, isActiveOrNot}: Props) {
    return(
        <Button 
            onPress={onPress} 
            isActiveOrNot_={isActiveOrNot}
            textType_={textType}
        >
            <Icon 
                name={ icon[type] }
                type={ type }
            />
            <TransactionType>{textType}</TransactionType>
        </Button>
    );
}