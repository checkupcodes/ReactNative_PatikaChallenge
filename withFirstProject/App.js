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
      <View style={styles.box_1} />
      <View style={styles.box_2} />
      <View style={styles.box_3} />
      <View style={styles.box_4} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row-reverse',
    backgroundColor:'black',
    justifyContent:'space-around', 
    alignItems:'center',
  },
  box_1:{
    width:75,
    height:75,
    backgroundColor:'red',
  },
  box_2:{
    width:75,
    height:75,
    backgroundColor:'green',
  },
  box_3:{
    width:75,
    height:75,
    backgroundColor:'yellow',
  },
  box_4:{
    width:75,
    height:75,
    backgroundColor:'orange',
  },
});

export default App;
