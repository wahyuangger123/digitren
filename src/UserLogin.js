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
} from "react-native";
import { Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { LoginPage } from './assets/images';
import axios from 'axios';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const WIDTH_BUTTON = 550;
const BUTTON_LOGIN = 130;

export const UserLogin = ({navigation}) => {
        const [username, setUsername] = useState(null);
        const [password, setPassword] = useState(null);
        
    return (
        <>
        <View style={styles.containerTop}>
            <View style={{  }}>
                        <View style={{ }}>
                        <ImageBackground source={LoginPage} style={styles.background}>
    </ImageBackground>
                        </View>
            </View>
        </View>
        <View style={styles.containerBottom}>
            <View style={{ width: "75%" }}>
                <Input
                    label={"Id Santri"}
                    value={username}
                    placeholder=''

                    // errorMessage='Numbers only'
                    onChangeText={text => setUsername(text)}
                    labelStyle={styles.inputLabel}
                    inputContainerStyle={styles.inputContainer}
                />
                <Input
                    label={"Password"}
                    value={password}
                    placeholder=''
                    // errorMessage='Numbers only'
                    onChangeText={text => setPassword(text)}
                    labelStyle={styles.inputLabel}
                    inputContainerStyle={styles.inputContainer}
                />
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={[styles.buttonLogin, { height: 43 }]}>
                <LinearGradient
                    colors={[ "#1B5E20", '#43A047']}
                    start={{x: 0.0, y: 0.1}} end={{x: 0.0, y: 1.0}}
                    style={{ height: 48, width: BUTTON_LOGIN, alignItems: 'center', justifyContent: 'center', borderRadius: BUTTON_LOGIN / 2 }}
                >
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 18 }}>Login</Text> 
                        </View>
                </LinearGradient>
            </TouchableOpacity>
            <View>
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width : 380,
    height : 650,
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
        alignItems: "center"
        // backgroundColor: "yellow"
    },
    inputLabel: {
        paddingLeft: 5,
        fontSize: 20,
        marginBottom: 5
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
        shadowOffset: { width: 0, height: 10},
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: "white",
    },
    link: {
        color:'blue',
    },
});