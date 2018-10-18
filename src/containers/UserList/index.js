import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import { styles } from './styles';

import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import Header from "../../components/Header";
import { loadUsers } from '../../api/axoisRequest';


export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'sydney@fife',
      password: 'pistol',
      serverData: [],
      newArr: [],
    };
  }


  async componentDidMount() {
    const users = await loadUsers();
    this.setState({
      serverData: [...users.data.data]
    });
  }

   async get() {
    const users = await loadUsers();
    console.log('debug-users', users);
    this.setState({
      serverData: [...users.data.data]
    });
  }

  onDelete = (id) => {
    console.log('debug-id', id);
    return this.state.serverData.filter((item) => item.id !== id)
  }

  render() {
    console.log('debug-this.state.serverData', this.state.serverData);
    return (
      <View >
        <Header
          back={() => this.props.navigation.goBack()}
          title="User List"
        />

            <FlatList
              data={this.state.serverData}
              renderItem={({item}) =>
                <View style={styles.container}>
                  <Text style={styles.flexOne}>{item.id}</Text>
                  <View style={styles.flexOne}>
                    <Image
                      style={styles.img}
                      source={{uri: `${item.avatar}`}}
                    />
                  </View>
                  <Text style={styles.flexTwo}>{item.first_name}</Text>
                  <Text style={styles.flexTwo}>{item.last_name}</Text>
                  <MyButton
                    btnName="Delete"
                    pressed={() => this.onDelete(item.id)}
                  />
                </View>
                }
            />
      </View>
    );
  }
}
