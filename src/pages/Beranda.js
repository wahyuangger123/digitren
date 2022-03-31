import React, { useEffect, useState } from "react";
import { ToastAndroid,Animated, Modal, Image, Text, StyleSheet, View, ImageBackground, TouchableOpacity, ScrollView, Alert, } from "react-native";
import { iconwallet } from "../assets/images";
// import { Userlogin } from "../assets";
import { tigahome } from "../assets";
import { walletsatu } from "../assets";
import { gambarsatu } from "../assets";
import { gambardua } from "../assets";
import { gambartiga } from "../assets";
import axios from "axios";
import currencyFormatter from "../HelperFunction/formatter";
import { Avatar ,Button} from "react-native-paper";
import { launchImageLibrary } from "react-native-image-picker";
// import { BlurView } from "@react-native-community/blur";
// import { Button } from "react-native-elements";

const BASE_PATH ="http://17f8-182-253-183-2.ngrok.io";
const userID= 13;


const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };


    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};



export const Beranda = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const [saldo,setSaldo] = useState(0);

    const [Pic,SetPic]= React.useState('');

    const setToastMsg = msg => {
        ToastAndroid,showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER);
    };

    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBasse64: true,
        };

        launchImageLibrary(options,response => {
            if(response.didCancel) {
                setToastMsg('Cancellied image selection');
            }else if (response.errorCode =='permission') {
                setToastMsg('permission not satisfied');
            }else if (response.errorCode =='others') {
                setToastMsg(response.errorMessage);
            }else if(response.assets[0].fileSize > 2097152) {
                Alert.alert('Maximum image size exceeded','Please choose image under 2 MB',
                [{text:'oke'}],
                );
            } else {
                SetPic(response.assets[0],base64);
            }
        });
    };
        
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
            <ScrollView>
                <View style={styles.containerTop}>
                    <View>
                        <ModalPoup visible={visible}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                            >
                                    <Text style={{ fontSize: 20, height: 25, bottom: 10 ,}}>X</Text>
                            </TouchableOpacity>
                                </View>
                            </View>
                            <View
                            style={{top:1}}>
                                <Button mode="contained" onPress={() => uploadImage()}>uploadImage</Button>
                                <Button mode="contained" style={{top:10,}} onPress={() => uploadImage()}>RemoveImage</Button>
                            </View>
                        </ModalPoup>
                        <TouchableOpacity style={{height: 40,width: 50,left:350,top:5,backgroundColor:'black'}}
                            onPress={() => setVisible(true)}
                            underlaycolor="rgba(0,0,0,0)">
                        <Avatar.Image  style={{height:45,width:45,justifyContent: "center",bottom:1,}}
                        source={{url:'data:image/png;base64,'+Pic}}/>
                        {/* <ImageBackground source={Userlogin} style={styles.userdua}></ImageBackground> */}
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.usersatu}>Hello Word</Text>
                </View>
                <View style={styles.containerCenter}>
                    <ImageBackground source={iconwallet} style={styles.iconw}>
                        <Text style={styles.usertiga}>Rp{currencyFormatter(saldo)}</Text>
                        <TouchableOpacity style={[styles.buttonbayar, { height: 35, width: 28, }]}
                            onPress={() => {
                                navigation.navigate('Bayar');
                            }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonisisaldo, { height: 35, width: 28, }]}
                            onPress={() => {
                                navigation.navigate('isisaldo');
                            }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttontransfer, { height: 35, width: 28, }]}
                            onPress={() => {
                                navigation.navigate('transferantarwallet');
                            }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonhistori, { height: 25, width: 100, }]}
                            onPress={() => {
                                navigation.navigate('antarhistori');
                            }}>
                        </TouchableOpacity>
                    </ImageBackground>
                    <ImageBackground source={tigahome} style={styles.userempat}>
                    </ImageBackground>
                </View>
                <ScrollView horizontal style={{ flexDirection: "row", paddingLeft: 16, backgroundColor: 'white', }}>
                    <View style={{ marginRight: 16 }}>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', marginBottom: 1 }}>Berita Pondok</Text>
                        <View style={{ width: 150, height: 150, borderRadius: 10, backgroundColor: 'white' }}>
                            <Image source={gambarsatu} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} ></Image>
                        </View>
                    </View>
                    <View style={{ marginRight: 16 }}>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', marginBottom: 1 }}>Santri Milenial</Text>
                        <View style={{ width: 150, height: 150, borderRadius: 10, backgroundColor: 'white' }}>
                            <Image source={gambardua} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} ></Image>
                        </View>
                    </View>
                    <View style={{ marginRight: 16, paddingRight: 16 }}>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', color: 'black', marginBottom: 1 }}>Hari Santri</Text>
                        <View style={{ width: 150, height: 150, borderRadius: 10, backgroundColor: 'white' }}>
                            <Image source={gambartiga} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} ></Image>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.containerBottom}>
                    <ImageBackground source={walletsatu} style={styles.userlima}>
                    </ImageBackground>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    containerTop: {
        // flex:1,
        height: 50,
        // shadowColor: '#1B5E20',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 10 },
        // shadowRadius: 10,
        // elevation: 3,
        backgroundColor: 'white',
    },
    usersatu: {
        left: 230,
        top: -30,
        fontSize: 20,
    },
    userdua: {
        height: 40,
        width: 40,
    },
    containerCenter: {
        height: 290,
        backgroundColor: 'white',
    },
    containerBottom: {
        height: 250,
        backgroundColor: 'white',

    },
    iconw: {
        height: 170,
        width: 400,
        left: 3,
        top: 1,
    },
    ya: {
        bottom: -50,
        left: 181,
    },
    buttonbayar: {
        backgroundColor: 'transparent',
        left: 205,
        top: 32,
    },
    buttonisisaldo: {
        backgroundColor: 'transparent',
        left: 277,
        top: 0,
    },
    buttontransfer: {
        backgroundColor: 'transparent',
        left: 345,
        top: -35,
    },
    buttonhistori: {
        backgroundColor: 'transparent',
        left: 60,
        top: -25,
    },
    usertiga: {
        left: 85,
        top: 55,
        fontSize: 18,
    },
    userempat: {
        height: 90,
        width: 300,
        left: 50,
        top: 10,
    },
    userlima: {
        height: 170,
        width: 260,
        left: 70,
        top: 35,
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: "flex-end",
    },
});