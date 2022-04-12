import React from "react";
import {Modal,Animated,Text ,View,ImageBackground,StyleSheet,TouchableOpacity} from "react-native";
import { bggantipassword } from "../assets";
import { Input } from "react-native-elements";

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



export const Gantipassword = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
        <View style={styles.containerBottom}>
         <ImageBackground source={bggantipassword} style={styles.userdua}>
         <View style={{ width: "100%", flex: 1, alignItems: 'center',justifyContent: 'center', }}>
                    <Input
                        label={"Password baru"}
                        placeholder=''
                        // errorMessage='Numbers only'
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                    />
                    <Input
                        label={"Konfirmasi password"}
                        placeholder=''
                        // errorMessage='Numbers only'
                        labelStyle={styles.inputLabel}
                        inputContainerStyle={styles.inputContainer}
                    />
                </View>
            </ImageBackground>
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
                                <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>Password sudah terganti</Text>
                        </ModalPoup>
        <TouchableOpacity style={[styles.buttonqrdua, { height: 60,width:250, }]}
         onPress={() => setVisible(true)}
         >
        <Text style={{ color: "white", fontSize: 18,left:95,top:12, }}>Update</Text>
        </TouchableOpacity>
        </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
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
    containerBottom: {
        height:880,
        width:410,
    },
    userdua:{
        flex:1,
    },
    tran: {
        left:110,
        top:10,
    },
    wallet:{
        left:150,
        top:80,
    },
    tunai:{
        left:155,
        top:85,
        
    },
    jumlah:{
        left:110,
        top:90,
    },
    buttonqrdua:{
        backgroundColor:'#1B5E20',
        borderRadius: 10,
        left:80,
        top:-260,
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
});