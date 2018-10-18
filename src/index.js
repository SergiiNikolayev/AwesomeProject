/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, SwitchNavigator } from 'react-navigation';
import Login from './containers/Login';
import Registration from "./containers/Registration";

/!**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *!/


export const routeNames = {
  LOGIN: 'Login',
  REG: 'Registration',
};

const loginScreens = {
  [routeNames.LOGIN]: {
    screen: Login,
  },
  [routeNames.REG]: {
    screen: Registration,
  },
};

const login = createStackNavigator(loginScreens, mainConfig);


const mainConfig = {
  initialRouteName: routeNames.LOGIN,
  headerMode: 'none'
};


const MyApp = SwitchNavigator(
  {
    [routeNames.LOGIN]: login,
  },
  {
    initialRouteName: routeNames.LOGIN,
  }
);

export default class App extends Component<Props> {
  render() {
    return <MyApp />;
  }
}

*/

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import { createStackNavigator, SwitchNavigator } from 'react-navigation';
// import Login from './containers/Login';
// import Registration from "./containers/Registration";
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//   'Double tap R on your keyboard to reload,\n' +
//   'Shake or press menu button for dev menu',
// });


/*
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/






/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, SwitchNavigator } from 'react-navigation';
import Login from './containers/Login';
import Registration from "./containers/Registration";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/


// import React from 'react';
// import { View, Text } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
//
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
//
// export default createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });


import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from "./containers/Login";
import Registration from "./containers/Registration";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(

  {
    Login: Login,
    Reg: Registration,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}