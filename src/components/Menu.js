import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text>Settings</Text>
      <Text>Search</Text>
      <Text>Info</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#aaa',
    textAlign: 'center',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Menu