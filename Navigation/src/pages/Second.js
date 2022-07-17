import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Second() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi from cekap </Text>
      <Text style={styles.text2}>Hi</Text>
    </SafeAreaView>
  );
}

export default Second;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: '800'},
  text2: {fontSize: 15, fontWeight: '500'},
});
