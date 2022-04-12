import React, { useState, useEffect } from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ImageBackground} from "react-native";
import { buttonqr } from "../assets/images";
import { Camera } from "expo-camera";


export const Barcode = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    return (
        <>
        <View style={styles.containerCenter}>
        <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}></Text>
          </TouchableOpacity>
        </View>
      </Camera>
        </View>
        <View style={styles.containerBottom}>
          <Text style={{left:50,top:20,fontSize:20,}}>Arahkan kamera ke QR penerima</Text>
        <ImageBackground source={ buttonqr } style={styles.oke}>
        <TouchableOpacity style={[styles.buttonbayar, { height: 81,width:62, }]}
         onPress={() => {
                navigation.navigate('Nextbayar');
                }}>
        </TouchableOpacity>
        </ImageBackground>
        <Text style={{left:175,top:50,fontSize:20,width:80,color:'#9E9E9E'}}>PAKAI KODE</Text>
        </View>
        </>
    );
};
const styles = StyleSheet.create({
    containerCenter: {
        height:470,
        backgroundColor:'#E0E0E0' ,
    },
    containerBottom: {
        height:350,
        backgroundColor:'white' ,
    },
    oke: {
        height:110,
        width:109,
        left:150,
        top:50,
    },
    camera: {
        height:500,
        width:420,
    },
    buttonbayar: {
      backgroundColor:'transparent',
        left:22,
        top:15,
    },
})