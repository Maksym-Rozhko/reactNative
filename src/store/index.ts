import { types, addMiddleware } from 'mobx-state-tree';

import ThemeStore from '@/store/theme';
import UserStore from '@/store/user';

const RootStore = types.model('RootStore', {
  ui: ThemeStore,
  user: UserStore,
});

export const rootStore = RootStore.create({
  ui: ThemeStore.create(),
  user: UserStore.create({
    firstName: 'Max',
    lastName: 'Rozhko',
  }),
});

addMiddleware(rootStore, (call, next) => {
  console.log(`Action '${call.name}' invoked`);
  return next(call);
});

// onSnapshot(rootStore, (snapshot) => {
//   console.log(snapshot);
// });
