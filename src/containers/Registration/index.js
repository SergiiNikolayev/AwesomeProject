import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import Header from "../../components/Header";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async onRegistration() {
    alert("sadqwqwdqd");
  }

  onChangeEmail(value) {
    this.setState({email: value});
  }

  onChangePassword(value) {
    this.setState({password: value});
  }

  render() {
    console.log('debug-state', this.state);
    return (
      <View style={styles.container}>
        <Header
          pressBack={() => alert("back")}
          title="Registration"
        />
        <View style={styles.container}>
        <View style={styles.form}>
          <MyInput
            title="E-mail"
            onChangeText={(text) => this.onChangeEmail(text)}
          />
          <MyInput
            title="Password"
            onChangeText={(text) => this.onChangePassword(text)}
          />
          <MyButton
            btnName="Submit"
            pressed={this.onRegistration}
          />
        </View>
      </View>
      </View>
    );
  }
}
