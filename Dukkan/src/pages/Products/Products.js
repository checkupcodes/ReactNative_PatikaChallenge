import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Products.style';

import Config from 'react-native-config';

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hi Products {Config.API_URL}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Products;
