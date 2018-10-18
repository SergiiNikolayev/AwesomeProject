import React, {Component} from 'react';
import {View} from 'react-native';
import { inject, observer } from 'mobx-react';

import {styles} from './styles.js';
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { loginUser } from '../../api/axoisRequest';

const Login = inject((allStores) => ({
  user: allStores.user,
}))(
  observer(
    class myComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          username: 'peter@klaven',
          password: 'cityslicka',
        };
      }

      onLogin = async () => {
        const { username, password } = this.state;
        try {
          const result = await loginUser({ username, password });
          await console.log('debug-result', result.data.token);
          await alert('Token: ' + result.data.token);
          this.props.navigation.navigate("UserList");
          } catch (error) {
          console.log('Error in login', error);
        }
      }

      registration = () => {
        this.props.navigation.navigate('Reg');
      }

      onChangeUsername(value) {
        this.setState({username: value});
      }

      onChangePassword(value) {
        this.setState({password: value});
      }

      render() {
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
                value={this.state.password}
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
  )
)

export default Login;
