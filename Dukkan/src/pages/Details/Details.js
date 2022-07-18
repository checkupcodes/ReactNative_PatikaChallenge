import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Details.style';

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hi Details</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
