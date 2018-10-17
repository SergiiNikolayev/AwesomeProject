import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles.js';
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'peter@klaven',
      password: 'cityslicka',
    };

  }

  async onLogin() {
      try {
        let response = await fetch('https://reqres.in/api/login',
          {
            method: 'POST',
            body: JSON.stringify({
              "email": "peter@klaven",
              "password": "cityslicka"
            })
          }
        );
        let responseJson = await response.json();
        alert(responseJson.status);
        return responseJson.status;
      } catch (error) {
        console.error(error);
      }
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
            value={this.state.username}
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
