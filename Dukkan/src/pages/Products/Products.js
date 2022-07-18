import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, ActivityIndicator, View} from 'react-native';
import styles from './Products.style';
import axios from 'axios';

import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(Config.API_URL);
    setData(productData);
    setLoading(false);
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
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
