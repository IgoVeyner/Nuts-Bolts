import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Settings = () => {
  return (
    <View style={styles.Settings}>
      <Text style={styles.SettingsText}>Inside Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Settings: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ddd'
  },

  SettingsText: {
    textAlign: 'center'
  }
})

export default Settings