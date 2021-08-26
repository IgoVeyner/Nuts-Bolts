import React from 'react'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

const Menu = ({ navigation }) => {
  const handlePress = (target) => {
    navigation.navigate(`${target}`)
  }

  return (
    <View style={styles.menu}>
      <TouchableHighlight 
        style={styles.menuItem}
        onPress={() => handlePress("Info")}
        >
        <View style={styles.infoIconContainer}> 
          <Image 
            style={styles.infoIcon}
            source={require('../../assets/info.png')}
          />
        </View>
      </TouchableHighlight>
      
      <TouchableHighlight 
        style={styles.menuItem}
        onPress={() => handlePress("Search")}
        >
        <View style={styles.searchIconContainer}>
          <Image 
            style={styles.searchIcon}
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

  searchIcon: {
    height: 24,
    width: 24
  },

  infoIcon: {
    height: 24,
    width: 24,
  },

  searchIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Menu