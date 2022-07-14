import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Card.style';

const Card = props => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Person : {props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
        <TouchableOpacity style={styles.button_card} onPress={()=>Alert.alert('Merhaba' + props.title)}>
          <Text style={styles.button_text}>I liked</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
