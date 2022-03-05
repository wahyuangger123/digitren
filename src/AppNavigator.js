import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet ,Text, View , Image ,TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { UserLogin } from "./UserLogin";
import { Beranda } from "./pages/Beranda";
import { Tagihan } from "./pages/Tagihan";
import { Wallet } from "./pages/Wallet";

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            // tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Tagihan" component={Tagihan} />
        <Tab.Screen name="Wallet" component={Wallet} />
      </Tab.Navigator>
    )
}

export const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"UserLogin"} component={UserLogin} options= {{headerShown: false}}/>
                <Stack.Screen name={"Home"} component={TopNavigator} options= {{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({


});