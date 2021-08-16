import React from 'react'
import { StyleSheet, TouchableHighlight, Image } from 'react-native'

const SettingsIcon = () => {
  return (
    <Image 
      style={styles.SettingsIcon}
      source={require('../../assets/settings.png')}
    />
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