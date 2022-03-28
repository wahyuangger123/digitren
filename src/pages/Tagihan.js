import React from "react";
import {Text,StyleSheet ,View ,ImageBackground,} from "react-native";
import { Pembayaran } from "../assets";

export const Tagihan = ({navigation}) => {
    return (
        <>
        <View style={styles.containerTop}>
        <ImageBackground source={Pembayaran} style={styles.userdua}>
        </ImageBackground>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerTop:{
        height:750,
        width:410,
        backgroundColor:"white",
    },
    userdua:{
        height:350,
        width:400,
    }
})