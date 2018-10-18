import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = (props) => (
  <View style={styles.pageContainer}>
    <View style={styles.leftItem}>
      {props.title !== 'Login'
        ? (
          <TouchableOpacity onPress={props.back}>
            <Text>Back</Text>
          </TouchableOpacity>
        )
        : null}
    </View>
    <View style={styles.titleContainer}>
      {props.title
        ? <Text style={styles.titlePageText}>{props.title}</Text>
        : ""
      }
    </View>
    <View style={styles.rightItem}>
    </View>
  </View>
);

export default Header;
