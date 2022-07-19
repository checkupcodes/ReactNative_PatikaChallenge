import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import styles from './Details.style';

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}>T</Text>
      <Text style={styles.desc}>D</Text>
      <Text style={styles.price}>T</Text>
    </SafeAreaView>
  );
};

export default Details;
