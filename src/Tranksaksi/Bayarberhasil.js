import React from "react";
import {Text ,View,ImageBackground,StyleSheet,TouchableOpacity} from "react-native";
import { Paysucces } from "../assets";


export const Bayarberhasil = ({navigation}) => {
    return (
        <>
        <View style={styles.containerBottom}>
         <ImageBackground source={Paysucces} style={styles.userdua}>
            </ImageBackground>
        <Text style={styles.tran}>Nomer Tranksaksi 32332309</Text>
        <Text style={styles.wallet}>Wallet : Rp.123</Text>
        <Text style={styles.tunai}>Tunai: Rp.123</Text>
        <Text style={styles.jumlah}>Total Pembayaran: Rp.123</Text>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:250, }]}
         onPress={() => {
                navigation.navigate('nextBerandasatu');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:85,top:12, }}>Beranda</Text>
        </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerBottom: {
        flex:1,
        backgroundColor:'white' ,
    },
    userdua:{
        height:250,
        width:250,
        left:80,
    },
    tran: {
        left:110,
        top:10,
    },
    wallet:{
        left:150,
        top:80,
    },
    tunai:{
        left:155,
        top:85,
        
    },
    jumlah:{
        left:110,
        top:90,
    },
    buttonqrdua:{
        backgroundColor:'#1B5E20',
        borderRadius: 10,
        left:80,
        top:160,
    },
});