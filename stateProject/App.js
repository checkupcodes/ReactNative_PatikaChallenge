import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);
  function updateCounter() {
    setCounter(counter + 1);
  }
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Counter {counter}</Text>
      <Button title="uptade button" onPress={updateCounter}></Button>
    </SafeAreaView>
  );
}
export default App;
