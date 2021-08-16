import React from 'react'
import { StyleSheet, TouchableHighlight, Image } from 'react-native'

const Logo = () => {
  return (
    <Image 
      style={styles.Logo}
      source={require('../../assets/temp-logo.jpg')}
    />
  )
}

const styles = StyleSheet.create({
  Logo: {
    width: 40,
    height: 40
  }
})

export default Logo