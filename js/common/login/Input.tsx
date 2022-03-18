import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const Input = (props: any) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.row}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    // 取消大小写
                    autoCapitalize={'none'}
                    onChangeText={onChangeText}
                />
            </View>
            <View
                style={{
                    height: 0.5,
                    backgroundColor: '#D0D4D4',
                    paddingLeft: shortLine ? 20 : 0,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16,
        width: 90,
    },
    input: {
        flex: 1,
        marginRight: 15,
    }
});