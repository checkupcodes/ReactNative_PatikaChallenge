import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Arama..."
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};
export default SearchBar;
