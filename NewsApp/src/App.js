import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

const App = () => {
  //Karmaşık kodlar içerisinde ver tasarrufu sağlamak için bunu kullan
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        }
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        //renderItem={({item}) => <NewsCard news={item} />}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1,
  },
  header_text: {
    fontWeight: '700',
    fontSize: 32,
  },
});

export default App;
