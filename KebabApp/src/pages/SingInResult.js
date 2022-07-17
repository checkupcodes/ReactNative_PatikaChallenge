import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SingInResult({route}) {
  return (
    <SafeAreaView>
      <Text>Name : </Text>
      <Text>Surname : </Text>
      <Text>Age : </Text>
      <Text>Email : </Text>
      <Text>From : </Text>
    </SafeAreaView>
  );
}

export default SingInResult;
