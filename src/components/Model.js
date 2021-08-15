import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ModelContainer = ({ modelName}) => {
  return (
    <View>
      <Text>{modelName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  modelContainer: {
    flex: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ModelContainer