import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { DrawerGroup } from './drawer';
import { store } from '../store';

export const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerGroup />
      </NavigationContainer>
    </Provider>
  );
};
