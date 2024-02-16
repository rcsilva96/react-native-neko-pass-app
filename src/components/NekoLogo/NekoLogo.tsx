import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './NekoLogoStyles';
import nekoLogo from '../../../assets/neko-logo.png'

export function NekoLogo() {
  return (
    <View>

        <Text style={styles.title}>Gerador de senha</Text>
        <Image
            style={styles.image}
            source={nekoLogo}
        />

    </View>
  );
}