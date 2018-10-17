import React from 'react';
import {View, TextInput, Text} from 'react-native';

import {styles} from "./styles";

const MyInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.inputStyles}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default MyInput;
