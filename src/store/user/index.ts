import { types } from 'mobx-state-tree';

const UserStore = types
  .model('UserStore', {
    firstName: types.string,
    lastName: types.string,
  })
  .actions((self) => ({
    setFirstName(firstName: string) {
      self.firstName = firstName;
    },
    setLastName(lastName: string) {
      self.lastName = lastName;
    },
  }))
  .views((self) => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
  }));

export default UserStore;
