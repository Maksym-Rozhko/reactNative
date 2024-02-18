import { flow, types } from 'mobx-state-tree';

import { User } from '@/api';
import JSONPlaceholder from '@/api/JSONPlaceholder/JSONPlaceholder';

const ThemeStore = types
  .model('ThemeStore', {
    theme: types.optional(types.union(types.literal('light'), types.literal('dark')), 'light'),
  })
  .actions((self) => ({
    setTheme(theme: typeof self.theme) {
      self.theme = theme;
    },
    fetchUser: flow(function* fetchUser({ signal, userId = 1 } = {}): Generator<Promise<User>, User, Awaited<User>> {
      {
        const user = yield JSONPlaceholder.getUser({
          signal,
          userId,
        });

        return user;
      }
    }),
  }));

export default ThemeStore;
