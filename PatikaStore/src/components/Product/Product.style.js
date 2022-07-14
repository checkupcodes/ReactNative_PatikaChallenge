import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: -5,
    backgroundColor: '#E1E1E1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    margin: 5,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: -20,
    padding: 5,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    margin: 10,
    resizeMode: 'contain',
    borderColor: '#E1E1E1',
    borderRadius: 6,
  },
  price: {
    fontSize: 17,
    fontWeight: '600',
    color: 'gray',
    padding: 10,
  },
});
