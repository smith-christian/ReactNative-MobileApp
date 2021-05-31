import React, { useState } from 'react';
import {Alert, View, StyleSheet, Image, Text, Pressable, TextInput, SafeAreaView} from 'react-native';

function Login(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const onLogin = () => {
        Alert.alert('Credentials', `${userName} + ${password}`);
    }

    return (
        <SafeAreaView style={{ width: "80%", alignItems:"center"}}>
            <TextInput
                style={styles.input}
                value={userName}
                onChangeText={(userName)=>setUserName(userName)}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={(password)=>setPassword(password)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
            />
            <Pressable onPress={onLogin.bind(this)} style={styles.loginbuttons}>
                <Text style={styles.textLogin}>Login</Text>
            </Pressable>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 40,
        marginTop: 12,
        paddingLeft: 15,
        backgroundColor: "white",
        borderRadius: 10,
    },

    loginbuttons: {
        paddingTop: "5%",
        height: 70,
    },
    textLogin: {
        fontFamily: "Helvetica",
        paddingTop: 20,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800",
        color: "white",
        padding: 30,
    },

})

export default Login;