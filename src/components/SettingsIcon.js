import React from 'react'
import { StyleSheet, TouchableHighlight, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const SettingsIcon = ({ props }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Settings')
  }

  return (
    <TouchableHighlight
      onPress={handlePress}
    >
      <Image 
        style={styles.SettingsIcon}
        source={require('../../assets/settings.png')}
      />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  SettingsIcon: {
    width: 24,
    height: 24,
    marginRight: 16
  }
})

export default SettingsIcon