import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const First = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi from cekap</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: '800'},
});

export default First;
