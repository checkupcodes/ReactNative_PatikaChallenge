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

  useEffect(() => {
    console.log('number update' + number);
  }, [number]);

  useEffect(() => {
    console.log('Mounting...');
  }, []);

  function updateCounter() {
    console.log('1. state value :' + number);
    setNumber(number + 1);
    console.log('2. state value :' + number);
  }

  return (
    <SafeAreaView>
      <Text>LifeCyn</Text>
      <Text>Number{number}</Text>
      <Button title="up" onPress={updateCounter}></Button>
    </SafeAreaView>
  );
}
export default App;
