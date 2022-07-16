import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const First = props => {
  function navigateToPage() {
    props.navigation.navigate('SecondPage');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi from cekap</Text>
      <Button title="Go to second" onPress={navigateToPage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: '800'},
});

export default First;
