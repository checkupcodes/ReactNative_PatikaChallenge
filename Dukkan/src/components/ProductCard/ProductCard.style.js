import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#1f1f1f',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
  },
  body_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '800',
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationColor: '#00008b',
  },
  button: {
    position: 'absolute',
    margin: 10,
    padding: 5,
    paddingLeft: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#00a86b',
    borderColor: '#1f1f1f',
    color: 'white',
    overflow: 'hidden',
    right: 0,
    bottom: 0,
  },
});
