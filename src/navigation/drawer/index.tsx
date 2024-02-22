import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeScreen } from '../../screens/Home/HomeScreen';
import { ProfileScreen } from '../../screens/Profile/Profile';
import { SettingsScreen } from '../../screens/Settings/Settings';
import { TabsGroup } from '../bottom-tabs';
import { HomeStackGroup, HomeStackParamList } from '../native-stack';

export type DrawerParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Products: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerGroup = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        // component={TabsGroup}
        component={HomeStackGroup}
      />
      <Drawer.Screen name="Products" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
