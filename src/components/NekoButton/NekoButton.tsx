import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { styles } from './NekoButtonStyles';
import { NekoTextInput } from '../NekoTextInput/NekoTextInput';
import geratePass from '../../services/passwordService';

export function NekoButton() {

    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = geratePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>

        <NekoTextInput pass={pass}/>

        <Pressable
            style={styles.button}
            onPress={handleGenerateButton}>
            <Text style={styles.text}>GERAR SENHA</Text>
        </Pressable>

        <Pressable
            style={styles.button}
            onPress={handleCopyButton}>
            <Text style={styles.text}>😺 Copiar</Text>
        </Pressable>

    </>
  );
}