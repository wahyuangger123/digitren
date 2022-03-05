import React from "react";
import {Text ,StyleSheet ,View ,ImageBackground,StatusBar} from "react-native";
import { navbar } from "../assets";


export const Beranda = ({navigation}) => {
    return (
        <>
        <View style={styles.containerTop}>
            <StatusBar barStyle="black"
            backgroundColor="black"
            hidden={false}/>
        <View style={{  }}>
            <ImageBackground source={navbar} style={styles.img}>
        <Text style={{ color: "white", fontSize: 15 ,height:20 }}>Beranda</Text>
        </ImageBackground>
        </View>
        </View>
        <View style={styles.containerBottom}>
        <Text>Login </Text>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        backgroundColor: "#5CA55C",
        alignItems: "center",
        paddingBottom: 1,
        justifyContent: "center",
        width:360,
        height:70
    },
    containerBottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        height: 10,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        height: 10,
    },
    img: {
        justifyContent: "center",
        alignItems: "center",
        height: 58,
        width: 345,
    }
});