import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Item = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate("Home", { 
      modelId: item.id,
    })
  }

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.ItemContainer}>
        <Text style={styles.Item}>{item.title}</Text>
      </View>
    </TouchableHighlight>
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