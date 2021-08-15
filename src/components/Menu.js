import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.menuItem}>Settings</Text>
      <Text style={styles.menuItem}>Search</Text>
      <Text style={styles.menuItem}>Info</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#aaa',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuItem: {
    width: '33.3%',
    textAlign: 'center',
  },
})

export default Menu