import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Empty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.empty}>
        No Results...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
  },
  
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})

export default Empty