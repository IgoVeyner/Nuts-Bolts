import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home'
import Search from './src/components/Search';
import Logo from './src/components/Logo';
import SettingsIcon from './src/components/SettingsIcon';
import Settings from './src/components/Settings'

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          initialParams={
           { modelId: 1}
          }
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerRight: (props) => <SettingsIcon props={props} />
          }}
          />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
