import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet ,Text, View , Image ,TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { UserLogin } from "./UserLogin";
import { Beranda } from "./pages/Beranda";
import { Tagihan } from "./pages/Tagihan";
import { Wallet } from "./pages/Wallet";
import { Riwayat } from './wallet/Riwayat';
import { Topupsaldo } from './wallet/Topupsaldo';
import { Bayar } from './Tranksaksi/Bayar';
import { Barcode } from './Tranksaksi/Barcode';
import { Scan } from './Tranksaksi/Scan';
import { Bayarcash } from './Tranksaksi/Bayarcash';
import { Pinsantri } from './Tranksaksi/Pinsantri';
import { Bayarberhasil } from './Tranksaksi/Bayarberhasil';
import { Antarwallet } from './antarwallet/Antarwallet';
import { Walletberhasil } from './antarwallet/Walletberhasil';
import { Gantipassword } from './Gantipassword/Gantipassword';
import { Lupapassword } from './Gantipassword/Lupapassword';

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15 ,color:'#ffffff',top:10,},
            tabBarStyle: { backgroundColor: '#1B5E20',height:70, },
        }}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Pembayaran" component={Tagihan} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    )
}
// const TopWallet = () => {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       tabBarLabelStyle: { fontSize: 10 ,color:'white',},
//       tabBarStyle: { backgroundColor: '#1B5E20', },
//   }}>
//     <Tab.Screen name="Top Up Saldo" component={Topupsaldo}/>
//     <Tab.Screen name="Riwayat" component={Riwayat}/>
//     </Tab.Navigator>
//   )
// }

export const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"UserLogin"} component={UserLogin} options= {{headerShown: false}}/>
                <Stack.Screen name={"Home"} component={TopNavigator} options= {{headerShown: false}}/>
                <Stack.Screen name={"walletnext"} component={Topupsaldo} options= {{headerShown: false}}/>
                <Stack.Screen name={"riwayatnext"} component={Riwayat} options= {{headerShown: false}}/>
                <Stack.Screen name={"Bayar"} component={Bayar} options= {{headerShown: false}}/>
                <Stack.Screen name={"Bayarqr"} component={Barcode} options= {{headerShown: false}}/>
                <Stack.Screen name={"Nextbayar"} component={Scan} options= {{headerShown: false}}/>
                <Stack.Screen name={"Nextberanda"} component={TopNavigator} options= {{headerShown: false}}/>
                <Stack.Screen name={"BayarCash"} component={Bayarcash} options= {{headerShown: false}}/>
                <Stack.Screen name={"Pin"} component={Pinsantri} options= {{headerShown: false}}/>
                <Stack.Screen name={"Pinnext"} component={Bayarberhasil} options= {{headerShown: false}}/>
                <Stack.Screen name={"nextBerandasatu"} component={TopNavigator} options= {{headerShown: false}}/>
                <Stack.Screen name={"backwallet"} component={Topupsaldo} options= {{headerShown: false}}/>
                <Stack.Screen name={"riwayat"} component={Riwayat} options= {{headerShown: false}}/>
                <Stack.Screen name={"backriwayat"} component={Riwayat} options= {{headerShown: false}}/>
                <Stack.Screen name={"isisaldo"} component={Topupsaldo} options= {{headerShown: false}}/>
                <Stack.Screen name={"transferantarwallet"} component={Antarwallet} options= {{headerShown: false}}/>
                <Stack.Screen name={"antarhistori"} component={Riwayat} options= {{headerShown: false}}/>
                <Stack.Screen name={"nextberhasil"} component={Walletberhasil} options= {{headerShown: false}}/>
                <Stack.Screen name={"nextberandawallet"} component={TopNavigator} options= {{headerShown: false}}/>
                <Stack.Screen name={"Gantipass"} component={Gantipassword} options= {{headerShown: false}}/>
                <Stack.Screen name={"nextlupapassword"} component={Lupapassword} options= {{headerShown: false}}/>

            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({


});