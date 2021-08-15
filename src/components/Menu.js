import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Menu = () => {
  return (
    <View style={styles.menu}>
      <TouchableHighlight style={styles.menuItem}>
        <Text>Settings</Text>
      </TouchableHighlight>
      
      <TouchableHighlight style={styles.menuItem}>
        <Text>Search</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.menuItem}>
        <Text>Info</Text>
      </TouchableHighlight>
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