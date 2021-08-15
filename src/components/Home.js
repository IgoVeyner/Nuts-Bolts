import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ModelContainer from './Model';
import Menu from './Menu';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ModelContainer modelName={"temp"} />
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home