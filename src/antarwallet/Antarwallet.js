import React, {useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground} from "react-native";
import { Input } from 'react-native-elements';
import { bgcash } from "../assets";
import { Userlogin } from "../assets";

import { useDispatch } from "react-redux";
import { setTransfer } from "../redux/action";
import { setPintujuan } from "../redux/action";


export const Antarwallet = ({navigation}) => {
    const satu =useDispatch();
    const dua =useDispatch();

    const [totalTransfer, setTotalTransfer ] = useState(0); //redux state
    console.log(totalTransfer);

    const [totalPintujuan, setTotalTujuanpin ] = useState(0); //redux state
    console.log(totalPintujuan);


    return (
        <>
         <View style={styles.containerTop}>
         <ImageBackground source={Userlogin} style={styles.userdua}>
            </ImageBackground>
            <Text style={styles.usersatu}>Hello Word</Text>
        </View>
        <View style={styles.containerCenter}>
        <ImageBackground source={ bgcash } style={styles.oke}>
            <Input
                        label={"Jumlah Transfer"}
                        placeholder=''
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                            setTotalTransfer(e);
                            }}
                    />
                     <Input
                        label={"Masukan Pin Tujuan"}
                        placeholder=''
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                            setTotalTujuanpin(e);
                            }}
                    />
        </ImageBackground>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:250, }]}
         onPress={() => {
                satu(setTransfer(totalTransfer));
                dua(setPintujuan(totalPintujuan));
                navigation.navigate('nextpin');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:60,top:12, }}>Transfer Saldo</Text>
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
    containerCenter: {
        height:440,
        backgroundColor:'black' ,
    },
    buttonqrdua:{
        backgroundColor:'#1B5E20',
        borderRadius: 10,
        left:75,
        top:-440,
    },
    oke:{
        height:770,
        width:415,
    },
    inputLabel: {
        paddingLeft: 5,
        fontSize: 15,
        top: 38,
        color:'black',
    },
    inputContainer: {
      height: 55,
    //borderWidth: 1,
      borderColor: "#5CA55C",
      padding: 10,
      top:55,
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
})