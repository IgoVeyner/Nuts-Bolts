import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ModelContainer = ({ modelName}) => {
  return (
    <View style={styles.modelContainer}>
      <Text>{modelName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  modelContainer: {
    flex: 9,
    backgroundColor: '#ddd',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ModelContainer