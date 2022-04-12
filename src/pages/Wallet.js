import React, {useState,useEffect} from "react";
import {Text ,StyleSheet,View,TouchableOpacity,ImageBackground,FlatList} from "react-native";
import { Userlogin } from "../assets";
import currencyFormatter from "../HelperFunction/formatter";
import axios from "axios";
import { Newscard } from "../wallet/Newscard";
import Berita from "../service/Berita";

const BASE_PATH ="http://17f8-182-253-183-2.ngrok.io";
const userID= 13;

export const Wallet = ({navigation}) => {
    const [news,setNews] = useState([])

    useEffect (() =>{
        getNewsFromAPI()
    },[])

    // const newsResponse = async()=> {
    //     const response = await Berita.get('top-headlines?country=us&apiKey=318604fac0164db5aadf5971f7c553f9')
    //     console.log(response.data);
    // }

    function getNewsFromAPI(){
        Berita.get('top-headlines?country=us&apiKey=318604fac0164db5aadf5971f7c553f9')
        .then(async function (response) {
            setNews(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
}
    if (!news){
        return null
    }

    const [saldo,setSaldo] = useState(0);
        
    async function getsaldo(){
      await axios.get(`${BASE_PATH}/saldo/${userID}`)
      .then((result) => {
        setSaldo(result.data.data[0].saldo);
        // console.log(result.data.data[0].saldo);
      })
      .catch((error) =>{
        console.log(error);
      })
    };
    console.log(saldo);
    useEffect(()=> {
      getsaldo();
    }, []);


    return (
        <>
        <View style={styles.containerTop}>
            <Text style={styles.ya}>WALLET</Text>
        </View>
        <View style={styles.containerCenter}>
        <Text style={{ color: "white", fontSize: 17,left:10,top:17, }}>Saldo</Text>
        <Text style={{ color: "white", fontSize: 20,left:10,top:20, }}>Rp{currencyFormatter(saldo)}</Text>
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
        <Text style={{ color: "black", fontSize: 30,left:10,top:10, }}>News</Text>
        </View>
        <FlatList data={news.articles}
        keyExtractor={(item,index) => 'Key' + index}
        renderItem={({item}) => {
            return <Newscard item = {item}/>
        }}
        />
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