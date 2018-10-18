import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from "./styles";

const MyButton = (props) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.pressed}
        color="#70B455"
      >
        <Text style={styles.btnName}>{props.btnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
