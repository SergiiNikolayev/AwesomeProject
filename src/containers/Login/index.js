import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles.js';
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

// import { loginUser } from '../../requests/api_requests';
// import { setToken } from '../../requests/axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

  }

  async onLogin() {
    alert("sadqwqwdqd");
  }

  registration() {
    alert("navigation.navigate");
  }

  onChangeUsername(value) {
    this.setState({username: value});
  }

  onChangePassword(value) {
    this.setState({password: value});
  }

  render() {
    console.log('debug-state', this.state);
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <MyInput
            title="Login"
            onChangeText={(text) => this.onChangeUsername(text)}
          />
          <MyInput
            title="Password"
            onChangeText={(text) => this.onChangePassword(text)}
          />
          <MyButton
            btnName="Submit"
            pressed={this.onLogin}
          />
          <MyButton
            btnName="Registration"
            pressed={this.registration}
          />
        </View>
      </View>
    );
  }
}
