import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Linking,ImageBackground,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { buttonqr } from '../assets';

export const Scan = ({navigation}) =>  {
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
        <ImageBackground source={ buttonqr } style={styles.oke}>
        <TouchableOpacity style={[styles.buttonbayar, {  height: 81,width:62, }]}
         onPress={() => {
                navigation.navigate('Nextberanda');
                }}>
        </TouchableOpacity>
        </ImageBackground>
        <Text style={{left:175,top:-10,}}>Rp.50000</Text>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height:500,
        backgroundColor:'black',
    },
    scann: {
      flex:1,
  },
    containerBottom: {
      height:320,
      backgroundColor:'white' ,
    },
    oke: {
      height:258,
      width:150,
      left:130,
    },
    buttonbayar: {
      backgroundColor:'transparent',
      left:40,
      top:48,
    },
    title:{
      color:'black',
    },
})
