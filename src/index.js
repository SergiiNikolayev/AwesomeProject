import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, SwitchNavigator } from 'react-navigation';
import UserList from "./containers/UserList";
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
    UserList: UserList,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const appStack = createStackNavigator(

  {
    UserList: UserList,
    DetailsScreen: DetailsScreen,
  },
  {
    initialRouteName: 'UserList',
    headerMode: 'none'
  }
);

const MyApp = SwitchNavigator(
  {
    Login: RootStack,
    // UserList: appStack,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    //return this.props.isHydrated ? <RootStack/> : <appStack/>;
    return <MyApp/>;
  }
}