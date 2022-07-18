import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './Products.style';
import axios from 'axios';

import Config from 'react-native-config';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(Config.API_URL);
    setData(productData);
  };

  const renderProduct = ({item}) => <Text>{item.title}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={data} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};

export default Products;
