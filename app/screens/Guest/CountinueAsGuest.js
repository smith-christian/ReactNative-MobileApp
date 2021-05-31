import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable, Alert, Button,Image } from 'react-native';

const selectCriteria = [
    {id: 1, name: "Select Oil", screenHeader: "Oil", img: require("../../assets/Oil/OilCanLogo.png")},
    {id: 2, name: "Select Vehicle", screenHeader: "Vehicle",img: require("../../assets/Vehicle/CarLogo.png")},
    {id: 3, name: "Others", screenHeader: "Others",img: require("../../assets/Filter/Filter.png")}
]


function ContinueAsGuest({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            {selectCriteria.map((criteria)=>{
                return (
                    <View style={styles.container} key={criteria.id}>
                        <Pressable onPress={()=> navigation.navigate(criteria.screenHeader)}>
                            <View style={styles.circle}>
                                <Image style={styles.tinyLogos} source={ criteria.img}/>
                            </View>
                        </Pressable>
                        <Text style={styles.textCriteria}>{criteria.name}</Text>
                    </View>
                )
            })}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#576574", 
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        width: 140,
        height: 140,
        backgroundColor: "#dc3444",
        borderRadius: 80,
    },
    textCriteria: {
        fontFamily: "Helvetica",
        paddingTop: 15,
        textAlign: "center",
        alignContent: "center",
        color: "white",
        fontSize: 17,
        fontWeight: "500"
    },
    tinyLogos: {
        marginLeft: "auto", 
        marginRight: "auto", 
        width: "100%", 
        height: "100%"},
});

export default ContinueAsGuest;