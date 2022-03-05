import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './src/AppNavigator';

export default function App() {
  return (
    <>
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
    </>
  );
}


