import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Switch,
  FlatList,
  Alert,
} from 'react-native';

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    Alert.alert('number');
  }, [number]);
  useEffect(() => {
    Alert.alert('counter');
  }, [counter]);
  return (
    <SafeAreaView>
      <Text>Button click</Text>
      <Text>Number : {number}</Text>
      <Text>Counter : {counter}</Text>
      <Button title="Click" onPress={() => setNumber(number + 1)} />
      <Button title="Update Counter" onPress={() => setCounter(counter + 10)} />
    </SafeAreaView>
  );
}
export default App;
