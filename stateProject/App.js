import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button, Switch, FlatList} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'cekap', isFavorite: false},
  {id: 2, name: 'checkupcodes', isFavorite: false},
  {id: 3, name: 'elselif', isFavorite: true},
  {id: 4, name: 'cekap.exe', isFavorite: true},
  {id: 5, name: 'elif.exe', isFavorite: false},
  {id: 6, name: 'cafe.exe', isFavorite: true},
];
function App() {
  const [CafeList, setCafeList] = useState(data);
  const [showOnlyFavories, setShowOnlyFavories] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavories(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(CafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Show only Favories</Text>
      </View>
      <Switch style={{}} value={showOnlyFavories} onValueChange={onFavoritesChange} />
      <FlatList
        data={CafeList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}
export default App;
