import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Second(props) {
  console.log(props);
  const user = props.route.params.username;
  function backToPage() {
    props.navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi from cekap </Text>
      <Text style={styles.text2}>{user} </Text>
      <Button title="Go to back" onPress={backToPage} />
    </SafeAreaView>
  );
}

export default Second;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, fontWeight: '800'},
  text2: {fontSize: 15, fontWeight: '500'},
});
