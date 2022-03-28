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
        <ImageBackground source={ buttonqr } style={styles.oke}>
        <TouchableOpacity style={[styles.buttonbayar, { height: 81,width:62, }]}
         onPress={() => {
                navigation.navigate('Nextbayar');
                }}>
        </TouchableOpacity>
        </ImageBackground>
        <Text style={{left:175,top:-10,}}>Rp.50000</Text>
        </View>
        </>
    );
};
const styles = StyleSheet.create({
    containerCenter: {
        height:500,
        backgroundColor:'#E0E0E0' ,
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
    camera: {
        height:500,
        width:420,
    },
    buttonbayar: {
      backgroundColor:'transparent',
        left:40,
        top:48,
    },
})