import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import ConfirmButton from '../common/login/ConfirmButton';
import { Input } from '../common/login/Input';
import Tips from '../common/login/Tips';
export default (props: any) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('ddd');
    const [helpUrl, setHelpUrl] = useState('https://m.jd.com/');

    const onLogin = () => {};

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.content}>
                <Input
                    label="用户名"
                    placeholder="请输入用户名"
                    shortLine={true}
                    onChangeText={(text: string) => setUserName(text)}
                />
                <Input
                    label="密码"
                    placeholder="密码"
                    secure={true}
                    onChangeText={(text: string) => setPassword(text)}
                />
                <ConfirmButton title="登录" onClick={onLogin} />
                <Tips msg={msg} helpUrl={helpUrl} />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    content: {
        paddingTop: 20,
        backgroundColor: '#F1F5F6',
        flexGrow: 1
    }
});