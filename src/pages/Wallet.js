import React from "react";
import {Text ,StyleSheet,View,TouchableOpacity,ImageBackground} from "react-native";
import { Userlogin } from "../assets";

export const Wallet = ({navigation}) => {
    return (
        <>
        <View style={styles.containerTop}>
            <Text style={styles.ya}>WALLET</Text>
        </View>
        <View style={styles.containerCenter}>
        <Text style={{ color: "white", fontSize: 17,left:10,top:17, }}>Saldo</Text>
        <Text style={{ color: "white", fontSize: 20,left:10,top:20, }}>Rp.50000</Text>
        <ImageBackground source={Userlogin} style={styles.userdua}>
            </ImageBackground>
        </View>
        <View style={styles.containerBottom}>
        <TouchableOpacity
        style={[styles.button_satu, { height: 50,width:150 }]}
                onPress={() => {
                navigation.navigate('walletnext');
                }}>
                    <Text style={{ color: "black", fontSize: 18,left:22,top:10, }}>Top Up Saldo</Text>
        </TouchableOpacity>
        <View style={styles.satu}>
        <TouchableOpacity
        style={[styles.button_satu, { height: 50,width:260,top:-17 }]}
                onPress={() => {
                navigation.navigate('riwayatnext');
                }}>
                    <Text style={{ color: "black", fontSize: 18,left:70,top:10, }}>Riwayat</Text>
        </TouchableOpacity>
        </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        // flex:1,
        height:50,
        // shadowColor: '#1B5E20',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 10 },
        // shadowRadius: 10,
        // elevation: 3,
    },
    containerCenter:{
        height:100,
        backgroundColor:'#1B5E20' ,
    },
    containerBottom:{
        height:650,
        backgroundColor:'white',
    },
    userdua: {
        height:60,
        width:60,
        left:330,
        bottom:40,
    },
    ya:{
        left:10,
        top:10,
        color:'#1B5E20' ,
        fontSize:18,
    },
    button_satu:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: "white",

    },
    satu:{
        left:150,
        bottom:33,
    }
});