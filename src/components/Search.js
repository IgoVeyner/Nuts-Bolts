import React from 'react'
import { 
    StyleSheet, TouchableWithoutFeedback, 
    Keyboard, FlatList
  } from 'react-native'
import Item from './Item'
import { partsData } from '../partsData'
import SearchInput from './SearchInput'
import { useState } from 'react'
import Empty from './Empty'

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState("")

  let listToDisplay = partsData

  if (text !== "") {
    listToDisplay = partsData.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase())
    })
  }

  const handlePress = () => {
    Keyboard.dismiss()
  }

  const renderItem = ({ item }) => (
    <Item item={item} navigation={navigation} />
  )

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
          ListFooterComponent={
            () => listToDisplay.length > 0 ? null : <Empty />
          }
          style={{flex: 1}}
          data={listToDisplay}
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