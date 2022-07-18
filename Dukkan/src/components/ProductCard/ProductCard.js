import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
      </View>
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductCard;
