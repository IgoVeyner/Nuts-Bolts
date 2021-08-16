import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

const Menu = ({ navigation }) => {
  const handlePress = (target) => {
    navigation.navigate(`${target}`)
  }

  return (
    <View style={styles.menu}>
      <TouchableHighlight style={styles.menuItem}>
        <Text style={styles.menuText}>Info</Text>
      </TouchableHighlight>
      
      <TouchableHighlight 
        style={styles.menuItem}
        onPress={() => handlePress("Search")}
        >
        <View style={styles.SearchIconContainer}>
          <Image 
            style={styles.SearchIcon}
            source={require('../../assets/search.png')}
            />
        </View>
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
    width: '50%',
  },

  menuText: {
    textAlign: 'center',
  },

  SearchIcon: {
    height: 24,
    width: 24
  },

  SearchIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Menu