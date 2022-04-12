import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './src/AppNavigator';

import { Provider } from 'react-redux';
import { Store } from './src/redux/Store';

export default function App() {
  return (
    <>
    <SafeAreaProvider>
      <Provider store={Store}>
      <AppNavigator/>
    </Provider>
    </SafeAreaProvider>
    </>
  );
}


