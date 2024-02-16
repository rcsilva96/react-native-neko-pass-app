import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './NekoTestInputStyles';

interface NekoTextInputProps{
    pass: string
}

export function NekoTextInput(props: NekoTextInputProps) {
    return (
        <TextInput style={styles.inputer}
            placeholder='Senha'
            value={props.pass}
        />
    );
}