import { NavigationContainer } from '@react-navigation/native';

import { DrawerGroup } from './drawer';

import { RootStoreProvider } from '@/context';

export const Navigation = () => {
  return (
    <RootStoreProvider>
      <NavigationContainer>
        <DrawerGroup />
      </NavigationContainer>
    </RootStoreProvider>
  );
};
