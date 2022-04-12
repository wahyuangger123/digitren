import React, {useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground} from "react-native";
import { Input } from 'react-native-elements';
import { bgcash } from "../assets";
import { Userlogin } from "../assets";

import { useSelector, useDispatch } from "react-redux";
import { setPayment } from "../redux/action";
import { setRingkasan } from "../redux/action";
import { setIdtujuan } from "../redux/action";

export const Bayarcash = ({navigation}) => {
    const oke =useDispatch();
    const yaa =useDispatch();  // hook usestate
    const hmm =useDispatch();  // hook usestate



    const [totalBayar, setTotalBayar ] = useState(0); //redux state
    console.log(totalBayar);

    const [totalSatuan, setTotalSatuan ] = useState(0); //redux state
    console.log(totalSatuan);

    const [totalTujuan, setTotalTujuan ] = useState(0); //redux state
    console.log(totalTujuan);

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
                        label={"Id pembayaran"}
                        placeholder=''
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                            setTotalTujuan(e);
                            }}
                    />
                     <Input
                        label={"Ringkasan Pembayaran"}
                        placeholder=''
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                            setTotalSatuan(e);
                            }}
                    />
                    <Input
                        label={"Total Bayar"}
                        placeholder=''
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                        setTotalBayar(e);
                        }}
                    />
        </ImageBackground>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:250, }]}
         onPress={() => {
                oke(setPayment(totalBayar));
                yaa(setRingkasan(totalSatuan));
                hmm(setIdtujuan(totalTujuan));
                navigation.navigate('Pin');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:100,top:12, }}>Bayar</Text>
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
        top:-380,
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