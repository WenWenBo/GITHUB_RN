import React, { useState } from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'devww.org';
export default (props: any) => {
    const [text, onChangeText] = useState('');
    const [showText, setShowText] = useState('');
    const onSave = async () => {
        try {
            await AsyncStorage.setItem(KEY, text);
        } catch (error) {
            console.log(error);
        }
    }

    const onGet = async () => {
        try {
            const value = await AsyncStorage.getItem(KEY);
            console.log(value);
            setShowText(value || '');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView style={styles.root}>
            <TextInput
                onChangeText={onChangeText}
                value={text}
            />
            <Button title='Save' onPress={onSave} />
            <Button title='Get' onPress={onGet} />
            <Text>Result: {showText}</Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});