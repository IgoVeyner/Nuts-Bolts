import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Item = ({ item }) => {
  return (
    <View style={styles.ItemContainer}>
      <Text style={styles.Item}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  ItemContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
  },

  Item: {
    fontSize: 24,
    paddingVertical: 12,
    textAlign: 'center',
  }

})

export default Item