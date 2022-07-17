import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import axios from 'axios';

function App() {
  async function fetchData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Selam</Text>
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
}

export default App;
