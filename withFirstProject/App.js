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
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Cekap</Text>
        <Text>Check-up Codes</Text>
      </View>
      <Text>Hi Chat</Text>
      <Button 
        title="Press me" 
        onPress={()=>{console.log('Hi');}}
        color="cyan" 
        />
      <Button 
        title="Press me" 
        onPress={sayHello}
        disabled
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    margin:20,
    padding:10,
    borderRadius:5,

  },
});

export default App;
