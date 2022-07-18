import React from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import styles from './Products.style';

import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={data} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};

export default Products;
