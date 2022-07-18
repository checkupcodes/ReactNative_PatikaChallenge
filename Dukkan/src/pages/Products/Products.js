import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import styles from './Products.style';
import axios from 'axios';

import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(Config.API_URL);
      setData(productData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

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
