import React from 'react'
import { 
    StyleSheet, TouchableWithoutFeedback, 
    Keyboard, FlatList
  } from 'react-native'
import Item from './Item'
import { partsData } from './partsData'
import SearchInput from './SearchInput'
import { useState } from 'react'

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState("")

  const handlePress = () => {
    Keyboard.dismiss()
  }

  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />
  )

  const searchResults = () => {
    if (text === "") { return partsData }
    return partsData.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
  }

  return (
      <TouchableWithoutFeedback
        onPress={handlePress}
      >
        <FlatList
          ListHeaderComponent={
            () => <SearchInput 
              text={text}
              onChangeText={onChangeText}
            />
          }
          stickyHeaderIndices={[0]}
          style={{flex: 1}}
          data={searchResults()}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.List}
        />
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  List: {
    backgroundColor: '#ddd',
    paddingBottom: 48,
    paddingHorizontal: '5%'
  },
})

export default Search