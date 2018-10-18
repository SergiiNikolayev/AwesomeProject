import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
// import { Provider } from 'mobx-react';
import App from './src';
import HomeScreen from './src';
import Login from './src/containers/Login';
import Registration from './src/containers/Registration';
import Header from "./src/components/Header";
import UserList from "./src/containers/UserList";
// import stores from './src/stores';


export default class Setup extends Component {
  render() {
      return (
        <View style={styles.container}>
          <App />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
