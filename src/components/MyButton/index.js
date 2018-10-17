import React from 'react';
import {View, Button} from 'react-native';

import {styles} from "./styles";

const MyButton = (props) => {
  return (
    <View>
      <Button
        style={styles.button}
        title={props.btnName}
        onPress={props.pressed}
        color="#70B455"
      />
    </View>
  );
};

export default MyButton;
