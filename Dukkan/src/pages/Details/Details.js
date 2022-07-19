import React from 'react';
import {SafeAreaView, Text, View, Image, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from './Details.style';

const Details = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  console.log(id);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
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
