import React, { useEffect, useState } from "react";
import { ToastAndroid, Animated, Modal, Image, Text, StyleSheet, View, ImageBackground, TouchableOpacity, ScrollView, Alert, ImagePickerIOS, } from "react-native";
import { iconwallet } from "../assets/images";
// import { Userlogin } from "../assets";
import { tigahome } from "../assets";
import { walletsatu } from "../assets";
import { gambarsatu } from "../assets";
import { gambardua } from "../assets";
import { gambartiga } from "../assets";
import axios from "axios";
import currencyFormatter from "../HelperFunction/formatter";
import { Avatar, Button } from "react-native-paper";
import { launchImageLibrary } from "react-native-image-picker";
import { useSelector } from "react-redux";
import { dompet } from "../assets";
import { iconbayar } from "../assets";
import { iconsaldo } from "../assets";
import { icontransfer } from "../assets";
// import { BlurView } from "@react-native-community/blur";
// import { Button } from "react-native-elements";

const BASE_PATH = "http://17f8-182-253-183-2.ngrok.io";
const userID = 13;


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
    const totalNominal =useSelector ((state) => state.totalNominal);
    console.log("Halaman Beranda: ",totalNominal);

    const [visible, setVisible] = React.useState(false);

    const [saldo, setSaldo] = useState(0);

    const [Pic, SetPic] = React.useState('');

    const setToastMsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };

    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        };

        launchImageLibrary(options, response => {

            if (response.didCancel) {
                setToastMsg('Cancelled image selection');
            } else if (response.errorCode == 'permission') {
                setToastMsg('permission not satisfied');
            } else if (response.errorCode == 'others') {
                setToastMsg(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert('Maximum image size exceeded','Please choose image under 2 MB',
                    [{ text: 'oke' }],
                );
            } else {
                SetPic(response.assets[0].base64);
            }
        });
    };

const removeImage =() => {
    SetPic('')
    setToastMsg('Image removed');
}


//get saldo
    async function getsaldo() {
        await axios.get(`${BASE_PATH}/saldo/${userID}`)
            .then((result) => {
                setSaldo(result.data.data[0].saldo);
                // console.log(result.data.data[0].saldo);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    console.log(saldo);
    useEffect(() => {
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
                                        <Text style={{ fontSize: 20, height: 25, bottom: 10, }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={{ top: 1 }}>
                                <Button mode="contained" onPress={() => uploadImage()}>uploadImage</Button>
                                <Button mode="contained" style={{ top: 10, }} onPress={() => removeImage()}>RemoveImage</Button>
                            </View>
                        </ModalPoup>
                        <TouchableOpacity style={{ height: 40, width: 50, left: 350, top: 5 }}
                            onPress={() => (setVisible(true))
                            }
                            underlaycolor="rgba(0,0,0,0)">
                            <Avatar.Image style={{ height: 45, width: 45, justifyContent: "center", bottom: 1, }}
                                source={{ uri: 'data:image/png;base64,' + Pic}} />
                            {/* <ImageBackground source={Userlogin} style={styles.userdua}></ImageBackground> */}
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.usersatu}>Hello Word</Text>
                </View>
                <View style={styles.containerCenter}>
                    <ImageBackground source={iconwallet} style={styles.iconw}>
                        <View style={styles.card}>
                        <ImageBackground source={dompet} style={styles.cardtiga}>
                        <Text style={{width:80, fontSize:20, marginLeft:35,}}>Wallet</Text>
                        </ImageBackground>
                        <Text style={styles.usertiga}>Rp.{currencyFormatter(saldo)}</Text>
                        <TouchableOpacity style={[styles.buttonhistori, { height: 30, width: 150, }]}
                            onPress={() => {
                                navigation.navigate('antarhistori');
                            }}>
                        <Text style={{ fontSize:15,width:150}}>Riwayat Tranksaksi</Text>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.cardsatu]}
                            onPress={() => {
                                navigation.navigate('Bayar');
                            }}>
                        <Image source={iconbayar} style={{height:30,width:30,left:5,top:5,}}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontSize:12,width:45,left:205,bottom:80,}}>Bayar</Text>
                        <TouchableOpacity style={[styles.carddua]}
                            onPress={() => {
                                navigation.navigate('isisaldo');
                            }}>
                        <Image source={iconsaldo} style={{height:30,width:30,left:5,top:5,}}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontSize:12,width:65,left:260,bottom:138,}}>Isi saldo</Text>
                        <TouchableOpacity style={[styles.cardempat]}
                            onPress={() => {
                                navigation.navigate('transferantarwallet');
                            }}>
                        <Image source={icontransfer} style={{height:30,width:30,left:5,top:5,}}></Image>
                        </TouchableOpacity>
                        <Text style={{ fontSize:12,width:65,left:323,bottom:196,}}>Transfer</Text>
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
        height: 155,
        width: 380,
        left: 15,
        top: 5,
    },
    ya: {
        bottom: -50,
        left: 181,
    },
    buttontransfer: {
        backgroundColor: 'black',
        left: 345,
        bottom: 40,
    },
    usertiga: {
        left: 45,
        top: 10,
        fontSize: 24,

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
    card: {
        borderRadius:10,
        height:120,
        width:180,
        backgroundColor:'white',
        left:10,
        top:10,
    },
    cardtiga: {
        height: 30,
        width: 30,
        top:5,
        left:15,
    },
    buttonhistori:{
        backgroundColor:'transparent',
        left:15,
        top:15,
    },
    cardsatu:{
        borderRadius:10,
        height:40,
        width:40,
        backgroundColor:'white',
        left:200,
        bottom:80,

    },
    carddua:{
        borderRadius:10,
        height:40,
        width:40,
        backgroundColor:'white',
        left:265,
        bottom:138,

    },
    cardempat:{
        borderRadius:10,
        height:40,
        width:40,
        backgroundColor:'white',
        left:330,
        bottom:196,

    },
});