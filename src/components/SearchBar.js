import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.SearchBar}>
      <Text>This is a searchbar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  SearchBar: {
    flex: 1,
    backgroundColor: '#ddd',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SearchBar