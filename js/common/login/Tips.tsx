import { View, Text, StyleSheet, Button, Linking } from 'react-native'
import React from 'react'

export default function Tips(props: any) {
    const { msg, helpUrl } = props;
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tips}>{ msg }</Text>
            {!!helpUrl && (
                <Button title="查看帮助" onPress={() => {
                    Linking.openURL(helpUrl);
                }} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    tipsLayout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tips: {
        fontSize: 14,
        color: 'red',
    }
});