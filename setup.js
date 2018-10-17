import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
// import { Provider } from 'mobx-react';
import App from './src';
// import stores from './src/stores';


export default class Setup extends Component {
  render() {
      return (
        <View style={styles.container}>
          <App/>
        </View>
    );
  }
}

{/*<Provider {...stores}>*/}
{/*<View style={styles.container}>*/}
{/*<App/>*/}
{/*</View>*/}
{/*</Provider>*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});