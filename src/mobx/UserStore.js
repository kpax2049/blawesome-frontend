import { decorate, observable, action } from 'mobx';

class UserStore {
  user = null;

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user || null;
  }
}

decorate(UserStore, {
  user: observable,
  setUser: action,
  getUser: action,
});

export default new UserStore();
