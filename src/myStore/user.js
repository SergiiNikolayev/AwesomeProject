import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import { create, persist } from 'mobx-persist';

class UserStore {
  @observable isHydrated = false;
  @persist @observable token = '';
  @persist('object') @observable user = {};


  @action setToken(token) {
    this.token = token;
  }

  @action setHydrated(value) {
    try {
      this.isHydrated = value;
    } catch (e) {
      console.log('setHydrated', e);
    }
  }

  @action clearStore() {
    this.token = '';
    this.user = {};
  }
}
const user = new UserStore();

const hydrate = create({
  storage: AsyncStorage
});

export default user;

hydrate('user', user)
  .then(() => {
    user.setHydrated(true);
  });
