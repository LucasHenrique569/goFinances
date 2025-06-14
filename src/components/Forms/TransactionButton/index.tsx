
import { Button, Icon, TransactionType } from "./styles";

interface Props {
    type: 'up' | 'down';
    textType: string; 
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

export function TransactionButton({ type, textType }: Props) {
    return(
        <Button>
            <Icon 
                name={ icon[type] }
                type={ type }
            />
            <TransactionType>{textType}</TransactionType>
        </Button>
    );
}