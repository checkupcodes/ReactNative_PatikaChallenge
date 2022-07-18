import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Products.style';

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hi Products</Text>
      </View>
    </SafeAreaView>
  );
};

export default Products;
