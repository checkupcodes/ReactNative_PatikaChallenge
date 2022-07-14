/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* Components Y */

import React from 'react';
import {View, Text, SafeAreaView, Button ,StyleSheet, TouchableOpacity} from 'react-native';
import Card from './components/Card';

function sayHello(){
  console.log('Cekap');
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card 
      title="Eddard Shark" 
      text="Winter is coming"
      />
      <Card 
      title="Check-up Codes" 
      text="Youtube social media influencer"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e0e0e0',
  },
});

export default App;
