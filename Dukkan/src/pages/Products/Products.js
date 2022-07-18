import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './Products.style';

import Config from 'react-native-config';

const Products = () => {
  const renderProduct = ({item}) => null;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={null} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};

export default Products;
