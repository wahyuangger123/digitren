import React  from "react";
import {Animated,Modal,Text ,StyleSheet,View,TouchableOpacity,ImageBackground,Image} from "react-native";
import { dompet } from "../assets";
import { barcode } from "../assets";
import { tunjuk } from "../assets";


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


export const Homeantar = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);
    
    return (
        <>
        <View style={styles.containerTop}>
            <Text style={styles.ya}>TRANSFER</Text>
        </View>
        <View style={styles.containerCenter}>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 80,width:320, }]}
         onPress={() => {
                navigation.navigate('nextwallet');
                }}>
        <ImageBackground source={dompet} style={styles.userdua}>
            </ImageBackground>
        <Image source={ tunjuk } style={styles.userempat}></Image>
        <Text style={{ color: "black", fontSize: 18,left:70,bottom:35, }}>KESESAMA WALLET</Text>
        </TouchableOpacity>
        <View>
            <ModalPoup visible={visible}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.header}>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                            >
                                    <Text style={{ fontSize: 20, height: 25, bottom: 10 }}>X</Text>
                            </TouchableOpacity>
                                </View>
                            </View>
                                <Image source={ barcode } style={{ height:100,width:100,left:90 }}></Image>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>ID Penerima:07389278</Text>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>Silahkan</Text>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>Konfirmasi ke pengrim saldo</Text>
                                <TouchableOpacity style={[styles.buttontiga, { height: 60,width:250, }]}
                                 onPress={() => {
                                navigation.navigate('nextpoupberanda');
                                }}>
                             <Text style={{ color: "white", fontSize: 18,left:90,top:12, }}>Beranda</Text>
        </TouchableOpacity>
                        </ModalPoup>
        <TouchableOpacity style={[styles.buttonqrtiga, { height: 80,width:320, }]}
         onPress={() => setVisible(true)}>
        <Image source={ barcode } style={styles.usertiga}></Image>
        <Image source={ tunjuk } style={styles.userempat}></Image>
        <Text style={{ color: "black", fontSize: 18,left:70,bottom:35, }}>TERIMA SALDO</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.containerBottom}>
        <Text style={styles.yaa}>Tranksaksi Terahkir</Text>
        <View style={{bottom:50}}>
        <View style={styles.viewhistori}>
            <View style={styles.textview}>
           <Text style={styles.textpertama}>22 maret 2022</Text>
           <Text style={styles.textdua}>Rp 5000</Text>
           <Text style={styles.texttiga}>ID 779338939</Text>
           </View>
        </View>
        <View style={styles.line}/>
        </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        // flex:1,
        backgroundColor:'#E0E0E0',
        height:50,
        // shadowColor: '#1B5E20',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 10 },
        // shadowRadius: 10,
        // elevation: 3,
    },
    containerCenter:{
        height:400,
        backgroundColor:'white' ,
    },
    containerBottom:{
        height:670,
        width:410,
        backgroundColor:'#E0E0E0',
    },
    ya:{
        left:10,
        top:10,
        color:'#1B5E20' ,
        fontSize:18,
    },
    yaa:{
        left:10,
        top:10,
        color:'black' ,
        fontSize:18,
    },
    viewhistori:{
        flexDirection:"row",
        marginBottom:75,
    },
    gmbrhistori:{
        height:100,
        width:80,
        borderRadius:100,
    },
    textview:{
        marginLeft:18,
        marginTop:80,
        height:80,
    },
    textpertama:{
        fontSize:18,
        fontWeight:'bold',
    },
    textdua:{
        fontSize:16,

    },
    texttiga:{
        fontSize:12,
        marginTop:8,
    },
    line:{
        height:2,
        backgroundColor:'#424242',
        marginVertical:-60,
        width:380,
        left:15,
    },
    buttonqrdua:{
        backgroundColor:'#E0E0E0',
        borderRadius: 10,
        left:45,
        top:50,
    },
    buttonqrtiga:{
        backgroundColor:'#E0E0E0',
        borderRadius: 10,
        left:45,
        top:110,
    },
    userdua:{
        height:40,
        width:40,
        left:20,
        top:20,
    },
    usertiga:{
        height:40,
        width:40,
        left:20,
        top:20,
    },
    userempat:{
        height:20,
        width:20,
        left:270,
        bottom:10,
    },
    header: {
        width: '100%',
        height: 10,
        alignItems: "flex-end",
    },
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
    buttontiga:{
        backgroundColor:'#1B5E20',
        borderRadius: 10,
        marginVertical: 30,
        left:20,
    },
});