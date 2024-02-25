import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from '../store';
import { TabsGroup } from './bottom-tabs';

export const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabsGroup />
      </NavigationContainer>
    </Provider>
  );
};
