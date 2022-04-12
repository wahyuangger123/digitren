import React,{useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground} from "react-native";
import { Input } from 'react-native-elements';
import { bgcash } from "../assets";
import { Userlogin } from "../assets";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setMasukanpin } from "../redux/action";

export const Pinantarwallet = ({navigation}) => {
    const masuk =useDispatch();

    const [totalMasukanpin, setTotalMasukan ] = useState(0); //redux state
    console.log(totalMasukanpin);


    const totalTransfer =useSelector ((state) => state.totalTransfer);
    console.log("Halaman Pinantarwallet: ",totalTransfer);

    const totalPintujuan =useSelector ((state) => state.totalPintujuan);
    console.log("Halaman Pinantarwallet: ",totalPintujuan);



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
                        label={"Pin Santri"}
                        placeholder=''
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                            setTotalMasukan(e);
                            }}
                    />
        </ImageBackground>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:250, }]}
         onPress={() => {
                masuk(setMasukanpin(totalMasukanpin))
                navigation.navigate('nextberhasil');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:60,top:12, }}>Masukan Pin</Text>
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
        left:80,
        top:-570,
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