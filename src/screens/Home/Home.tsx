import React from "react";
import { Text, View } from "react-native";

import { StatusBar } from 'expo-status-bar';

import styles from '../Home/Style'
import { NekoLogo } from "../../components/NekoLogo/NekoLogo";
import { NekoTextInput } from "../../components/NekoTextInput/NekoTextInput";
import { NekoButton } from "../../components/NekoButton/NekoButton";


export default function Home(){
    return(
        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
                <NekoLogo/>
            </View>

            <View style={styles.inputContainer}>
                <NekoButton/>
            </View>


      <StatusBar style="light" />
        </View>
    )
}

