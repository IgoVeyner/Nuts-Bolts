import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import ModelContainer from './src/components/Model';
import Menu from './src/components/Menu';

export default function App() {
  const [model, setModel] = useState("Full Skateboard")
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ModelContainer modelName={model} />
        <Menu />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
