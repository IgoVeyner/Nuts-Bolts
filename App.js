import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home'
import SearchBar from './src/components/SearchBar';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
