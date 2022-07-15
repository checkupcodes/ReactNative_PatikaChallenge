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
  const [helloFlag, setHelloFlag] = useState(true);

  function updateFlag() {
    setHelloFlag(!helloFlag);
  }

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title="up" onPress={updateFlag}></Button>
      {helloFlag && <Hello />}
    </SafeAreaView>
  );
}
export default App;

function Hello() {
  useEffect(() => {
    console.log('Merhaba dünya');

    return () => {
      console.log('Gidiyorum bütün aşklar yüreğimde');
    };
  }, []);
  return (
    <View style={{backgroundColor: 'green', padding: 10}}>
      <Text>Bir varmis bir yokmus</Text>
    </View>
  );
}
