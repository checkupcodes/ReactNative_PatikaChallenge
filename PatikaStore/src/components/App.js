import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Product from './Product/Product';
import products_data from './products_data.json';
import SearchBar from './SearchBar';
function App() {
  const renderProducts = ({item}) => <Product products={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header_title}>PATIKASTORE</Text>
      <SearchBar />
      <FlatList
        numColumns={2}
        keyExtractor={item => item.u_id.toString()}
        data={products_data}
        renderItem={renderProducts}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  header_title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'purple',
  },
  searchbar: {
    backgroundColor: '#eceff1',
    borderRadius: 10,
    margin: 10,
  },
});

export default App;
