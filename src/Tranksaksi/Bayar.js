import React from "react";
import {Text,View,ImageBackground,StyleSheet,TouchableOpacity} from "react-native";
import { Userlogin } from "../assets";

export const Bayar = ({navigation}) => {
    return (
        <>
        <View style={styles.containerTop}>
        <ImageBackground source={Userlogin} style={styles.userdua}>
            </ImageBackground>
            <Text style={styles.usersatu}>Hello Word</Text>
        </View>
        <View style={styles.containerBottom}>
        <TouchableOpacity style={[styles.buttonqr, { height: 60,width:200, }]}
         onPress={() => {
                navigation.navigate('Bayarqr');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:58,top:12, }}>Bayar QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:200, }]}
         onPress={() => {
                navigation.navigate('BayarCash');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:73,top:12, }}>Bayar</Text>
        </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        height:50,
        backgroundColor:'#1B5E20' ,
    },
    containerBottom: {
        height:600,
        width:360,
        top:30,
        backgroundColor:'white',
        borderRadius: 10,
        left:25,
        elevation:5,
    },
    userdua: {
        height:40,
        width:40,
        left:350,
        top:4
    },
    usersatu: {
        left:230,
        top:-30,
        fontSize:20,
        color:'white'
    },
    buttonqr:{
        backgroundColor:'#1B5E20',
        borderRadius: 10,
        left:80,
        top:100,
    },
    buttonqrdua:{
        backgroundColor:'#1B5E20',
        borderRadius: 10,
        left:80,
        top:175,
    },
})