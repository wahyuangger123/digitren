import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Linking,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Input } from 'react-native-elements';
import { useDispatch } from "react-redux";
import { setNominal } from '../redux/action';

export const Scan = ({navigation}) =>  {
  const oke =useDispatch();

  const [totalNominal, setTotalNominal ] = useState(0); //redux state
  console.log(totalNominal);



  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar Code Wait Type ${type} and data ${Linking.openURL(`${data}`) } has been scanned`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <>
    <View style={styles.container}>
      <Button title={'Tap to Scan Again'} color={'black'} onPress={() => setScanned(false)} />
      <BarCodeScanner 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scann}
      />
    </View>
    <View style={styles.containerBottom}>
    <Text style={{left:10,top:20,fontSize:20,}}>Anda akan melakukan tranksaksi tujuan</Text>
    <Text style={{left:115,top:25,}}>Nama   :warung bakso jumaidi</Text>
    <Text style={{left:115,top:25,}}>Alamat :jl merdeka raya</Text>
    <Input
                        label={"Masukan nominal"}
                        placeholder={'500'}
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                        onChangeText={(e) => {
                          setTotalNominal(e);
                          }}
                    />
        <Text style={{left:155,top:35,}}>Wallet :10000</Text>
    <Text style={{left:155,top:40,}}>Tunai  :5000</Text>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:250, }]}
         onPress={() => {
                oke(setNominal(totalNominal));
                navigation.navigate('Nextberanda');
                }}>
        <Text style={{ color: "white", fontSize: 18,left:100,top:12, }}>Bayar</Text>
        </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height:470,
        backgroundColor:'black',
    },
    scann: {
      flex:1,
  },
    containerBottom: {
      height:350,
      backgroundColor:'white' ,
    },
    title:{
      color:'black',
    },
    inputLabel: {
      paddingLeft: 130,
      fontSize: 15,
      top: 38,
      color:'black',
  },
  inputContainer: {
    height: 35,
    width:380,
    borderWidth: 1,
    borderColor: "#5CA55C",
    padding: 10,
    top:55,
    left:5,
  },
  buttonqrdua:{
    backgroundColor:'#1B5E20',
    borderRadius: 10,
    left:85,
    top:50,
},
})
