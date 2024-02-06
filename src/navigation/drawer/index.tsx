import { createDrawerNavigator } from '@react-navigation/drawer';

import { Carousel } from '../../screens/Carousel/Carousel';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { SettingsScreen } from '../../screens/Settings/Settings';

const Drawer = createDrawerNavigator();

export const DrawerGroup = () => {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Drawer.Screen
        name="Home"
        component={Carousel}
        options={{
          headerTitle: '',
        }}
      />
      <Drawer.Screen name="Products" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
