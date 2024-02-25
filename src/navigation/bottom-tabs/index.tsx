import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';

import { CustomIcon } from '../../components/CustomIconSvg/CustomIconSvg';
import { Carousel } from '../../screens/Carousel/Carousel';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { ProfileScreen } from '../../screens/Profile/Profile';

export type TabsGroupParamList = {
  Home: undefined;
  Products: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator();

export const TabsGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: { backgroundColor: 'rgba(255, 255, 255, 0.15)', borderTopColor: 'transparent' },
        tabBarLabel: '',
        headerTitle: '',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Carousel}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomIcon iconName="home" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CustomIcon iconName="profile" size={size} color={color} focused={focused} />
          ),
          //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Product"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <Path d="M6.25 8H18.75" stroke="#BC1B26" strokeWidth="1.5" strokeLinecap="round" />
              <Path d="M6.25 12H18.75" stroke="#BC1B26" strokeWidth="1.5" strokeLinecap="round" />
              <Path d="M6.25 16H18.75" stroke="#BC1B26" strokeWidth="1.5" strokeLinecap="round" />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
