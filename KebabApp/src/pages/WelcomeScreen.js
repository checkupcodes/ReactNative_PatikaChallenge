import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet} from 'react-native';

import Button from '../components/Button/Button';

function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mac Fitness Saloon</Text>
      <Button text="Submit" onPress={null} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default Welcome;
