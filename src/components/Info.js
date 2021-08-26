import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoContainer = () => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>Inside info</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ddd',
  },

  infoText: {
    textAlign: 'center'
  }
})

export default InfoContainer