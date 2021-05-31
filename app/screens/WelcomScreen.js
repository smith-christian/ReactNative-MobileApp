import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, Pressable, TextInput, SafeAreaView, Button, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"

import Login from "./Login/Login";
import SignUpPage from "./SignUp/Signup";
import ContinueAsGuest from './Guest/CountinueAsGuest';
import OilScreen from './Oil/OilScreen';
import VehicleScreen from './Vehicle/VehicleScreen';
import Others from './Others/Others';
import ModelsScreen from './Models/modelsscreen';
import EngineScreen from './Engines/enginescreen';
import Years from './Years/years';

function HomeScreen({navigation}){
    return (
        <SafeAreaView style= {styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <Image
                style = {styles.window_logo} 
                source={require('../assets/head_logo1.png')}/>
            <Login/>
            <View style={styles.registerView}>
                <Text style={styles.textRegister}>Stay Connected With Canroyal!</Text>
                
                <Text style={styles.textRegisterBtn} onPress={()=> navigation.navigate('SignUp')}>Sign Up</Text>
        
                <Pressable style={styles.guestButtons} onPress={()=> navigation.navigate('Guest')}>
                    <Text style={styles.textGuest} >Continue As Guest</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}



const Stack = createStackNavigator();

function WelcomScreen(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name=" " component={HomeScreen} options={headerStyle.headerStyleHome}/>
                <Stack.Screen name="SignUp" component={SignUpPage} />
                <Stack.Screen name="Guest" component={ContinueAsGuest} options={headerStyle.headerStyleGuest}/>
                <Stack.Screen name="Oil" component={OilScreen} />
                <Stack.Screen name="Vehicle" component={VehicleScreen} />
                <Stack.Screen name="Others" component={Others} />
                <Stack.Screen name="modelsscreen" component={ModelsScreen} />
                <Stack.Screen name="enginescreen" component={EngineScreen} />
                <Stack.Screen name="years" component={Years} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const headerStyle = {    
    headerStyleHome: {
        // title: ' ',
        // headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'grey',
            height: 0,   
        },
        headerTitleStyle: {fontWeight: 'bold'}
    },
    headerStyleGuest: {
        // title: ' ',
        // headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'white',
            height: 80,
        },
        headerTitleStyle: {fontWeight: 'bold', paddingBottom: 10}
    },
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dc3444",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    window_logo: {
        width: 200,
        height: 200,
    },

    loginbuttons: {
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

    registerView: { 
        marginTop: "10%",
        width: "100%", 
        height: "40%",
        backgroundColor: "white", 
        borderTopLeftRadius: 0,
        borderTopRightRadius: 100,
    },
    registerButtons: {
      
    },
    textRegister: {
        width: "80%",
        marginTop: 40,
        marginLeft: 30,
        fontFamily: "Helvetica",
        fontSize: 28,
        fontWeight: "800",
        color: "black",
        lineHeight: 40,
    },
    textRegisterBtn: {
        fontFamily: "Helvetica",
        marginTop: 15,
        marginLeft: 30,
        fontSize: 20,
        fontWeight: "500",
        color: "#a19f9f"
    },

    guestButtons: { 
        width: "43%",
        marginTop: 30,
        marginLeft: 185,
        borderRadius: 10,
        backgroundColor: "#dc3444",
    },
    textGuest: {
        fontFamily: "Helvetica",
        fontSize: 15,
        fontWeight: "500",
        color: "white",   
        padding: 15,
    },


})

export default WelcomScreen;