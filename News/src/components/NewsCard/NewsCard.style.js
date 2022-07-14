import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  inner_container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  description: {
    marginTop: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    textDecorationLine: 'underline',
    padding: 5,
    fontSize: 13,
  },
});
