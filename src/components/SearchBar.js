import React from 'react'
import { useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'

const SearchBar = () => {
  const [text, onChangeText] = useState("")
  const input = useRef(null)

  const handlePress = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback
      style={styles.SearchBarContainer}
      onPress={handlePress}
    >
      <View 
        style={styles.SearchBarContainer}  
      >
        <TextInput
          style={styles.SearchBar}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Search"}
          ref={input}
          onBlur={Keyboard.dismiss}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  SearchBarContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  SearchBar: {
    backgroundColor: 'white',
    marginVertical: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '90%',
    borderRadius: 20,
  },
})

export default SearchBar