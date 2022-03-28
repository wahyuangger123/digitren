import React, { useState } from "react";
import {Text ,StyleSheet,View,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Userlogin } from "../assets";
import { Dropdown } from "./Dropdown";
import { Dropdownbca } from "./Dropdownbca";
import { Dropdownbri } from "./Dropdownbri";
import { DropdownMandiri } from "./DropdownMandiri";

let banksatu =[{id:1,name:'Va 938383839399 dowqkfwqofjwqfjfddddddddddddddddddddddd'}];
let bankdua =[{id:2,name:'Top saldo CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCDDDDDDDDDDDDDD'}];
let banktiga =[{id:3,name:'Top saldo xxxxxxxxxxxxxxxxxCCCCCCCCCCCCCCCCCCCCCCCCCCCC'}];
let bankempat =[{id:4,name:'Top saldo xxxxxxxxxxxxxxxxxCCCCCCCCCCCCCCCCCCCCCCCCCCC'}];

export const Topupsaldo = ({navigation}) => {

        const [selectedItem,setSelectedItem] = useState(null)

        // const onSelect = (item) => {
        //   setSelectedItem (item)
        // }

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
        <ScrollView>
        <View style={styles.containerBottom}>
        <TouchableOpacity
        style={[styles.button_satu, { height: 50,width:150  }]}
                onPress={() => {
                navigation.navigate('backwallet');
                }}>
                    <Text style={{ color: "black", fontSize: 18,left:22,top:10, }}>Top Up Saldo</Text>
        </TouchableOpacity>
        <View style={styles.satu}>
        <TouchableOpacity
        style={[styles.button_satu, { height: 50,width:265,top:-17  }]}
                onPress={() => {
                navigation.navigate('riwayat');
                }}>
                    <Text style={{ color: "black", fontSize: 18,left:70,top:10, }}>Riwayat</Text>
        </TouchableOpacity>
        </View>
          <SafeAreaView>
          <SafeAreaView style={styles.oke}>
        <View>
            <Dropdown 
            value={selectedItem}
            data={banksatu}
            // onSelect={onSelect}
            />
        </View>
        <SafeAreaView style={styles.okesatu}>
        <View>
            <Dropdownbca 
            value={selectedItem}
            data={bankdua}
            // onSelect={onSelect}
            />
        </View >
        <SafeAreaView style={styles.okedua}>
        <View>
            <Dropdownbri 
            value={selectedItem}
            data={banktiga}
            // onSelect={onSelect}
            />
        </View >
        <SafeAreaView style={styles.oketiga}>
        <View>
            <DropdownMandiri
            value={selectedItem}
            data={bankempat}
            // onSelect={onSelect}
            />
        </View >
            </SafeAreaView>
            </SafeAreaView>
            </SafeAreaView>
            </SafeAreaView>
            </SafeAreaView>
        </View>
        </ScrollView>
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
        height:720,
        backgroundColor:"white",
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
    },
    oke:{
      height:480,
      width:380,
      top:-30,
      left:13,
    //   backgroundColor:'black',
    },
    okesatu:{
      height:480,
      width:380,
      top:20,
      left:0,
      },
      okedua:{
    height:480,
      width:380,
      top:20,
      left:0,
      },
      oketiga:{
        height:480,
        width:380,
        top:20,
        left:0,
      },
});