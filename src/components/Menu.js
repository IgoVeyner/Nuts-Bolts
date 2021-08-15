import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Menu = ({ navigation }) => {
  const handlePress = (target) => {
    navigation.navigate(`${target}`)
  }

  return (
    <View style={styles.menu}>
      <TouchableHighlight style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
      </TouchableHighlight>
      
      <TouchableHighlight 
        style={styles.menuItem}
        onPress={() => handlePress("Search")}
      >
          <Text style={styles.menuText}>Search</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.menuItem}>
        <Text style={styles.menuText}>Info</Text>
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
  },

  menuText: {
    textAlign: 'center',
  }
})

export default Menu