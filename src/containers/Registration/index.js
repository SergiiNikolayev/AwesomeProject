import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import Header from "../../components/Header";
import {registerUser} from '../../api/axoisRequest';


export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'sydney@fife',
      password: 'pistol',
    };
  }

  onRegistration = async() => {
    const { email, password } = this.state;
    try {
      const result = await registerUser({ email, password });
      await console.log('debug-result', result);
    } catch (error) {
      console.log('Error in login', error);
    }
  }

  onChangeEmail(value) {
    this.setState({email: value});
  }

  onChangePassword(value) {
    this.setState({password: value});
  }

  render() {
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
            value={this.state.email}
            onChangeText={(text) => this.onChangeEmail(text)}
          />
          <MyInput
            title="Password"
            value={this.state.password}
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
