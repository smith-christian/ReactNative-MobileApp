import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable, Alert, Button, TextInput} from 'react-native';
import { color } from 'react-native-reanimated';


function SignUp({navigation}) {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignUp = () => {
        Alert.alert('Credentials', `${userName} + ${email} + ${password}`);
    }


    return (
        <SafeAreaView style = {styles.container}>
            <View style={{marginTop: 50, borderBottomWidth: 2, borderBottomColor: 'white', marginBottom: 30 }}>
                <Text style = {styles.text}>Register With Canroyal</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    value={userName}
                    onChangeText={(userName)=>setUserName(userName)}
                    placeholder="Your Name"/>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(email)=>setEmail(email)}
                    placeholder="Your Email"/>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(password)=>setPassword(password)}
                    secureTextEntry={true}
                    placeholder="Password"/>
                <Pressable onPress={onSignUp.bind(this)} style = {styles.btnlog}>
                    <Text style = {styles.signUp}>Sign UP</Text>
                </Pressable>
                <Pressable style = {styles.btnlog}>
                    <Text style = {styles.LogIn} onPress={() => navigation.goBack()}>LogIn</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dc3444",
        alignItems: "center",
    },
    input: {
        margin: 15,
        width: 350,
        height: 45,
        paddingLeft: 15,
        backgroundColor: "white",
        borderRadius: 10,
    },
    text: {
        marginTop: 50, 
        marginBottom: 15, 
        color: 'white', 
        fontSize: 25, 
        fontWeight: '800',
    },
    signUp: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'grey',
        padding: 15,
        fontSize: 20,
    },
    LogIn: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'grey',
        padding: 15,
        fontSize: 20
    },
    btnlog: {
        marginTop: 20,
        marginLeft: 70,
        marginRight: 70,
        borderRadius: 20,
        overflow: 'hidden',
    }
})

export default SignUp;