import React from 'react'
import { 
  View, Text, StyleSheet, TextInput, 
  TouchableWithoutFeedback, Keyboard,
  FlatList, ScrollView
} from 'react-native'
import Item from './Item'
import { partsData } from './partsData'
import SearchInput from './SearchInput'

const Search = () => {
  const handlePress = () => {
    Keyboard.dismiss()
  }

  const renderItem = ({ item }) => (
    <Item item={item}/>
  )

  return (
      <TouchableWithoutFeedback
        onPress={handlePress}
      >
        <FlatList
          ListHeaderComponent={
            () => <SearchInput />
          }
          data={partsData}
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