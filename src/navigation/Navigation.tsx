import { NavigationContainer } from '@react-navigation/native';

import { DrawerGroup } from './drawer';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
};
