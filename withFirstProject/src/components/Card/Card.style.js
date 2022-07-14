import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    margin: 5,
    marginBottom: 0,
  },
  text: {
    fontSize: 15,
    margin: 5,
    marginTop: 2,
  },
  button_card: {
    backgroundColor: '#00C2FF',
    padding: 10,
    alignItems: 'center',
  },
  button_text: {
    fontWeight: '800',
    color: 'white',
  },
});
