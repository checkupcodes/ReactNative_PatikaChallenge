import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

import Button from '../components/Button/Button';

function Welcome() {
  return (
    <SafeAreaView>
      <Text>Welcome</Text>
      <Button text="Submit" onPress={null} />
    </SafeAreaView>
  );
}

export default Welcome;
