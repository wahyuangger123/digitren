import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    StatusBar,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    KeyboardAvoidingView,
    Linking,
} from "react-native";
import { Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { LoginPage } from './assets/images';
import { login } from './service/login';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const WIDTH_BUTTON = 550;
const BUTTON_LOGIN = 130;
// const url1="https://mail.google.com/mail/u/0/";

export const UserLogin = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [password, setUserPassword] = useState("");

    // const openURL = async (url) => {
    //     const isSupported = await Linking.canOpenURL(url);
    //     if (isSupported) {
    //       await Linking.openURL(url);
    //     } else {
    //       Alert.alert(`Don't know how to open this URL: ${url}`);
    //     }
    //     }
    // const [number, setUserNumber] = useState(0);
    // const [array, setArray] = useState(
    //     [
    //         "1",
    //         "a",
    //         0,
    //         {
    //             name: "angger",
    //             umur: 18
    //         }]);
    // console.log(userName,password);

    // const Login = () => {
    //     if(userEmail){
    //         alert('plis masukan name');
    //         return;
    //     }
    //     if(userPassword){
    //         alert('plis masukan password');
    //         return;
    //     }
    //     //url call api login
    //     AsyncStorage.setItem('username',userEmail);
    //     AsyncStorage.setItem('password',userPassword);

    //     //if true login
        

    //      //end call api login
    // }


    return (
        <>
        <StatusBar barStyle="#E6EE9C"
            backgroundColor="black"
            hidden={false}/>
        <KeyboardAvoidingView>
            <ScrollView>
            <View style={styles.containerTop}>
                        <ImageBackground source={LoginPage} style={styles.background}>
                        </ImageBackground> 
            </View>
            <View style={styles.containerBottom}>
                <View style={{ width: "100%" }}>
                    <Input
                        label={"Id Santri"}
                        placeholder=''

                        // errorMessage='Numbers only'
                        onChangeText={(e) =>
                            setUserName(e)}
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                    />
                    <Input
                        label={"Password"}
                        placeholder=''
                        // errorMessage='Numbers only'
                        onChangeText={(e) =>
                            setUserPassword(e)}
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                    />
                </View>
                <View style={{ left:120,bottom:25, }}>
                <TouchableOpacity
                style={[styles.buttongantipass, { height: 30 ,width:150 }]}
                onPress={() => {
                navigation.navigate('Gantipass');
                }}
                >
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 18 }}>Ganti Password</Text>
                </View>
                </TouchableOpacity>
                </View>
                <TouchableOpacity 
                style={[styles.buttonLogin, { height: 43 }]}
                onPress={() => {
                navigation.navigate('Home');
                login(userName,password);
                }}
                >
                    <LinearGradient
                        colors={["#1B5E20", '#43A047']}
                        start={{ x: 0.0, y: 0.1 }} end={{ x: 0.0, y: 1.0 }}
                        style={{ height: 48, width: BUTTON_LOGIN, alignItems: 'center', justifyContent: 'center', borderRadius: BUTTON_LOGIN / 2 }}
                    >
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <View>
                <TouchableOpacity
                    style={[styles.buttonlupa, { height: 30 ,width:150,bottom:-5 }]}
                    onPress={() => {
                        navigation.navigate('nextlupapassword');
                    }}
                    >
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "black", fontSize: 18 }}>Lupa Password</Text>
                        </View>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 415,
        height: 425,
    },
    containerTop: {
        flex: 1,
        // backgroundColor: "red",
        // alignItems: "center",
        // paddingBottom: 1
        // justifyContent: "center"
    },
    containerBottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height:400,
        backgroundColor: "white"
    },
    inputLabel: {
        paddingLeft: 5,
        fontSize: 20,
        marginBottom: 5,
        color:'black'
    },
    inputContainer: {
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#5CA55C",
        padding: 10,
    },
    buttonLogin: {
        width: BUTTON_LOGIN - 6,
        paddingVertical: 5,
        paddingHorizontal: 1,
        borderRadius: BUTTON_LOGIN / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: "white",
    },
    buttonlupa: {
        backgroundColor:'white'
    },
    buttongantipass:{
        backgroundColor:'white'
    }
});