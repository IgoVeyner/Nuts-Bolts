import React from 'react'
import { 
  View, StyleSheet, TextInput, 
  Keyboard,
} from 'react-native'
import { useState } from 'react'

const SearchInput = () => {
  const [text, onChangeText] = useState("")

  return (
    <View 
      style={styles.SearchBarContainer}  
    >
      <TextInput
        style={styles.SearchBar}
        onChangeText={onChangeText}
        value={text}
        placeholder={"Search"}
        onBlur={Keyboard.dismiss}
      />
    </View>
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
    width: '100%',
    borderRadius: 20,
  },
  
})

export default SearchInput