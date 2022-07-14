/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* Components Y */

import React from 'react';
import {View, Text, SafeAreaView, Button ,StyleSheet} from 'react-native';

function sayHello(){
  console.log('Cekap');
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>
          Check-up Codes
        </Text>
      </View>
      <View style={styles.middle_view_container}>
        <Text>
          Hi
        </Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>
          Yazilim Geliştirme Dünyasi
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  upper_view_container:{
    flex:1,
    backgroundColor:'red',
  },
  bottom_view_container:{
    flex:1,
    backgroundColor:'blue',
  },
  middle_view_container:{
    flex:1,
    backgroundColor:'green',
  },
});

export default App;
