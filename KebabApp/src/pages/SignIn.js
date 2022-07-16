import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';

import Input from '../components/Input/Input';

function SingIn() {
  return (
    <SafeAreaView>
      <Text>Sign in</Text>
      <View style={{margin: 50}} />
      <Input label="Name" placeholder="Write your name" />
      <Input label="Surname" placeholder="Write your surname" />
      <Input label="Age" placeholder="Write your age" />
      <Input label="Email" placeholder="Write your email" />
      <Input label="From" placeholder="Where are you from" />
      <Button text="Submit" onPress={null} />
    </SafeAreaView>
  );
}

export default SingIn;
